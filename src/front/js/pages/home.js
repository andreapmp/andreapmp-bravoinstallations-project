import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import closetImg from "../../img/closet-1.jpeg";
import officeImg from "../../img/office-1.jpeg";
import pantryImg from "../../img/pantry-2.jpeg";
import servicePhoto from "../../img/closet-4.jpeg";
import warrantyImg from "../../img/warranty.png";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			{/* Carousel Section */}
			<div className="carousel-container">
				<div id="carouselExampleRide" className="carousel carousel-dark slide" data-bs-ride="true">
					<div className="carousel-inner">
						<div className="carousel-item active" data-bs-interval="4000">
							<img src={closetImg} className="d-block w-100" alt="Closet" />
						</div>
						<div className="carousel-item" data-bs-interval="4000">
							<img src={officeImg} className="d-block w-100" alt="Office" />
						</div>
						<div className="carousel-item" data-bs-interval="4000">
							<img src={pantryImg} className="d-block w-100" alt="Pantry" />
						</div>
					</div>
					<button
						className="carousel-control-prev"
						type="button"
						data-bs-target="#carouselExampleRide"
						data-bs-slide="prev"
					>
						<span className="carousel-control-prev-icon" aria-hidden="true" />
						<span className="visually-hidden">Previous</span>
					</button>
					<button
						className="carousel-control-next"
						type="button"
						data-bs-target="#carouselExampleRide"
						data-bs-slide="next"
					>
						<span className="carousel-control-next-icon" aria-hidden="true" />
						<span className="visually-hidden">Next</span>
					</button>
				</div>
			</div>

			{/* "What We Do" and "Get Free Quote" Section */}
			<section className="what-we-do-quote container mt-5">
				<div className="row align-items-center">
					{/* Left Side: "What We Do" Text */}
					<div className="col-md-6">
						<h2><span className="text-secondary">WHAT</span> WE DO</h2>
						<p>
							At our company, we specialized in designing and installing custom closets, pantries, garages, laundry rooms, and office spaces in the Central Florida area. We take pride in truly listening to our clients' needs, creating personalized 3D designs tailored to each space. Using only high-quality materials, we ensure long-lasting results, backed by a 10-year warranty. Our expert team guarantees quick and efficient installations, completing most projects in just one day—so you can enjoy your beautifully transformed space without delay. Let us bring your vision to life with style and precision.
						</p>
						<img src={warrantyImg} className="warrantyImg"></img>
					</div>
					{/* Right Side: Service Photo with Hover Animation & Button */}
					<div className="col-md-6">
						<div className="service-photo-container position-relative">
							<Link to="/get_quote">
								<img
									src={servicePhoto}
									alt="Get Free Quote"
									className="img-fluid service-photo"
								/>
								<div className="photo-overlay">
									<button className="btn btn-primary">Transform your space today</button>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Process Section */}
			<section className="process-section container mt-5">
				<h2 className="text-center mb-4"><span className="text-secondary">OUR</span> PROCESS</h2>
				<div className="row">
					<div className="col-md-4 text-center">
						<h3>Step 1: Consultation</h3>
						<p>
							Schedule your free consultation with our design experts to discuss your vision, needs, and style preferences.
						</p>
					</div>
					<div className="col-md-4 text-center">
						<h3>Step 2: Custom Design & Quote</h3>
						<p>
							Our team will create a custom design and provide you with a detailed quote tailored to your space.
						</p>
					</div>
					<div className="col-md-4 text-center">
						<h3>Step 3: Installation</h3>
						<p>
							Once approved, our professional installers bring your custom closet to life with precision and care.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};
