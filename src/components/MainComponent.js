import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import CoctailDetails from './CoctailComponent';
import CoctailList from './CoctailsListComponent';
import List from './ListComponent';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import {fetchCoctailsByName, fetchCategories, fetchCoctailsByCategory, fetchCoctailById, fetchGlasses} from "../redux/ActionCreators"

const mapStateToProps = state => {
    return {
        search: state.search,
        categories: state.categories,
        coctail: state.coctail,
        coctails: state.coctails,
        glasses: state.glasses
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCoctailsByName: (name) => {dispatch(fetchCoctailsByName(name))},
    fetchCategories: () => {dispatch(fetchCategories())},
    fetchCoctailById: (Id) => {dispatch(fetchCoctailById(Id))},
    fetchCoctailsByCategory: (category) => {dispatch(fetchCoctailsByCategory(category))},
    fetchGlasses: () => {dispatch(fetchGlasses())}
});


class Main extends Component {
    constructor(props) {
        super(props);
        this.state ={
            coctailId: -1,
            coctailCategory: ""
        }

        this.handleCoctail = this.handleCoctail.bind(this); 
        this.handleCoctails = this.handleCoctails.bind(this); 
    }

    handleCoctail(id){
        if(id!= this.state.coctailId){
            this.setState({coctailId: id});
            this.props.fetchCoctailById(id);
        }
    }
    handleCoctails(catgoryName){
        if(catgoryName != this.state.coctailCategory){
            this.setState({coctailCategory: catgoryName});
            this.props.fetchCoctailsByCategory(catgoryName)
        }
    }

    componentDidMount() {
        this.props.fetchCategories();   
        this.props.fetchGlasses();
    }

    render() {
        
        const CoctailWithId = ({match}) => {
            this.handleCoctail(match.params.coctailId);            
            return(<CoctailDetails coctail = {this.props.coctail.coctail} isLoading = {this.props.coctail.isLoading} errMess = {this.props.coctail.errMess}/>)
        }

        const CoctailsWithCategory = ({match}) =>{
            var category = match.params.category;
            if(match.params.category2) category += "/" + match.params.category2
            if(match.params.category3) category += "/" + match.params.category3
            console.log(category);
            this.handleCoctails(category);
            return(<CoctailList coctails = {this.props.coctails.coctails} isLoading = {this.props.coctails.isLoading} errMess = {this.props.coctails.errMess}/>)
        }
        return(
            <div className="App">
                <Header categories = {this.props.categories.categories}/>
                <Switch>
                    <Route path = '/coctail/:coctailId' component = { CoctailWithId } />
                    <Route path = '/category/:category/:category2/:category3' component = { CoctailsWithCategory } />
                    <Route path = '/category/:category/:category2' component = { CoctailsWithCategory } />
                    <Route path = '/category/:category/' component = { CoctailsWithCategory } />
                    <Route path = '/glasses' component = {<List></List>} />
                </Switch>
                <Home fetchCoctailsByName = {this.props.fetchCoctailsByName} />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));