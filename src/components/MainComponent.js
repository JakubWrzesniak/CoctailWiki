import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import CoctailDetails from './CoctailComponent';
import CoctailList from './CoctailsListComponent';
import IngredeintsList from './IngredientsListComponent';
import Footer from './FooterComponent';
import AlphabetList from './AlphabetBarComponent';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {fetchCoctailsBy, fetchCategories, fetchFilterCoctails, fetchCoctailById, fetchGlasses, fetchIngredients, fetchRandomCoctail} from "../redux/ActionCreators"

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
    fetchCoctailsBy: (type, value) => {dispatch(fetchCoctailsBy(type, value))},
    fetchCategories: () => {dispatch(fetchCategories())},
    fetchCoctailById: (Id) => {dispatch(fetchCoctailById(Id))},
    fetchFilterCoctails: (value, id) => {dispatch(fetchFilterCoctails(value, id))},
    fetchGlasses: () => {dispatch(fetchGlasses())},
    fetchIngredients: () => {dispatch(fetchIngredients())} ,
    fetchRandomCoctail: () => {dispatch(fetchRandomCoctail())},
});


class Main extends Component {
    constructor(props) {
        super(props);
        this.state ={
            coctailId: -1,
            coctailFilter: "",
        }

        this.handleCoctail = this.handleCoctail.bind(this); 
        this.handleCoctailsCategory = this.handleCoctailsCategory.bind(this); 
        this.handleCoctailsGlass = this.handleCoctailsGlass.bind(this); 
        this.handleCoctailsIngredients = this.handleCoctailsIngredients.bind(this);
        this.handleCoctailsLetter = this.handleCoctailsLetter.bind(this);
    }

    handleCoctail(id){
        if(id !== this.state.coctailId){
            this.setState({coctailId: id});
            this.props.fetchCoctailById(id);
        }
    }

    handleCoctailsLetter(letter){
        if (letter !== this.state.coctailFilter){
            this.setState({coctailFilter: letter});
            this.props.fetchCoctailsBy("f",letter);
        }
    }
    handleCoctailsCategory(categoryName){
        if(categoryName !== this.state.coctailFilter){
            this.setState({coctailFilter: categoryName});
            this.props.fetchFilterCoctails(categoryName, "c");
        }
    }

    handleCoctailsGlass(glassName){
        if(glassName !== this.state.coctailFilter){
            this.setState({coctailFilter: glassName});
            this.props.fetchFilterCoctails(glassName, "g");
        }
    }
    handleCoctailsIngredients(ingredientName){
        if(ingredientName !== this.state.coctailFilter){
            this.setState({coctailFilter: ingredientName});
            this.props.fetchFilterCoctails(ingredientName, "i");
        }
    }

    componentDidMount() {
        this.props.fetchRandomCoctail();
        this.props.fetchCategories();   
        this.props.fetchGlasses();
        this.props.fetchIngredients();
    }

    render() {
        const HomePage = () => {
            return(<div className = "main-body">
                <Breadcrumb>
                    <BreadcrumbItem active>Home</BreadcrumbItem>
                </Breadcrumb>
                <Home random = {this.props.coctail.coctail}/>
                </div>);
        }
        
        const CoctailWithId = ({match}) => {
            this.handleCoctail(match.params.coctailId);   
            const breadCrumb = this.props.coctail.coctail.drinks == null ? match.params.coctailId : this.props.coctail.coctail.drinks[0].strDrink; 
            return(<div className="main-body">
                <Breadcrumb>
                    <BreadcrumbItem><a href = "/">Home</a></BreadcrumbItem>
                    <BreadcrumbItem><a href = "/coctails/">Coctails</a></BreadcrumbItem>
                    <BreadcrumbItem active>{breadCrumb}</BreadcrumbItem>
                 </Breadcrumb>
                <CoctailDetails coctail = {this.props.coctail.coctail} isLoading = {this.props.coctail.isLoading} errMess = {this.props.coctail.errMess}/>
                </div>)
        }

        const CoctailsWithCategory = ({match}) =>{
            var category = match.params.category;
            if(match.params.category2) category += "/" + match.params.category2
            if(match.params.category3) category += "/" + match.params.category3
            this.handleCoctailsCategory(category);
            return(<div className ="main-body">
                <Breadcrumb>
                    <BreadcrumbItem><a href = "/">Home</a></BreadcrumbItem>
                    <BreadcrumbItem><a href = "/category/">Coctails</a></BreadcrumbItem>
                    <BreadcrumbItem active>{category}</BreadcrumbItem>
                 </Breadcrumb>
                <CoctailList title = {category} coctails = {this.props.coctails.coctails} isLoading = {this.props.coctails.isLoading} errMess = {this.props.coctails.errMess}/>
                </div>)
        }

        const CoctailsWithGlass = ({match}) => {
            var glass = match.params.glass;
            if(match.params.glass2) glass += "/" + match.params.glass2
            this.handleCoctailsGlass(glass);
            return(<div className ="main-body"><CoctailList title = {glass} coctails = {this.props.coctails.coctails} isLoading = {this.props.coctails.isLoading} errMess = {this.props.coctails.errMess}/></div>)
        }

        const CoctailsWithLetter = ({match}) => {
            var letter = match.params.firstLetter;
            this.handleCoctailsLetter(letter);
            return(<div className = "main-body">
                 <Breadcrumb>
                    <BreadcrumbItem><a href = "/">Home</a></BreadcrumbItem>
                    <BreadcrumbItem><a href = "/coctails/">Coctails</a></BreadcrumbItem>
                    <BreadcrumbItem active>{letter}</BreadcrumbItem>
                 </Breadcrumb>
                <AlphabetList />
                <CoctailList title = {letter} coctails = {this.props.coctails.coctails} isLoading = {this.props.coctails.isLoading} errMess = {this.props.coctails.errMess}/>
                </div>)
        }

        const Ingredients = () =>{
                return(<div className = "main-body">
                    <Breadcrumb>
                        <BreadcrumbItem><a href = "/">Home</a></BreadcrumbItem>
                        <BreadcrumbItem active>Ingredients</BreadcrumbItem>
                    </Breadcrumb>
                    <IngredeintsList ingredients={this.props.ingredients.ingredients} isLoading = {this.props.ingredients.isLoading} errMess={this.props.ingredients.errMess}/>
                    </div>)
        }

        const CoctailIngredients = ({match}) => {
            var ingredient = match.params.ingredient;
            this.handleCoctailsIngredients(ingredient);
            return(<div className ="main-body">
                <Breadcrumb>
                        <BreadcrumbItem><a href = "/">Home</a></BreadcrumbItem>
                        <BreadcrumbItem><a href = "/ingredients/list">Ingredients</a></BreadcrumbItem>
                        <BreadcrumbItem active>{ingredient}</BreadcrumbItem>
                 </Breadcrumb>
                <CoctailList title = {ingredient} coctails = {this.props.coctails.coctails} isLoading = {this.props.coctails.isLoading} errMess = {this.props.coctails.errMess}/>
                </div>)
        }

        return(
            <div className="App">
                <Header categories = {this.props.categories.categories} glasses = {this.props.glasses.glasses} ingredients = {this.props.ingredients.ingredients}/>
                <Switch>        
                    <Route path = '/coctails/:firstLetter' component = { CoctailsWithLetter }/>
                    <Route path = '/coctail/:coctailId' component = { CoctailWithId } />
                    <Route path = '/category/:category/:category2/:category3' component = { CoctailsWithCategory } />
                    <Route path = '/category/:category/:category2' component = { CoctailsWithCategory } />
                    <Route path = '/category/:category/' component = { CoctailsWithCategory } />
                    <Route path = '/glass/:glass/:glass2' component = { CoctailsWithGlass } />
                    <Route path = '/glass/:glass' component = { CoctailsWithGlass } />
                    <Route path = '/ingredients/list' component = { Ingredients }/>
                    <Route path = '/ingredients/:ingredient' component = { CoctailIngredients}/>
                    <Route path = '' component = { HomePage } />
                </Switch>
                <Footer categories = {this.props.categories.categories} />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));