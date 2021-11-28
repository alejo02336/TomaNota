import React, { Component } from 'react';
import {
  Map,
  InfoWindow,
  Marker,
  GoogleApiWrapper,
  Polyline,
  Circle,
} from 'google-maps-react';
import SearchBar from './SearchBar';
import Btn from './Btn';
import './styles/Search.css';
import { Link } from 'react-router-dom';

export class MapContainer extends Component {
  render() {
    const coords = { lat: 3.384273, lng: -76.511593 };
    const coords1 = { lat: 3.386984, lng: -76.514246 };
    const coords2 = { lat: 3.37988, lng: -76.51523 };

    const triangleCoords = [
      { lat: 25.774, lng: -80.19 },
      { lat: 18.466, lng: -66.118 },
      { lat: 32.321, lng: -64.757 },
      { lat: 25.774, lng: -80.19 },
    ];
    return (
      <>
        <SearchBar />

        <Map
          google={this.props.google}
          disableDefaultUI={true}
          zoom={15}
          fullscreenControl={false}
          initialCenter={{
            lat: 3.384273,
            lng: -76.511593,
          }}
        >
          <Marker onClick={this.onMarkerClick} name={'Current location'} />
          <Circle
            radius={200}
            center={coords}
            onMouseover={() => console.log('mouseover')}
            onClick={() => console.log('click')}
            onMouseout={() => console.log('mouseout')}
            strokeColor="transparent"
            strokeOpacity={0}
            strokeWeight={5}
            fillColor="#48F16D"
            fillOpacity={0.5}
          />

          <Circle
            radius={350}
            center={coords1}
            onMouseover={() => console.log('mouseover')}
            onClick={() => console.log('click')}
            onMouseout={() => console.log('mouseout')}
            strokeColor="transparent"
            strokeOpacity={0}
            strokeWeight={5}
            fillColor="#FF4949"
            fillOpacity={0.5}
          />

          <Circle
            radius={300}
            center={coords2}
            onMouseover={() => console.log('mouseover')}
            onClick={() => console.log('click')}
            onMouseout={() => console.log('mouseout')}
            strokeColor="transparent"
            strokeOpacity={0}
            strokeWeight={5}
            fillColor="#FFBD69"
            fillOpacity={0.5}
          />
        </Map>
        <Btn />
        <button className="infobtn">
          <Link to="/reportInformation">
            <h1 className="i-map">i</h1>
          </Link>
        </button>
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCq3TB-7rvTHsP8VBNn-dRwdPgHFNhfCZ0',
})(MapContainer);
