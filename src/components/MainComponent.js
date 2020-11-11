import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import CoctailDetails from './CoctailComponent'
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import {fetchCoctailsByName, fetchCategories} from "../redux/ActionCreators"

const mapStateToProps = state => {
    return {
        search: state.search,
        coctails: state.coctails,
        categories: state.categories
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCoctailsByName: (name) => {dispatch(fetchCoctailsByName(name))},
    fetchCategories: () => {dispatch(fetchCategories())}
});


class Main extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchCategories();
      }

    render() {
        const CoctailWithId = ({match}) => {
            
            return(
                <CoctailDetails 
                    coctail = {this.props.coctails.coctails.drinks.filter((coctail) => coctail.idDrink === parseInt(match.params.coctailId,10)) }
                />
            )
        }
        return(
            <div className="App">
                <Header fetchCoctailsByName = {this.props.fetchCoctailsByName} coctails = {this.props.coctails.coctails} categories = {this.props.categories.categories}/>
                <Switch>
                    <Route path = '/coctail/:coctailId' component ={ CoctailWithId }/>
                </Switch>
                <Home fetchCoctailsByName = {this.props.fetchCoctailsByName} coctails = {this.props.coctails.coctails}/>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));