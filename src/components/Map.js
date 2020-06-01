import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';


const style = {
    width: '40%',
    height: '80%'
  }

class MapContainer extends Component {

    displayMarkers = () => {
        return this.props.detail.map((location, index) => {
            return (
                <Marker
                    key={index}
                    id={index}
                    position={{
                        lat: location.geometry.coordinates[1],
                        lng: location.geometry.coordinates[0]
                    }}
                />
            )
        })
    }


    render() {
        return (

            <Map google={this.props.google}
                zoom={14}
                style={style}
                initialCenter={{
                    lat: 37.78,
                    lng: -122.44
                }}
            >
            {this.displayMarkers()}
            </Map>





            // <Map className='the-map'
            // google={this.props.google}
            // zoom={4}
            // style={{ width: '100%' }}
            // containerStyle={{ width: '40%' }}
            // center={{ lat: 37.78, lng: -122.44 }}
            // >
            // {this.displayMarkers()}
            // </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg')
  })(MapContainer)