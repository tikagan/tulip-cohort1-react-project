import React, { Component } from "react";
import {fetchLcboEndpoint} from './api/lcbo'

import {ResultsContainer} from './ResultsContainer'


class Searchbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      q : '',
      productID : 0,
      product: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    console.log('state', this.state)
    this.setState({q: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    fetchLcboEndpoint("products", {
        q: this.state.q
      }).then(data => {
        console.log(data)
        this.setState({
          productID: data.result[0].id,
          product: data.result[0],
          show: true
        })
      });
    }

  render() {
    return (
      <div>
        <form role="search" onSubmit={this.handleSubmit}>
          <div className="search-control">
            <input type="text" value={this.state.q} onChange={this.handleChange}
                 placeholder="Find your poison..."/>
            <button type='submit' >Search</button>
            <ResultsContainer show={this.state.show} product={this.state.product} productID={this.state.productID}/>
          </div>
        </form> 
        
      </div>
    )
  }
}

export default Searchbar;
