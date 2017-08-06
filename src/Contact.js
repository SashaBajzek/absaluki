import React, { Component } from 'react';
import { Phone } from './Phone';
import SimpleMap from './GoogleMap';
import './styles/Contact.css';

class Contact extends Component {
  render() {
    return (
      <section className="Contact">
				<h1 className="Contact__heading">Call For Appointment:</h1>
				<h2 className="Contact__phonenumber">1-312-718-5214 <a href="tel:+1-312-718-5214"><Phone /></a></h2>
				
				
				<p>I am now walking in:</p>
				<p>Carbondale, Desoto, Murphysboro, and Carterville</p>
				<div className="mapContainer">
					<SimpleMap/>
				</div>

			</section>
    );
  }
}

export default Contact;