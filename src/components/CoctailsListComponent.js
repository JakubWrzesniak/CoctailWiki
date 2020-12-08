import React, {Component} from 'react';
import { connect } from 'react-redux';
import {coctailLoading, fetchCoctailsByCategory} from '../redux/ActionCreators';
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Loading} from './LoadingComponent';
import { Link } from 'react-router-dom';    


const mapStateToProps = state => {
    return {
        coctails: state.coctails
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCoctailsByCategory: (category) => {dispatch(fetchCoctailsByCategory(category))}
})

const createCategory = (params) => {
    var category = params.category;
    if(params.category2){
        category = category + "/" + params.category2
    }
    if(params.category3)
        category = category + "/" + params.category3
    return category;
}

class ListItem extends Component{
    render(){
        return(
           <Link to ={`/coctail/${this.props.idDrink}`} > 
                <li>
                    <div className="row">
                        <div className="col-md-6">
                            <img src ={this.props.img} alt={this.props.name}/>  
                        </div>
                        <div className="col-md-6">
                                {this.props.name}  
                        </div>           
                    </div>
                </li>
            </Link>
        );
    }
}


function List(props){
    const coctails = props.coctails;
    const lisItems = coctails.map((coctails)=>
            <div className="coctail-list-item">
                <ListItem key = {coctails.idDrink} img ={coctails.strDrinkThumb + "/preview"} name={coctails.strDrink} idDrink = {coctails.idDrink}/>
            </div>
        );
        return (
                <ul>{lisItems}</ul>
        );
}

class CoctailList extends Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
       this.props.fetchCoctailsByCategory(createCategory(this.props.category));
    }

    render(){
        if(this.props.coctails.isLoading)
            return(<div><Loading/></div>);
        else{
            return(
            <div className ="container">
                <div className="">
                    <div className="coctail-list">
                         <List coctails= {this.props.coctails.coctails.drinks} />
                    </div>
                </div>
            </div>);
        }
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(CoctailList);