import React,{Component} from 'react';
import { connect } from 'react-redux';
import {baseUrl} from '../shared/baseUrl';
import {Card,CardBody,CardTitle, CardImg, CardHeader} from 'reactstrap';
import {fetchCoctailById} from '../redux/ActionCreators';
import {Loading} from './LoadingComponent';

const mapStateToProps = state => {
    return {
        coctail: state.coctail
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCoctailById: (Id) => {dispatch(fetchCoctailById(Id))}
})



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
   

    constructor(props){
        super(props); 
        props.fetchCoctailById(props.coctailId);
    }

    render(){
        if(this.props.coctail.isLoading){
            return <Loading/>
        }else{
            return(
                <div className = "container">
                    <div className ="row">
                        <RenderCoctail coctail={this.props.coctail.coctail.drinks[0]}/>
                    </div>
                </div>
            
            );
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CoctailDetails);