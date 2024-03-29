import React,{Component} from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faGlassWhiskey, faGlassMartiniAlt, faBeer } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand,Nav ,NavLink,NavbarToggler,Collapse, NavItem, Dropdown,
    DropdownItem, DropdownMenu,DropdownToggle } from 'reactstrap';


function GetDropdownItems(props){
    const list = props.list;
    const name = props.name;
    const value = props.value;

    if(list != null && list.length > 0){
        
        return(list.map((elem)=>{
            return(<Link to = {`/CoctailWiki/${value}/${elem[name]}`}><DropdownItem>{elem[name]}</DropdownItem></Link>);
        }));
    }
    else return <DropdownItem></DropdownItem>
}

class DropdownMenuItem extends Component{
    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.state ={
            dropdownOpen: false
        }
    }
    toggle() {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
    }
    
    onMouseEnter() {
        this.setState({dropdownOpen: true});
    }
    
    onMouseLeave() {
        this.setState({dropdownOpen: false});
    }

    render(){
        return(
            <Dropdown onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.dropdownOpen} toggle={this.toggle} >
                <DropdownToggle className="nav-link" nav caret>
                    <Link to = {`${this.props.linkTo}`}><FontAwesomeIcon icon ={this.props.icon}  color="white"/> {this.props.title}</Link>
                </DropdownToggle>
                <DropdownMenu   modifiers={{
              setMaxHeight: {
                enabled: true,
                order: 890,
                fn: (data) => {
                  return {
                    ...data,
                    styles: {
                      ...data.styles,
                      overflow: 'auto',
                      maxHeight: 200,
                    },
                  };
                },
              },
            }}>
                    <GetDropdownItems list={this.props.list} name={this.props.name} value={this.props.value}/>
                </DropdownMenu>
            </Dropdown>
        )
    }
}

class Header extends Component {
    constructor(props){
       super(props);
       this.state ={
           isOpen : false,
       }
    }
    render(){
        const toggleColaps = () => this.setState({isOpen: !this.state.isOpen});

        return (
            <React.Fragment>    
                <Navbar fixed="top"  dark expand ="md">
                    <div className="container">
                        <NavbarToggler onClick={toggleColaps} />
                        <NavbarBrand className="mr-auto" href="/CoctailWiki/">
                            <img src="assets/images/logo.png" height="60" alt="Coctail"/>
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className ="nav-link" href ="/CoctailWiki/"><FontAwesomeIcon icon ={faGlassMartiniAlt} color="white"/> Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <DropdownMenuItem icon = {faBars} list={this.props.categories.drinks} name={'strCategory'} value={'category'} title = {"Category"}/>
                                </NavItem>
                                <NavItem>
                                   <DropdownMenuItem icon = {faBeer} list={this.props.ingredients.drinks} name={'strIngredient1'} value={'ingredients'} title ={"Ingrediences"} linkTo = {`CoctailWiki/ingredients/list`}/>
                                </NavItem>
                                <NavItem>
                                    <DropdownMenuItem icon ={faGlassWhiskey} list={this.props.glasses.drinks} name={'strGlass'} value={'glass'} title = {"Glass"}/>
                                </NavItem>
                                {/* <NavItem>
                                    <NavLink className ="nav-link" href ="https://facebook.com">
                                        <FontAwesomeIcon icon ={faEnvelope}  color="white"/> Contact
                                    </NavLink>
                                </NavItem> */}
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
            )
    }
}

export default Header;