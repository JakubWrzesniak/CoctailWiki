import React,{Component} from 'react';
import {Loading} from './LoadingComponent';
import {Card, CardBody, CardTitle, CardImg} from 'reactstrap'
import { Link } from 'react-router-dom';    

function ListItem(props){
    return(
        <Link to ={props.link} > 
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
    const elems = props.elems.sort((a,b) => {return (a["name"]<b["name"]?-1:1);});
    const lisItems = elems.map((elem)=>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <ListItem img = {elem.img} name={elem.name} link = {elem.link}/>
        </div>
    );
    return(
        <div className = "row">{lisItems}</div>
    );
}


export default List;