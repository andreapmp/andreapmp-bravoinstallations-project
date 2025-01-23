import React, { useContext } from "react";
import { Context } from "../store/appContext";
import closetImg from "../../img/closet.jpg";
import laundryImg from "../../img/laundry.jpg";
import pantryImg from "../../img/pantry.png";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="carousel-container">
			<div id="carouselExampleRide" className="carousel carousel-dark slide" data-bs-ride="true">
				<div className="carousel-inner">
					<div className="carousel-item active" data-bs-interval="4000">
						<img src={closetImg} className="d-block w-100" alt="..." />
					</div>
					<div className="carousel-item" data-bs-interval="4000">
						<img src={laundryImg} className="d-block w-100" alt="..." />
					</div>
					<div className="carousel-item" data-bs-interval="4000">
						<img src={pantryImg} className="d-block w-100" alt="..." />
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
	);
};
