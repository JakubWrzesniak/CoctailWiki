import React,{Component} from 'react';
import {Card,CardBody,CardTitle, CardImg, CardHeader} from 'reactstrap';

function RenderCoctail(props){
    return(
        <Card>
            <CardBody>
                <CardTitle>
                    {props.coctail.strDrink}
                </CardTitle>
            </CardBody>
        </Card>
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