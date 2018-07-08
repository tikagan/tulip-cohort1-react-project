import React, { Component } from "react";

import { fetchLcboEndpoint } from "../api/lcbo.js";
import Store from './Store'

class ResultsList extends Component {
    constructor(props) {
      super(props);
    }
    
    render() {
      return ( 
        <div className="results">
          <img src={this.props.product.image_thumb_url} alt={this.props.product.name}/>
          <p>{this.props.product.name} is available at these stores:</p>
          {this.props.stores.map((store) => {
            console.log(store)
            return <Store key={store.store_no} address={store.address_line_1} telephone={store.telephone}/>
          })}
        </div>
      )
    }
  }
  
  export default ResultsList;