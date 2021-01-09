import React, {Component} from 'react';
import {Loading} from './LoadingComponent';
import List from './ListComponent';
import {Card, CardBody, CardTitle, CardImg} from 'reactstrap'
import { Link } from 'react-router-dom';    


class CoctailList extends Component{

    constructor(props){
        super(props);
        this.state ={
            coctails : this.props.coctails,
            isLoading : this.props.isLoading,
            errMess : this.props.errMess
        }
    }

    render(){
        if(this.state.isLoading)
            return(<div><Loading/></div>);
        else{
            const listItems = this.state.coctails.drinks.map((elem) => {
                const el = {
                    name: elem["strDrink"],
                    img: elem["strDrinkThumb"]+"/preview",
                    link: `/coctail/${elem["idDrink"]}`
                }   
            return(el);})
            return(
            <div className="drink-list">
                <div className ="container"> 
                    <List elems = {listItems}/>
                </div>
            </div>
            );}
    };
}
export default CoctailList;