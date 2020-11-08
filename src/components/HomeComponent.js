import React,{Component} from 'react';
import {Control, Form}from 'react-redux-form';
import {Col,Row,Label} from 'reactstrap';
import MyTable from './TableComponent';

const CreateTable = ({coctails}) => {
    if(coctails.length == 0){
        return(
            <p></p>
        )
    }
    return(
        <MyTable list = {coctails.drinks} 
            values = {["strDrink", "strCategory", "strGlass", "strInstructions"]}
            headers = {["Name", "Category", "Glass","Recipt"]}/>
    )
}

class Home extends Component{

    handleSubmit = (values) =>{
        this.props.fetchCoctailsByName(values.search);
      
    } 
    render(){
        return(
                <div>
                    <Form model = "search" onSubmit={(values) => this.handleSubmit(values)}>
                        <Row class ="form-group">
                        <Label htmlFor="search" md={2}>Search</Label>
                            <Col>
                                <Control.text model=".search" id="search" name="search"
                                        placeholder="Coctail Name" 
                                        className="form-control"
                                        />
                            </Col>
                        </Row>
                    </Form>
                    <h3>Coctail deatils</h3>
                    <p>
                        <CreateTable coctails={this.props.coctails}/>
                    </p>
                   
                </div>
            );
    }
}

export default Home;