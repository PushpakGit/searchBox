import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import FilteredList from './Component/Search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilteredList />
      </div>
    );
  }
}

export default App;
