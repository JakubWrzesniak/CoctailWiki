import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import { connect } from 'react-redux';
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
        return(
            <div className="App">
                <Header fetchCoctailsByName = {this.props.fetchCoctailsByName} coctails = {this.props.coctails.coctails}/>
                <Home fetchCoctailsByName = {this.props.fetchCoctailsByName} coctails = {this.props.coctails.coctails}/>
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);