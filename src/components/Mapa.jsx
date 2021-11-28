import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import SearchBar from './SearchBar';
import Btn from './Btn';
export class MapContainer extends Component {
  render() {
    return (
      <>
        <SearchBar />
        <Map
          google={this.props.google}
          disableDefaultUI={true}
          zoom={14}
          fullscreenControl={false}
        >
          <Marker onClick={this.onMarkerClick} name={'Current location'} />
        </Map>
        <Btn />
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCq3TB-7rvTHsP8VBNn-dRwdPgHFNhfCZ0',
})(MapContainer);
