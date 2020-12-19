import React, {Component} from 'react';
import {Loading} from './LoadingComponent';
import {Card, CardBody, CardTitle, CardImg} from 'reactstrap'
import { Link } from 'react-router-dom';    


class ListItem extends Component{
    render(){
        return(
            <Link to ={`/coctail/${this.props.idDrink}`} > 
                <Card>
                    <CardImg src ={this.props.img} alt={this.props.name}></CardImg>
                    <CardBody>
                        <CardTitle>
                            
                                {this.props.name}  
                            
                        </CardTitle>
                    </CardBody>
                </Card>
            </Link>
        );
    }
}


function List(props){
    const coctails = props.coctails;
    const lisItems = coctails.map((coctails)=>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <ListItem key = {coctails.idDrink} img ={coctails.strDrinkThumb + "/preview"} name={coctails.strDrink} idDrink = {coctails.idDrink}/>
            </div>
        );
        return (
            <div className="row">
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
            <div className="drink-list">
                <div className ="container"> 
                    <List coctails= {this.state.coctails.drinks} />
                </div>
            </div>
            );}
    };
}
export default CoctailList;