import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import SearchBar from "./SearchBar";
import Btn from "./Btn";
import "./styles/Search.css";
import { Link } from "react-router-dom";

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
          <Marker onClick={this.onMarkerClick} name={"Current location"} />
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
  apiKey: "AIzaSyCq3TB-7rvTHsP8VBNn-dRwdPgHFNhfCZ0",
})(MapContainer);
