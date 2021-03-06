import React, {Component} from 'react';
import {Loading} from './LoadingComponent';
import List from './ListComponent';
import { baseUrl } from '../shared/baseUrl';
import Title from './TitleComponent';


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
                    link: `/CoctailWiki/ingredients/${elem["strIngredient1"]}`
                }   
                return(el);
            })
            return(
                 <div className ="container"> 
                 <div className = "row">
                     <div className =" col-12">
                    <Title title = "Ingredients"/>   
                    </div>
                 </div>
                 <div className = "row">
                 <div className="ingredient-list">
                    <List elems = {listItems}/>
                </div>
                 </div>
                 
            </div>
            );}
    };
}
export default IngredeintsList;