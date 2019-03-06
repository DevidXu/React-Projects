import React, { Component } from 'react';
import List from "./component/List";
import Compare from "./component/Compare";
import './App.css';
import {productJSON} from "./json/products";

class App extends Component {
  constructor (props) {
    super(props);
    var products = productJSON.products;
    for (let i=0; i<products.length; i++) {
      products[i]["selected"] = false;
    }
    this.state = {
      products: products,
    }
  }

  handleClick = id => {
    var products = this.state.products.slice();
    for (let i=0; i<products.length; i++) {
      if (products[i]["id"] === id) {
        products[i]["selected"] = !products[i]["selected"];
        break;
      }
    }
    this.setState({
      products: products,
    });
  }

  render() {
    return (
        <div className="component-App">
          <p className="titleInfo">Compare Product</p>
          <List
              products={this.state.products}
              handleClick={this.handleClick}
          />
          <Compare products={this.state.products} />
        </div>
    );
  }
}

export default App;
