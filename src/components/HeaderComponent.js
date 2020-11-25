import React,{Component} from 'react'; 
import SearchBar from './SearchBarComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand,Nav ,NavLink,NavbarToggler,Collapse, NavItem, 
    UncontrolledDropdown,DropdownItem, DropdownMenu,DropdownToggle } from 'reactstrap';


function GetDropdownItems(props){
    const list = props.list;
    const name = props.name;

    if(list != null && list.length > 0){
        
        return(list.map((elem)=>{
            return(<Link to = {`/category/${(elem[name])}`}><DropdownItem>{elem[name]}</DropdownItem></Link>);
        }));
    }
    else return <DropdownItem></DropdownItem>
}

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
                            <img src="assets/images/logo.png" height="60"
                                alt="Coctail"/>
                        </NavbarBrand>
                        <Collapse isOpen = {true} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className ="nav-link" to ="/">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Category
                                    </DropdownToggle>
                                    <DropdownMenu left>
                                        <GetDropdownItems list={this.props.categories.drinks} name={'strCategory'}/>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                </NavItem>
                                <NavItem>
                                    <NavLink className ="nav-link" to ="/">Glasses</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className ="nav-link" href ="https://facebook.com">Contact</NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto">
                                <NavItem className="nav-link">
                                 <FontAwesomeIcon icon ={faSearch}  color="white"/>
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