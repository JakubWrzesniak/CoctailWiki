import React, {Component} from 'react';
import {Loading} from './LoadingComponent';
import { Link } from 'react-router-dom';    


class ListItem extends Component{
    render(){
        return(
           <Link to ={`/coctail/${this.props.idDrink}`} > 
                <div className="row">
                    <div className="col-md-6">
                        <img src ={this.props.img} alt={this.props.name}/>  
                    </div>
                     <div className="col-md-6">
                           {this.props.name}  
                    </div>           
                </div>
            </Link>
        );
    }
}


function List(props){
    const coctails = props.coctails;
    const lisItems = coctails.map((coctails)=>
     
            <div className="coctail-list-item">
                <ListItem key = {coctails.idDrink} img ={coctails.strDrinkThumb + "/preview"} name={coctails.strDrink} idDrink = {coctails.idDrink}/>
            </div>
        
        );
        return (
            <div>
                {lisItems}
            </div>
                
        );
}

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
            return(
            <div className ="container">
                <div className="coctail-list">
                    <List coctails= {this.state.coctails.drinks} />
                </div>
            </div>);
        }
    };
}
export default CoctailList;