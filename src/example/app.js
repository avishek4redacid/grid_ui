// import '../lib/react-ui-tree.css';
import './app.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ProductGrid from './ProductGrid.js'

class App extends Component {
  state = {
    showNavBar: true
  };

  render() {
    return (
      <div className="app">
        <ProductGrid></ProductGrid>
      </div>
    );
  }

  handleChange = tree => {
    this.setState({
      tree: tree
    });
  };

}

ReactDOM.render(<App />, document.getElementById('app'));
