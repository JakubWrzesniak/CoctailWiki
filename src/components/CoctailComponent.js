import React,{Component} from 'react';
import {baseUrl} from '../shared/baseUrl';
import {Card,CardBody,CardTitle, CardImg, CardHeader} from 'reactstrap';

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
    return(
      <React.Fragment>
            <div className ="col-12 drinkName">
                <strong>{coctail.strDrink}</strong>
            </div>
            <div className = "col-md-6 drinkImg">
                <img width ="100%" src={coctail.strDrinkThumb } alt={coctail.strDrink}/> 
            </div>
            <div className = "col-md-6">
                <strong>Ingrediance</strong>
                <IngredientsList array = {coctail}/>
            </div>
      
      </React.Fragment>
         
    );

}

class CoctailDetails extends Component{
    render(){   
        console.log(this.props.coctail);
        return(
            <div className = "container">
                <div className ="row">
                    <RenderCoctail coctail={this.props.coctail}/>
                </div>
            </div>

        );
    }
}

export default CoctailDetails;