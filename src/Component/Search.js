import React, { Component } from 'react';
import axios from 'axios';

import List from './List';

class FilteredList extends Component{

    state = {
        initialItems:[],
        items: []
    }

    render(){
        return (
          <div className="filter-list">
            <form>
            <fieldset className="form-group">
            <input type="text" 
                   placeholder="Search Country"
                   onChange={this.filterList}/>
            </fieldset>
            </form>
          <List items={this.state.items}/>
          </div>
        );
      }


     componentDidMount = () => {
         axios.get("https://restcountries.eu/rest/v2/all")
            .then((response) =>{
                const initialItems = response.data.map(country => {
                    return country.name;
                });

                console.log(initialItems)
                this.setState({initialItems: initialItems});
                this.setState({items: this.state.initialItems})
            });
            
      }

      filterList = (event) => {
          
        var updatedList = this.state.initialItems;
        updatedList = updatedList.filter(function(item){
          return item.toLowerCase().search(
            event.target.value.toLowerCase()) !== -1;
        });
        this.setState({items: updatedList});       
        
      }
}

  

  
export default FilteredList;