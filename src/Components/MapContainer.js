import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const { REACT_APP_GOOGLE_MAPS_API_KEY } = process.env;

export class MapContainer extends Component {
  constructor(props){
  	super(props)
  	this.state = {
  	  showInfo: false,
  	  activeMarker: {},
  	  selectedStore: {}
  	}
  	this.onMarkerClick = this.onMarkerClick.bind(this);
  	this.onMapClick = this.onMapClick.bind(this);
  }

  onMarkerClick = (props, marker, event) => {
  	this.setState({
  		showInfo: true,
  		activeMarker: marker,
  		selectedStore: props
  	});
  }

  onMapClick = (props, marker, e) => {
  	this.setState({
  		showInfo: false,
  		activeMarker: null
  	});
  }

  render() {
  	const style = {
      'width': '50vw',
      'height': '75vh',
      'marginLeft': 'auto',
      'marginRight': 'auto'
    }
    return (
      <Map 
		google={this.props.google} 
		zoom={12}
		style ={style}
		centerAroundCurrentLocation={true}
		onClick={this.onMapClick}
	  >
	    {this.props.stores.map(store => {
		  return (
	        <Marker 
		  	  key={store.id}
	      	  onClick={this.onMarkerClick}
		  	  name={store.name} 
		      position={{lat: store.latitude, lng: store.longitude}}
		      address={store.address_line_1}
		      city={store.city}
		      telephone={store.telephone}
		  />)
	    })}
 
        <InfoWindow 
          onClose={this.onInfoWindowClose}
          marker={this.state.activeMarker}
          visible={this.state.showInfo}
         >
            <div>
              <p>{this.state.selectedStore.name}</p>
              <p>{this.state.selectedStore.address}</p>
              <p>{this.state.selectedStore.city}</p>
              <p>{this.state.selectedStore.telephone}</p>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: (REACT_APP_GOOGLE_MAPS_API_KEY)
})(MapContainer)