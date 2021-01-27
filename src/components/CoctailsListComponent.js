import React, {Component} from 'react';
import {Loading} from './LoadingComponent';
import List from './ListComponent';
import Title from './TitleComponent';

class CoctailList extends Component{

    constructor(props){
        super(props);
        this.state ={
            title: this.props.title,
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
                <div className ="container"> 
                    <div className = "row">
                         <div className =" col-12">
                            <Title title = {this.state.title}/>   
                        </div>
                    </div>
                    <div className="drink-list">
                        <List elems = {listItems}/>
                    </div>
                 </div>
            );}
    };
}
export default CoctailList;