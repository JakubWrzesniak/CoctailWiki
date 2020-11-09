import React,{Component} from 'react'; 
import { Navbar, NavbarBrand,Nav ,NavLink,NavbarToggler,Collapse, NavItem, Jumbotron, 
    Button, Modal, ModalHeader, ModalBody, Label, Form, FormGroup,Input,List } from 'reactstrap';
import Autosuggest from 'react-autosuggest';

const getSuggestions = (list,value) =>  {
    const inputValue = value.trim().toLowerCase();
    if(list != null){
        const drinks = list.filter(elem => elem.strDrink.trim().toLowerCase().includes(inputValue));
        return drinks.length > 5 ? (drinks.slice(0,5)):drinks;
    }
    else
        return [];
};

const getSuggestionValue = suggestion => suggestion.strDrink;

const renderSuggestion = suggestion => (
    <div>
      {suggestion.strDrink}
    </div>
  );

class Header extends Component {
    constructor(props){
        super(props);
        
        this.state ={
            value: '',
            suggestions: []
        };
    }

    onChange = (event, { newValue }) => {
        this.setState({
          value: newValue
        });
    };

    onSuggestionsFetchRequested = ({ value }) => {
        if(this.state.suggestions.length==0)
            this.props.fetchCoctailsByName(value);
        this.setState({
          suggestions: getSuggestions(this.props.coctails.drinks,value)
        });
      };

    onSuggestionsClearRequested = () => {
        this.setState({
          suggestions: []
        });
    };
    render(){
        const { value, suggestions } = this.state;
        const inputProps = {
            placeholder: 'Type a Coctail Name',
            value,
            onChange: this.onChange
          };

        return (
            <React.Fragment>    
                <Navbar dark expand ="md">
                    <div className="container">
                        <NavbarToggler/>
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="assets/images/logo.jpg" height="60"
                                alt="Coctail"/>
                        </NavbarBrand>
                        <Collapse isOpen = {true} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className ="nav-link" to ="/">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className ="nav-link" to ="/">Category</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className ="nav-link" to ="/">Glasses</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className ="nav-link" href ="https://facebook.com">Contact</NavLink>
                                </NavItem>
                                <NavItem>
                                    <Autosuggest
                                        suggestions={suggestions}
                                        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                                        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                                        getSuggestionValue={getSuggestionValue}
                                        renderSuggestion={renderSuggestion}
                                        focusInputOnSuggestionClick ={true}
                                        highlightFirstSuggestion = {true}
                                        inputProps={inputProps}
                                    />
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
            )
    }
}

export default Header;