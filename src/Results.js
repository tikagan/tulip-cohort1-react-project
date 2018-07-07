import React, { Component } from "react";

import { fetchLcboEndpoint } from "./api/lcbo.js";
import Store from './Store'

class Results extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        productID: this.props.productID,
        stores: [],
        show: false
      }
    }

    componentDidMount() {
      fetchLcboEndpoint("stores", "product_id", {
        q: this.state.productID
      }).then(data => {
        console.log("STORE",data)
        this.setState({
          stores: data.result,
          showResults: true
        })
      });
    }
  
    render() {
      return (
        <div className="results">
          <div className="result">
          <img src={this.props.product.image_thumb_url} alt={this.props.product.name}/>
          <p>{this.props.product.name} is available at these stores:</p>
          {this.state.stores.map((store) => {
            return <Store key={store.store_no} address={store.address_line_1 + ", " + store.address_line_2} telephone={store.telephone}/>
          })}
          </div>
          
        </div>
      )
    }
  }
  
  export default Results;