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
            return(
            <div className="drink-list">
                <div className ="container"> 
                    <List coctails= {this.state.coctails.drinks} />
                </div>
            </div>
            );}
    };
}
export default CoctailList;