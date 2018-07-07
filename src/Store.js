import React, { Component } from "react";

class Store extends Component {

  render() {
    return (
      <div className='store'>
        <h4> { this.props.address } </h4>
        <h6> { this.props.telephone } </h6>
      </div>
    );
  }
}

export default Store;
