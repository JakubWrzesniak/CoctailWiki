import React,{Component} from 'react'; 
import SearchBar from './SearchBarComponent';
import { Navbar, NavbarBrand,Nav ,NavLink,NavbarToggler,Collapse, NavItem, Jumbotron, 
    Button, Modal, ModalHeader, ModalBody, Label, Form, FormGroup,Input,List } from 'reactstrap';



class Header extends Component {
    constructor(props){
        super(props);
    }
  
    render(){
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
                                    <SearchBar  fetchCoctailsByName={this.props.fetchCoctailsByName} 
                                                list = {this.props.coctails.drinks}
                                                len = {5}
                                                name = {'strDrink'}/>
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