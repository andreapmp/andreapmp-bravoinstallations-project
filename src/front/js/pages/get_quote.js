import React, { useState } from "react";
import "../../styles/get_quote.css";

export const Get_quote = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        message: "",
    });

    const [errors, setErrors] = useState({
        fullName: "",
        email: "",
        phone: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.fullName) newErrors.fullName = "Full name is required.";
        if (!formData.email) newErrors.email = "Email is required.";
        if (!formData.phone) newErrors.phone = "Phone is required.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        console.log("Form submitted:", formData);
        alert("Thank you! Your quote request has been submitted.");
    };

    return (
        <div className="quote-form-wrapper">
            <div className="quote-form-border">
                <div className="quote-form-container">
                    <h2 className="text-center mb-4">Schedule Your Free Consultation & Custom Design Today!</h2>
                    <form onSubmit={handleSubmit} className="quote-form">
                        <div className="row mb-3">
                            <div className="col-md-12">
                                <label htmlFor="fullName" className="form-label">
                                    Full Name <span className="required">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    className="form-control"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                />
                                {errors.fullName && <div className="error">{errors.fullName}</div>}
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email <span className="required">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-control"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <div className="error">{errors.email}</div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">
                                Phone <span className="required">*</span>
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                className="form-control"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                            {errors.phone && <div className="error">{errors.phone}</div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">
                                Message <span className="text-secondary">(optional)</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className="form-control"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Describe your project or leave any additional comments here..."
                            />
                        </div>
                        <div className="text-center mb-5">
                            <button type="submit" className="btn quoteSubmit">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
