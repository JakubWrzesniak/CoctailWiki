import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import CoctailDetails from './CoctailComponent';
import CoctailList from './CoctailsListComponent';
import IngredeintsList from './IngredientsListComponent';
import Footer from './FooterComponent';
import List from './ListComponent';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import {fetchCoctailsByName, fetchCategories, fetchCoctailsBy, fetchCoctailById, fetchGlasses, fetchIngredients} from "../redux/ActionCreators"
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        search: state.search,
        categories: state.categories,
        coctail: state.coctail,
        coctails: state.coctails,
        glasses: state.glasses,
        ingredients : state.ingredients
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCoctailsByName: (name) => {dispatch(fetchCoctailsByName(name))},
    fetchCategories: () => {dispatch(fetchCategories())},
    fetchCoctailById: (Id) => {dispatch(fetchCoctailById(Id))},
    fetchCoctailsBy: (value, id) => {dispatch(fetchCoctailsBy(value, id))},
    fetchGlasses: () => {dispatch(fetchGlasses())},
    fetchIngredients: () => {dispatch(fetchIngredients())} 
});


class Main extends Component {
    constructor(props) {
        super(props);
        this.state ={
            coctailId: -1,
            coctailFilter: ""
        }

        this.handleCoctail = this.handleCoctail.bind(this); 
        this.handleCoctailsCategory = this.handleCoctailsCategory.bind(this); 
        this.handleCoctailsGlass = this.handleCoctailsGlass.bind(this); 
        this.handleCoctailsIngredients = this.handleCoctailsIngredients.bind(this);
    }

    handleCoctail(id){
        if(id!= this.state.coctailId){
            this.setState({coctailId: id});
            this.props.fetchCoctailById(id);
        }
    }
    handleCoctailsCategory(categoryName){
        if(categoryName != this.state.coctailFilter){
            this.setState({coctailFilter: categoryName});
            this.props.fetchCoctailsBy(categoryName, "c");
        }
    }

    handleCoctailsGlass(glassName){
        if(glassName != this.state.coctailFilter){
            this.setState({coctailFilter: glassName});
            this.props.fetchCoctailsBy(glassName, "g");
        }
    }
    handleCoctailsIngredients(ingredientName){
        if(ingredientName != this.state.coctailFilter){
            this.setState({coctailFilter: ingredientName});
            this.props.fetchCoctailsBy(ingredientName, "i");
        }
    }

    componentDidMount() {
        this.props.fetchCategories();   
        this.props.fetchGlasses();
        this.props.fetchIngredients();
    }

    render() {
        
        const CoctailWithId = ({match}) => {
            this.handleCoctail(match.params.coctailId);            
            return(<div className="main-body"><CoctailDetails coctail = {this.props.coctail.coctail} isLoading = {this.props.coctail.isLoading} errMess = {this.props.coctail.errMess}/></div>)
        }

        const CoctailsWithCategory = ({match}) =>{
            var category = match.params.category;
            if(match.params.category2) category += "/" + match.params.category2
            if(match.params.category3) category += "/" + match.params.category3
            this.handleCoctailsCategory(category);
            return(<div className ="main-body"><CoctailList title = {category} coctails = {this.props.coctails.coctails} isLoading = {this.props.coctails.isLoading} errMess = {this.props.coctails.errMess}/></div>)
        }

        const CoctailsWithGlass = ({match}) =>{
            var glass = match.params.glass;
            if(match.params.glass2) glass += "/" + match.params.glass2
            this.handleCoctailsGlass(glass);
            return(<div className ="main-body"><CoctailList title = {glass} coctails = {this.props.coctails.coctails} isLoading = {this.props.coctails.isLoading} errMess = {this.props.coctails.errMess}/></div>)
        }

        const Ingredients = () =>{
                return(<IngredeintsList ingredients={this.props.ingredients.ingredients} isLoading = {this.props.ingredients.isLoading} errMess={this.props.ingredients.errMess}/>)
        }

        const CoctailIngredients = ({match}) => {
            var ingredient = match.params.ingredient;
            this.handleCoctailsIngredients(ingredient);
            return(<div className ="main-body"><CoctailList title = {ingredient} coctails = {this.props.coctails.coctails} isLoading = {this.props.coctails.isLoading} errMess = {this.props.coctails.errMess}/></div>)
        }
        console.log(this.props.ingredients);
        return(
            <div className="App">
                <Header categories = {this.props.categories.categories} glasses={this.props.glasses.glasses} ingredients= {this.props.ingredients.ingredients}/>
                <Switch>
                    <Route path = '/coctail/:coctailId' component = { CoctailWithId } />
                    <Route path = '/category/:category/:category2/:category3' component = { CoctailsWithCategory } />
                    <Route path = '/category/:category/:category2' component = { CoctailsWithCategory } />
                    <Route path = '/category/:category/' component = { CoctailsWithCategory } />
                    <Route path = '/glass/:glass/:glass2' component = { CoctailsWithGlass } />
                    <Route path = '/glass/:glass' component = { CoctailsWithGlass } />
                    <Route path = '/ingredients/list' component = { Ingredients }/>
                    <Route path = '/ingredients/:ingredient' component = { CoctailIngredients}/>
                </Switch>
                <Footer categories = {this.props.categories.categories} />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));