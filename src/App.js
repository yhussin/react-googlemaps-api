import React, { Component } from 'react';
//import Map from './components/Map';
import Quakes from './components/Quakes';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const style = {
  width: '40%',
  height: '80%'
}

class App extends Component {
    state = {
      earthquakes: []
    }

    componentDidMount() {
      fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson')
      .then(res => res.json())
      .then((result) => {
        console.log(result)
        this.setState({
          earthquakes: result.features
        })
      })
      .catch(err => console.log(`Error!: ${err}`))
    }

    render() {
    return (
      <div className="app">
        <div className="mapContainer">
       
          
        <Map google={this.props.google} 
        zoom={14}
        style={style}
        initialCenter={{
          lat: 37.78,
          lng: -122.44
        }}
        >
            <Marker
            name={'Dolores park'}
            position={{lat: 37.759703, lng: -122.428093}} />
                <Marker onClick={this.onMarkerClick}
                 name={'Current location'}
                />

            <InfoWindow onClose={this.onInfoWindowClose}>
                <div>
                  <h1>{this.state.selectedPlace}</h1>
                </div>
            </InfoWindow>
            </Map>
        </div>

        <div className="quakeContainer">
          <h1>Earthquakes from the past month: </h1>
          < Quakes result={this.state.earthquakes} />
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg')
})(App)