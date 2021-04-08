import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class City extends React.Component {
  render() {
    return (
      <>
        <Button variant="primary" onClick={this.props.handleShowSearch}>Explore!</Button>
        <Card style={{ width: '46rem' }}>
          <Card.Body>
            <h3>{this.props.cityData.display_name}</h3>
            <h4>Latitude: {this.props.cityData.lat}</h4>
            <h4>Longitude: {this.props.cityData.lon}</h4>
          </Card.Body>
          <Card.Img variant="bottom" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.props.cityData.lat},${this.props.cityData.lon}&zoom=10`} alt="city map" />
        </Card>
      </>
    )
  }
}
export default City;
