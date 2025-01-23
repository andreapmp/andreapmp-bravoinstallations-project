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
					<a className="navbar-brand" href="#">
						<img
							src={bravoLogo}
							alt="BravoLogo"
							width={70}
							height={90}
						/>
					</a>
					<button class="btn quote me-2" type="button">Get a Free Quote</button>
				</div>
			</nav>

			{/* Secondary Navbar */}
			<nav className="navbar secondary-nav">
				<div className="container justify-content-center">
					<ul className="nav nav-underline">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">
								CLOSETS
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								GARAGES
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								LAUNDRY ROOMS
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								PANTRIES
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};
