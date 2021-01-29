import React,{Component} from 'react';
import Title from './TitleComponent';
import CoctailDetails from './CoctailComponent';
import AlphabetList from './AlphabetBarComponent';

class Home extends Component{

    constructor(props){
        super(props);
        this.state ={
            random : this.props.random
        } 
    }
       
    render(){
        
        if(this.props.random.length !== 0)
        return(
                <div className = "container" >
                    <div className = "row">
                        <div className = " col-12">
                            <Title title = "Coctail Wiki"/>
                        </div>
                    </div>
                    <div id = "random-drink">
                        <div className = "row justify-content-md-center">
                            <div className="col-12 home-subTitle">
                                <h2>A PROPOSAL ESCPECIALLY FOR YOU</h2>
                            </div>
                            <div className = "col-12 col-md-10">
                                <CoctailDetails coctail = {this.state.random} isLoading = {this.state.random.isLoading} errMess = {this.state.random.errMess} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <AlphabetList/>
                    </div>
                </div>
            );
            else return(<div></div>);

    }
}

export default Home;