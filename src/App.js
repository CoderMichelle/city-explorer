import React from 'react';
import axios from 'axios';

import City from './City.js';
import Search from './Search';
import Card from 'react-bootstrap/Card';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      haveWeSearchedYet: false,
      citySearchedFor: ''
    };
  }

  handleShowSearch = () => {
    this.setState({ haveWeSearchedYet: false });
  }

  handleSearch = async (citySearchedFor) => {
    console.log('searched', citySearchedFor);

    try {
      let locationResponseData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${citySearchedFor}&format=json`);
      console.log(locationResponseData);
      this.setState({
        haveWeSearchedYet: true,
        citySearchedFor: citySearchedFor,
        locationData: locationResponseData.data[0]
      });
    } catch (err) {
      console.log(err);
      this.setState({ error: err.message });
    }
  }
  render() {
    return (
      <>
        <h1>City Explorer</h1>
        <Card>
          {this.state.error ? <h3>{this.state.error}</h3> : ''}
        </Card>
        {this.state.haveWeSearchedYet ?
          <City handleShowSearch={this.handleShowSearch} cityData={this.state.locationData} /> :
          <Search handleSearch={this.handleSearch} />}
      </>
    );
  }
}

export default App;
