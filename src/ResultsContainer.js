import React from 'react'

import Results from './Results'

export const ResultsContainer = (props) => {
	const show = props.show
    if (show) {
      return <Results product={props.product} productID={props.productID} />;
    }
    return <h5> "Search for something!" </h5>;
  }