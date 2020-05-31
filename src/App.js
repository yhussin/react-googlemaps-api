import React, { Component } from 'react';
// import Map from './Map'
import Quakes from './components/Quakes'
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
          ...put Map Component here...
        </div>
        <div className="quakeContainer">
          <h1>Earthquakes from the past month: </h1>
          < Quakes result={this.state.earthquakes} />
        </div>
      </div>
    );
  }
}

export default App;
