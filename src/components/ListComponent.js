import React,{Component} from 'react';
import {Loading} from './LoadingComponent';
import {Card, CardBody, CardTitle, CardImg} from 'reactstrap'
import { Link } from 'react-router-dom';    

function ListItem(props){
    return(
        <Link to ={`/coctail/${props.idDrink}`} > 
            <Card>
                <CardImg src ={props.img} alt={props.name}></CardImg>
                <CardBody>
                    <CardTitle>{props.name}</CardTitle>
                </CardBody>
            </Card>
        </Link>
        );
}

function List(props){
    const lisItems = props.coctails.map((coctail)=>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <ListItem img ={coctail.strDrinkThumb + "/preview"} name={coctail.strDrink} idDrink = {coctail.idDrink}/>
        </div>
    );
    return(
        <div className = "row">{lisItems}</div>
    );
}


export default List;