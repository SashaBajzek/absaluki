import React from 'react';
import ReactDOM from 'react-dom';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import { PawPrint } from './PawPrint';
import { Logo } from './Logo';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
	Switch
} from 'react-router-dom';
import './styles/App.css';

ReactDOM.render(
	<Router>
		<div>
			<header>
				<div className="heading">
					<div className="heading__container">
						<Logo />
						<h1 className="heading--main">Absaluki</h1>
					</div>
					<h2 className="heading--secondary">Dog Walking & Boarding</h2>
				</div>
				<div className="nav__container--pale">
					<nav>
						<ul className="nav__menu">
							<li><NavLink to="/about"  className="nav__item" activeClassName="nav__item--selected">About Me<PawPrint /></NavLink></li>
							<li><NavLink to="/" exact className="nav__item" activeClassName="nav__item--selected">Services<PawPrint /></NavLink></li>
							<li><NavLink to="/contact"  className="nav__item" activeClassName="nav__item--selected">Contact<PawPrint /></NavLink></li>
						</ul>
					</nav>
				</div>
			</header>
			<div className="content">
				<Switch>
					<Route path="/" exact component={Services} />
					<Route path="/about" component={About} />
					<Route path="/contact" component={Contact} />
					<Route path="/*" component={Services} />
				</Switch>
			</div>
		</div>
	</Router>, document.getElementById('root'));

