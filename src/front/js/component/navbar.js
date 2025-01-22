import React from "react";
import bravoLogo from "../../img/bravo-logo.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar bg-body-tertiary">
			<div className="container">
				<a className="navbar-brand" href="#">
					<img
						src={bravoLogo}
						alt="BravoLogo"
						width={70}
						height={90}
					/>
				</a>
				<button class="btn btn-warning me-2" type="button">Get a Free Quote</button>
			</div>
		</nav>
	);
};
