import React from 'react'

import ResultsList from './ResultsList'
import MapContainer from './MapContainer'

export const ResultsContainer = (props) => {
	const show = props.show
    if (show) {
      return  (
      	<div className="results-container">
      	  <MapContainer stores={props.stores} />
      	  <ResultsList product={props.product} productID={props.productID} stores={props.stores} />
      	 </div>
      	)
    }
    return <h5> "Search for something!" </h5>;
  }