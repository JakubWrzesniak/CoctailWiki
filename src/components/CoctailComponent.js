import React,{Component} from 'react';
import { connect } from 'react-redux';
import {baseUrl} from '../shared/baseUrl';
import {Card,CardBody,CardTitle, CardImg, CardHeader, CardText} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlassMartiniAlt } from '@fortawesome/free-solid-svg-icons';
import {fetchCoctailById} from '../redux/ActionCreators';
import {Loading} from './LoadingComponent';


function IngredientsList({array}){
    var ingredient = (i) => {
        const ingredient = array["strIngredient"+i.toString()];
        const measure = array["strMeasure"+i.toString()];
        if(ingredient)
            return(measure?measure+" "+ingredient : ingredient);
        } 
    var list = ()=>{
        var i =1;
        var list =[];
        while(i<=15){
            var elem = ingredient(i);
            if(elem) list.push(elem);
            i++;
        }
        return(list);
    }
    return(
            <ul>
                 {list().map((elem)=>{return(<li>{elem}</li>)})}
            </ul>
    )
}


function RenderCoctail({coctail}){
    console.log();
    return(
      <React.Fragment>
            <div className ="col-12">
                <div className="drink-name">
                    <h1><strong>{coctail.strDrink}</strong></h1>
                    <hr/>
                </div>
            </div>
            <div className = "col-md-6">
                <div>
                    <img width ="100%" className="drink-img" src={coctail.strDrinkThumb } alt={coctail.strDrink}/> 
                </div>
            </div>
            <div className = "col-md-6 drink-inform">
                <Card>
                    <CardBody>
                        <CardTitle>Ingrediance</CardTitle>
                        <CardText><IngredientsList array = {coctail}/></CardText>
                    </CardBody>
                    <CardBody>
                        <CardTitle>Instruction</CardTitle>
                        <CardText>{coctail.strInstructions}</CardText>
                    </CardBody>
                </Card> 
            </div>
      </React.Fragment>   
    );
}

class CoctailDetails extends Component{
   

    constructor(props){
        super(props);
        this.state = {
            coctail: this.props.coctail,
            isLoading: this.props.isLoading,
            errMess: this.props.errMess
        }
    }

    render(){  
        if(this.state.isLoading){
            return <Loading/>
        }
        else{
            return(
                <div className = "container">
                    <div className ="row">
                         <RenderCoctail coctail={this.state.coctail.drinks[0]}/>
                    </div>
                </div>
            
            );
        }
    }
}

export default CoctailDetails;