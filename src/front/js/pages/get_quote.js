import React, { useState } from "react";
import "../../styles/get_quote.css";

export const Get_quote = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        projectType: "Closet",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // You can integrate this with your backend or email service
        alert("Thank you! Your quote request has been submitted.");
    };

    return (
        <div className="quote-form-container mt-5 p-4">
            <h2 className="text-center mb-4">Get a Free Quote</h2>
            <form onSubmit={handleSubmit} className="quote-form">
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="firstName" className="form-label">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            className="form-control"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="lastName" className="form-label">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            className="form-control"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                        Phone
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="form-control"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="projectType" className="form-label">
                        Project Type
                    </label>
                    <select
                        id="projectType"
                        name="projectType"
                        className="form-select"
                        value={formData.projectType}
                        onChange={handleChange}
                    >
                        <option value="Closet">Closet</option>
                        <option value="Garage">Garage</option>
                        <option value="Laundry">Laundry</option>
                        <option value="Pantry">Pantry</option>
                    </select>
                </div>
                <div className="text-center mb-5">
                    <button type="submit" className="btn quoteSubmit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};
