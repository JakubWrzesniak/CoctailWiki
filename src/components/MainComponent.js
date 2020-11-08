import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
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
            <div className="App">
                <Header />
                <Home fetchCoctailsByName = {this.props.fetchCoctailsByName} coctails = {this.props.coctails.coctails}/>
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);