import React from "react";
import bravoLogo from "../../img/bravo-logo.png";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
	return (
		<>
			{/* Primary Navbar */}
			<nav className="navbar primary-nav">
				<div className="container">
					<a className="navbar-brand" href="/">
						<img
							src={bravoLogo}
							alt="BravoLogo"
							width={70}
							height={90}
						/>
					</a>
					<a className="quote-button" href="/get_quote">
						<button className="btn quote me-2" type="button">Get a Free Quote</button>
					</a>
				</div>
			</nav>

			{/* Secondary Navbar */}
			<nav className="navbar secondary-nav">
				<div className="container justify-content-center">
					<ul className="nav nav-underline">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="/">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/custom_spaces">
								Custom Spaces
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/about_us">
								About Us
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/contact_us">
								Contact Us
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};
