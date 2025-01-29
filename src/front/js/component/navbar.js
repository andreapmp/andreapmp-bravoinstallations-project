import React, { useEffect } from "react";
import bravoLogo from "../../img/bravo-logo.png";
import "../../styles/navbar.css";

export const Navbar = () => {
	useEffect(() => {
		const dropdowns = document.querySelectorAll(".nav-item.dropdown");

		dropdowns.forEach(dropdown => {
			dropdown.addEventListener("mouseenter", () => {
				dropdown.querySelector(".dropdown-menu").classList.add("show");
			});

			dropdown.addEventListener("mouseleave", () => {
				dropdown.querySelector(".dropdown-menu").classList.remove("show");
			});
		});

		return () => {
			dropdowns.forEach(dropdown => {
				dropdown.removeEventListener("mouseenter", () => {
					dropdown.querySelector(".dropdown-menu").classList.add("show");
				});

				dropdown.removeEventListener("mouseleave", () => {
					dropdown.querySelector(".dropdown-menu").classList.remove("show");
				});
			});
		};
	}, []);
	
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
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="#"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Custom Spaces
							</a>
							<ul className="dropdown-menu custom-spaces">
								<li>
									<a className="dropdown-item" href="/closet-design">
										Closet
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="garage-design">
										Garage
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="laundry-room-design">
										Laundry Room
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="office-design">
										Office
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="pantry-design">
										Pantry
									</a>
								</li>
							</ul>
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
