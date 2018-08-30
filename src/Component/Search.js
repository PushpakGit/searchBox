import React, { Component } from 'react';
import axios from 'axios';

import List from './List';
import { connect } from 'react-redux';

class FilteredList extends Component{

    render(){
        return (
          <div className="filter-list">
            <form>
            <fieldset className="form-group">
            <input type="text" 
                   placeholder="Search Country"
                //    onChange={this.filterList}
                onChange={(event) => this.props.onInputChange(event.target.value)} 
                />
            </fieldset>
            </form>
          <List items={this.props.items}/>
          </div>
        );
      }


     componentDidMount = () => {
         axios.get("https://restcountries.eu/rest/v2/all")
            .then((response) =>{
                const initialItems = response.data.map(country => {
                    return country.name;
                });

                // console.log(initialItems)
                // this.setState({initialItems: initialItems});
                // this.setState({items: this.state.initialItems})
                this.props.fetchCountry(initialItems);
            });
      }

    //   filterList = (event) => {
          
    //     var updatedList = this.state.initialItems;
    //     updatedList = updatedList.filter(function(item){
    //       return item.toLowerCase().search(
    //         event.target.value.toLowerCase()) !== -1;
    //     });
    //     this.setState({items: updatedList});       
        
    //   }
}

const mapStateToProps = (state) => {
    return{
        items : state.items,
        initialItems : state.initialItems
    }
}  

const mapDispatchToProps = (dispatch) => {
    return{
        onInputChange : (inputVal) => dispatch({ type:'SEARCH', searchKey:inputVal }),
        fetchCountry : (Country) => dispatch({ type:'FETCH' , countries: Country})
    }
}
  
export default connect(mapStateToProps,mapDispatchToProps)(FilteredList);