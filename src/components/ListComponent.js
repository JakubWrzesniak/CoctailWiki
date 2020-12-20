import React,{Component} from 'react';
import {Loading} from './LoadingComponent';
import {Card, CardBody, CardTitle, CardImg} from 'reactstrap'
import { Link } from 'react-router-dom';    

function ListItem(props){
    return(
        <Link to ={`/coctail/${props.id}`} > 
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
    const lisItems = props.elems.map((elem)=>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <ListItem img ={elem[props.strThumb] + "/preview"} name={elem[props.name]} id = {elem[props.id]}/>
        </div>
    );
    return(
        <div className = "row">{lisItems}</div>
    );
}


export default List;