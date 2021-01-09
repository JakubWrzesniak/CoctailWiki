import React, {Component} from 'react';
import {Loading} from './LoadingComponent';
import List from './ListComponent';
import {Card, CardBody, CardTitle, CardImg} from 'reactstrap'
import { Link } from 'react-router-dom';    
import { baseUrl } from '../shared/baseUrl';


class IngredeintsList extends Component{

    constructor(props){
        super(props);
        this.state ={
            ingredients : this.props.ingredients,
            isLoading : this.props.isLoading,
            errMess : this.props.errMess
        }
    }

    render(){
        if(this.state.isLoading)
            return(<div><Loading/></div>);
        else{
            const listItems = this.state.ingredients.drinks.map((elem) => {
                const el = {
                    name: elem["strIngredient1"],
                    img: baseUrl+"images/ingredients/"+elem["strIngredient1"]+"-Medium.png",
                    link: `/ingredients/${elem["strIngredient1"]}`
                }   
                return(el);
            })
            return(
            <div className="drink-list">
                <div className ="container"> 
                    <List elems = {listItems}/>
                </div>
            </div>
            );}
    };
}
export default IngredeintsList;