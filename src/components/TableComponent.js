import React,{Component} from 'react';
import {Table} from 'reactstrap';

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
        return(
            <td>{elem[value]}</td>
            );
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

