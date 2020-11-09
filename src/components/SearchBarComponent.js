import React, { Component } from 'react' ;
import Autosuggest from 'react-autosuggest';

const getSuggestions = (list,value,name,len) =>  {
    const inputValue = value.trim().toLowerCase();
    if(list != null){
        const filteredList = list.filter(elem => elem[name].trim().toLowerCase().includes(inputValue));
        return filteredList.length > len ? (filteredList.slice(0,len)):filteredList;
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

class SeacrhBar extends Component{
    constructor(props){
    super(props);
        
    this.state ={
        value: '',
        suggestions: []
    };}
    

    onChange = (event, { newValue }) => {
        this.setState({
        value: newValue
        });
    };

    onSuggestionsFetchRequested = ({ value }) => {
        const list = this.props.list;
        const name = this.props.name;
        const len = this.props.len;
        this.props.fetchCoctailsByName(value);
        this.setState({
        suggestions: getSuggestions(list,value,name,len)
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

        return(
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
        )
    };
}
export default SeacrhBar;