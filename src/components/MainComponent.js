import React, { Component } from 'react';
import Home from './HomeComponent';
import { connect } from 'react-redux';
import {fetchCoctailsByName} from "../redux/ActionCreators"

const mapStateToProps = state => {
    return {
        search: state.search,
        coctails: state.coctails
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCoctailsByName: (name) => {dispatch(fetchCoctailsByName(name))}
});


class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Home fetchCoctailsByName = {this.props.fetchCoctailsByName} coctails = {this.props.coctails.coctails}/>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);