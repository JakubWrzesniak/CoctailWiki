import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import {Card,CardBody,CardTitle, CardText} from 'reactstrap';
import Title from './TitleComponent';
import {Loading} from './LoadingComponent';


function IngredientsList({array}){
    var ingredient = (i) => {
        const ingredient = array["strIngredient"+i.toString()];
        const measure = array["strMeasure"+i.toString()];
        if(ingredient)
            return(<Link to = {`/CoctailWiki/ingredients/${ingredient}`}>{measure ? measure : ""} {ingredient}</Link>);
        } 
    var list = () => {
        var i = 1;
        var list = [];
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

function Tags(props){
    var tagsList;
    if(props.tags!=null){
    tagsList = props.tags.split(",");
    tagsList = tagsList.map((tag) =>{ return(
        <span className="tagElem">{tag} </span>
        )})
    }
    return(<div className ="tagList">{tagsList}</div>);
}


function RenderCoctail({coctail}){
    return(
      <React.Fragment>
            <div className ="col-12">
                <div className="drink-name">
                    <Title title = {coctail.strDrink}/>
                </div>
            </div>
            <div className = "col-12 col-lg-6 drink-leftInfo">
                <div>
                    <img width ="100%" className="drink-img" src={coctail.strDrinkThumb } alt={coctail.strDrink}/> 
                </div>
                <Tags tags={coctail.strTags}/>
            </div>
            <div className = "col-12 col-lg-6 drink-rightInfo">
            <Card>
                <div className = "container">
                    <div className = "row">
                    
                <div className = "col-12">
                <CardBody>
                        <CardTitle>Ingrediance</CardTitle>
                        <CardText><IngredientsList array = {coctail}/></CardText>
                    </CardBody>
                </div>
                <div className = "col-12">
                <CardBody>
                        <CardTitle>Instruction</CardTitle>
                        <CardText>{coctail.strInstructions}</CardText>
                    </CardBody>
                </div>
                    
                    
           
                    </div>
                </div>
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