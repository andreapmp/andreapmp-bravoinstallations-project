import React from "react";
import "../../styles/footer.css";

export const Footer = () => (
	<footer className="footer py-3 text-center text-light">
		<div className="container">
			<div className="row align-items-center">
				<div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
					<p className="mb-0">
						Copyright © 2025 Bravo Installations LLC. All Rights Reserved.
					</p>
				</div>
				<div className="col-md-6 text-center text-md-end">
					<p className="connect-title fw-bold mb-2">Connect with us</p>
					<a
						href="https://www.facebook.com/bravoinstallations/"
						className="btn btn-sm me-2"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fa-brands fa-square-facebook fa-2xl" style={{ color: "#ae8232" }}></i>
					</a>
					<a
						href="https://www.instagram.com/bravoinstallations/"
						className="btn btn-sm me-2"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fa-brands fa-square-instagram fa-2xl" style={{ color: "#ae8232" }}></i>
					</a>
					<a
						href="https://mail.google.com/mail/?view=cm&fs=1&to=info@bravoinstallations.com&su=Customer%20Inquiry&body=Hello%20Bravo%20Installations,%20I%20am%20interested%20in%20your%20services.%20Please%20contact%20me%20at%20your%20earliest%20convenience.%20Thank%20you!"
						className="btn btn-sm"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fa-solid fa-envelope fa-2xl" style={{ color: "#ae8232" }}></i>
					</a>
				</div>
			</div>
		</div>
	</footer>
);
