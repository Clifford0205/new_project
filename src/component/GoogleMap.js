import React from 'react';

import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

import { Link, Redirect, withRouter } from 'react-router-dom';
import './GoogleMap.scss';

export class MyGooglemap extends React.Component {
  render() {
    return (
      // <Map
      //   google={this.props.google}
      //   style={{
      //     width: '100%',
      //     height: 'auto',
      //     border: '1px solid #A5A5A5',
      //     'border-radius': '2rem',
      //   }}
      //   initialCenter={{
      //     lat: 25.0571884,
      //     lng: 121.5311721,
      //   }}
      //   zoom={15}
      //   onClick={this.onMapClicked}
      // >
      //   <Marker onClick={this.onMarkerClick} name={'Current location'} />

      //   <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
      // </Map>
      <>
        <div className="googleMap">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d464299.7747828436!2d121.67869146914063!3d24.61189519215752!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34683da890097941%3A0xb6124c62973184ae!2z5p2x55y85bGx5ZyL5a625qOu5p6X6YGK5qiC5Y2A!5e0!3m2!1szh-TW!2stw!4v1546501736976"></iframe>
        </div>
      </>
    );
  }
}

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyBsLRN1TmnZxtM6YRN1IrgBOuVBC2mKIy8',
// })(MyGooglemap);

export default withRouter(MyGooglemap);
