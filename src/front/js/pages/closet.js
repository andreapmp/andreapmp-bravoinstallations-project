import React from "react";
import "../../styles/closet.css";
import closet_1 from "../../img/closet-1.jpeg";
import closet_2 from "../../img/closet-2.jpeg";
import closet_3 from "../../img/closet-3.jpeg";
import closet_4 from "../../img/closet-4.jpeg";
import closet_5 from "../../img/closet-5.jpeg";


// Store images in an array
const images = [closet_1, closet_2, closet_3, closet_4, closet_5];

export const Closet = () => {
    return (
        <div className="closet-container">
            <div id="closetCarousel" className="carousel slide" data-bs-ride="carousel">
                {/* Carousel Indicators (Dynamically Generated) */}
                <div className="carousel-indicators">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            data-bs-target="#closetCarousel"
                            data-bs-slide-to={index}
                            className={index === 0 ? "active" : ""}
                            aria-label={`Slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Carousel Items */}
                <div className="carousel-inner">
                    {images.map((img, index) => (
                        <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                            <img src={img} className="d-block w-100 closet-image" alt={`Closet ${index + 1}`} />
                        </div>
                    ))}
                </div>

                {/* Previous & Next Buttons */}
                <button className="carousel-control-prev" type="button" data-bs-target="#closetCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#closetCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
            </div>
        </div>
    );
};