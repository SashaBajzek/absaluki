import React from 'react';
import GoogleMapReact from 'google-map-react';
import { PawPrint } from './PawPrint';

export default class SimpleMap extends React.Component {
  static defaultProps = {
    center: {lat: 37.758456, lng: -89.228210},
    zoom: 10
  };

  render() {
    return (
       <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
				bootstrapURLKeys={{key:"AIzaSyB0X_GRN3CBJOykWSBdAyTbzLA0blVrQOc"}}
      >
        <PawPrint 
          lat={37.701206} 
          lng={-89.228210} 
          text={'Carbondale'} 
        />
			
				<PawPrint 
          lat={37.815706} 
          lng={-89.226966} 
          text={'Desoto'} 
        />
			
				<PawPrint 
          lat={37.764496} 
          lng={-89.335091} 
          text={'Murphysboro'} 
        />
			
				<PawPrint 
          lat={37.762724} 
          lng={-89.083849} 
          text={'Carterville'} 
        />
			
      </GoogleMapReact>
    );
  }
}
