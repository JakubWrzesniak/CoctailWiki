import React,{Component} from 'react'; 
import SearchBar from './SearchBarComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faEnvelope, faGlassWhiskey, faGlassMartiniAlt, faBeer } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand,Nav ,NavLink,NavbarToggler,Collapse, NavItem, 
    UncontrolledDropdown,DropdownItem, DropdownMenu,DropdownToggle } from 'reactstrap';


function GetDropdownItems(props){
    const list = props.list;
    const name = props.name;
    const value = props.value;

    if(list != null && list.length > 0){
        
        return(list.map((elem)=>{
            return(<Link to = {`/${value}/${(elem[name])}`}><DropdownItem>{elem[name]}</DropdownItem></Link>);
        }));
    }
    else return <DropdownItem></DropdownItem>
}

class Header extends Component {
    constructor(props){
        super(props);
    }
  
    render(){
        console.log(this.props.glasses);
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
                                    <NavLink className ="nav-link" to ="/"><FontAwesomeIcon icon ={faGlassMartiniAlt} color="white"/> Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <UncontrolledDropdown nav inNavbar>
                                        <DropdownToggle nav caret>
                                            <FontAwesomeIcon icon ={faBars}  color="white"/> Category
                                        </DropdownToggle>
                                        <DropdownMenu left>
                                            <GetDropdownItems list={this.props.categories.drinks} name={'strCategory'} value={'category'}/>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </NavItem>
                                <NavItem>
                                    <UncontrolledDropdown nav inNavbar>
                                        <DropdownToggle nav caret>
                                            <FontAwesomeIcon icon ={faBeer} color="white"/> Alcoholic
                                        </DropdownToggle>
                                        <DropdownMenu left>
                            
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </NavItem>
                                <NavItem>
                                    <UncontrolledDropdown nav inNavbar>
                                        <DropdownToggle nav caret>
                                            <FontAwesomeIcon icon ={faGlassWhiskey} color="white"/> Glasses
                                        </DropdownToggle>
                                        <DropdownMenu left>
                                            <GetDropdownItems list={this.props.glasses.drinks} name={'strGlass'} value={'glass'}/>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </NavItem>
                                <NavItem>
                                    <NavLink className ="nav-link" href ="https://facebook.com">
                                        <FontAwesomeIcon icon ={faEnvelope}  color="white"/> Contact
                                    </NavLink>
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