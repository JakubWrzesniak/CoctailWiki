import React, {Component} from 'react';
import { connect } from 'react-redux';
import {coctailLoading, fetchCoctailsByCategory} from '../redux/ActionCreators';
import {Loading} from './LoadingComponent';
import MyTable from './TableComponent';


const mapStateToProps = state => {
    return {
        coctails: state.coctails
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCoctailsByCategory: (category) => {dispatch(fetchCoctailsByCategory(category))}
})

const createCategory = (params) => {
    var category = params.category;
    if(params.category2){
        category = category + "/" + params.category2
    }
    if(params.category3)
        category = category + "/" + params.category3
    return category;
}


class CoctailList extends Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
       this.props.fetchCoctailsByCategory(createCategory(this.props.category));
    }

    render(){
        if(this.props.coctails.isLoading)
            return(<div><Loading/></div>);
        else{
            return(
            <div className ="container">
                <div className="row">
                    <MyTable headers = {["Zdjecie","Nazwa"]} list= {this.props.coctails.coctails.drinks} values={["strDrinkThumb","strDrink"]}  />
                </div>
            </div>);
        }
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(CoctailList);