import React,{Component} from 'react';
import {Table} from 'reactstrap';

function CreateRecords({coctails}) {

    return(coctails.map((coctail)=>{
        
        return(
                <tr>
                    <td>{coctail.strDrink}</td>
                    <td>{coctail.strCategory}</td>
                    <td>{coctail.strGlass}</td>
                </tr>
            );
    })
    )
}

const List = (props) => {
    if(props.coctails.length != 0){
    return(
        <Table cssModule = "background-color:#00FF00" className="center">
            <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Glass</th>
            </tr>
            <CreateRecords coctails = {props.coctails.drinks}/>
        </Table>
    )
    }else{
        return(<div></div>)
    }
}

export default List;

