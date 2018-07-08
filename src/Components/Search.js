import React, { Component } from "react";
import { fetchLcboEndpoint } from '../api/lcbo'

import { ResultsContainer } from './ResultsContainer'


class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      q : '',
      productID : 0,
      product: '',
      stores: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.findStores = this.findStores.bind(this)
  }
  
  handleChange(event) {
    console.log('state', this.state)
    this.setState({q: event.target.value});
  }

  findStores() {
      fetchLcboEndpoint("stores", "product_id", {
        q: this.state.productID
      }).then(data => {
        console.log("STORE",data)
        this.setState({
          stores: data.result
        })
      });
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
          show: true,
          stores: []
        })
      }).then(() => {
        this.findStores()
      }).catch((err) => {
        console.log(err)
      })
    }

  render() {
    return (
      <div>
        <form role="search" onSubmit={this.handleSubmit}>
          <div className="search-box">
            <input type="text" value={this.state.q} onChange={this.handleChange}
                 placeholder="Find your poison..."/>
            <button type='submit' >Search</button>
          </div>
        </form> 
        <ResultsContainer stores={this.state.stores} show={this.state.show} product={this.state.product} productID={this.state.productID}/>
      </div>
    )
  }
}

export default Search;
