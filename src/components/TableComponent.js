import React,{Component} from 'react';
import {Table} from 'reactstrap';
import { Link } from 'react-router-dom';

function CreateRecords({list,values}) {
    return(list.map((listElem)=>{
        return(
                <tr>
                    <CreateData elem={listElem} values={values}/>
                </tr>
            );
        })
    )
}

function CreateData({elem,values}) {
    return(values.map((value)=>{
        if(value == "strDrink") {
            return(
                <td><Link to ={`/coctail/${elem["idDrink"]}`} >{elem[value]}</Link></td>
                );
            }
        else if(value == "strDrinkThumb"){
        return(
            <td className="list-img-data"><img className="list-img" src={elem[value]+"/preview"} /></td>
            );
        }
        else{
        return(
            <td>{elem[value]}</td>
            );
        }
        })
    )
}

function CreateHeaders({values}){
    return(values.map((value)=>{
        return(
            <th>{value}</th>
            );
        })
    )
}

const MyTable = (props) => {
    if(props.list != null){
        return(
            <Table cssModule = "background-color:#00FF00" className="center">
                <tr>
                    <CreateHeaders values = {props.headers} />
                </tr>
                <CreateRecords list = {props.list} values = {props.values}/>
            </Table>
        )
    }else{
        return(<div></div>)
    }
}

export default MyTable;

