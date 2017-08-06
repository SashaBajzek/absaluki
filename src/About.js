import React, { Component } from 'react';
import './styles/About.css';

class About extends Component {
  render() {
    return (
      <section class="About">
				<img src="AshleyAndPooh_200px.jpg" alt="Photo of me and my dog" className="About__photo" />
				<h2 className="About__heading">Hi! I'm Ashley and this is my dog Pooh.</h2>
				<div className="About__text">
					<p>I started Absaluki because I understand how hard it can be to juggle life when school and work get busy, but you still want to make sure your pet's needs are being met. That's where I come in. I will make sure that your pet is well taken care of when you can't be there by providing walking, feedings, playtime and boarding.</p>
					<p>Dogs are my passion, and I am here to make sure your pets have the best care possible.</p>
				</div>
			</section>
    );
  }
}

export default About;