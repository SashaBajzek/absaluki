import React, { Component } from 'react';
import './styles/Services.css';

class Services extends Component {
  render() {
    return (
      <section className="Services">
				<ul className="services__list">
					<li className="services__item">
						<span>Quick Let Outs & Feedings</span>
						<span className="services__divider">&middot; &middot; &middot; &middot; &middot; &middot; &middot; </span>
						<span>$5.00</span>
					</li>
					<li className="services__item">
						<span>30 min Walk/Play Time</span>
						<span className="services__divider">&middot; &middot; &middot; &middot; &middot; &middot; &middot; &middot; &middot;</span>
						<span>$10.00</span>
					</li>
					<li className="services__item">
						<span>Boarding Per Day</span>
						<span className="services__divider">&middot; &middot; &middot; &middot; &middot; &middot; &middot; &middot; &middot; &middot; &middot; &middot; &middot; &middot;</span>
						<span>$30.00</span>
					</li>
				</ul>
				<div className="services__photo"></div>
			</section>
    );
  }
}

export default Services;
