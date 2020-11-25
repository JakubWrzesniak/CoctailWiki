import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import CoctailDetails from './CoctailComponent';
import CoctailList from './CoctailsListComponent';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import {fetchCoctailsByName, fetchCategories, fetchCoctailsByCategory} from "../redux/ActionCreators"

const mapStateToProps = state => {
    return {
        search: state.search,
        categories: state.categories
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCoctailsByName: (name) => {dispatch(fetchCoctailsByName(name))},
    fetchCategories: () => {dispatch(fetchCategories())},
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
                    fetchCoctailById = {this.props.fetchCoctailById} coctailId ={match.params.coctailId }
                />
            )
        }
        return(
            <div className="App">
                <Header fetchCoctailsByName = {this.props.fetchCoctailsByName} categories = {this.props.categories.categories}/>
                <Switch>
                    <Route path = '/coctail/:coctailId' component = { CoctailWithId }/>
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