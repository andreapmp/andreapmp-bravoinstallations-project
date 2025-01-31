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

        if (!formData.fullName.trim()) {
            newErrors.fullName = "Full name is required.";
        }
        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Invalid email format.";
        }
        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required.";
        } else if (!/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = "Phone number must be 10 digits.";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0; // Returns true if no errors
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            console.log("Validation failed, form not submitted.");
            return; // Stop submission if validation fails
        }

        const googleScriptURL = "https://script.google.com/macros/s/AKfycbzwVQZxzBkkdxZqFgIscFCoJJuB_LNBB-RVpBVBjufozEhD6zO2E8wzt-mwOFcguNNC/exec";

        // Convert form data into URL-encoded format
        const formParams = new URLSearchParams();
        formParams.append("fullName", formData.fullName);
        formParams.append("email", formData.email);
        formParams.append("phone", formData.phone);
        formParams.append("message", formData.message);

        console.log("Sending data:", formParams.toString());

        try {
            const response = await fetch(googleScriptURL, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: formParams.toString(),
            });

            alert("Your request has been sent!");
            setFormData({ fullName: "", email: "", phone: "", message: "" });
            setErrors({ fullName: "", email: "", phone: "" }); // Clear errors on success
        } catch (error) {
            console.error("Fetch error:", error);
            alert("There was an error submitting your request. Please try again.");
        }
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
