import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import CoctailDetails from './CoctailComponent';
import CoctailList from './CoctailsListComponent';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import {fetchCoctailsByName, fetchCategories, fetchCoctailsByCategory,fetchCoctailById} from "../redux/ActionCreators"

const mapStateToProps = state => {
    return {
        search: state.search,
        categories: state.categories,
        coctail: state.coctail
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCoctailsByName: (name) => {dispatch(fetchCoctailsByName(name))},
    fetchCategories: () => {dispatch(fetchCategories())},
    fetchCoctailById: (Id) => {dispatch(fetchCoctailById(Id))}
});


class Main extends Component {
    constructor(props) {
        super(props);
        this.state ={
            coctailId: -1
        }

        this.fetchCoctail = this.fetchCoctail.bind(this); 
    }

    fetchCoctail(id){
        if(id!= this.state.coctailId){
            this.setState({coctailId: id});
            this.props.fetchCoctailById(id);
        }
    }

    componentDidMount() {
        this.props.fetchCategories();   
    }

    


    render() {
        
        const CoctailWithId = ({match}) => {
            this.fetchCoctail(match.params.coctailId);            
            return(<CoctailDetails coctail = {this.props.coctail.coctail} isLoading = {this.props.coctail.isLoading} errMess = {this.props.errMess}/>)
        }
        return(
            <div className="App">
                <Header categories = {this.props.categories.categories}/>
                <Switch>
                    <Route path = '/coctail/:coctailId' component = { CoctailWithId } />
                    <Route path = '/category/:category/:category2/:category3' component = { ({match}) => <CoctailList category = {match.params} />} />
                    <Route path = '/category/:category/:category2' component = { ({match}) => <CoctailList category = {match.params} />} />
                    <Route path = '/category/:category/' component = { ({match}) => <CoctailList category = {match.params} />} />
                </Switch>
                <Home fetchCoctailsByName = {this.props.fetchCoctailsByName} />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));