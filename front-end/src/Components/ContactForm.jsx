import React, { useState, useRef, useEffect } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";

function ContactForm() {
	const [values, setValues] = useState({ name: "", email: "", phone: "", message: "" });
	const [status, setStatus] = useState({ submitting: false, success: null, message: "" });
	const sectionRef = useRef(null);

	useEffect(() => {
		const node = sectionRef.current;
		if (!node) return;

		const obs = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						node.classList.add('visible');
						obs.unobserve(node);
					}
				});
			},
			{ threshold: 0.18 }
		);

		obs.observe(node);
		return () => obs.disconnect();
	}, []);

	function handleChange(e) {
		const { name, value } = e.target;
		setValues((v) => ({ ...v, [name]: value }));
	}

	function handleSubmit(e) {
		e.preventDefault();
		setStatus({ submitting: true, success: null, message: "" });

		// Simulate submit - replace with real API call when available
		setTimeout(() => {
			setStatus({ submitting: false, success: true, message: "Inquiry submitted — we'll contact you within 2 business days." });
			setValues({ name: "", email: "", phone: "", message: "" });
		}, 900);
	}

	return (
		<section ref={sectionRef} className="contact" id="contact">
			<div className="contact-container">

				<div className="contact-info">
					<h2>Start Your Child’s Journey</h2>
					<p>
						Connect with our team to learn more about our programs, schedule a visit,
						or begin the enrollment process.
					</p>

					<div className="info-group">

						<div className="info-card">
							<div className="info-title">
								<FaMapMarkerAlt className="info-icon" />
								<h4>Location</h4>
							</div>
							<p>Orchid Road, Buhangin, Davao City</p>
						</div>

						<div className="info-card">
							<div className="info-title">
								<FaPhoneAlt className="info-icon" />
								<h4>Contact</h4>
							</div>
							<p>Mobile: 0927 685 7573 (Globe)</p>
							<p>Tel: (082) 287 6109</p>
						</div>

						<div className="info-card">
							<div className="info-title">
								<FaClock className="info-icon" />
								<h4>Office Hours</h4>
							</div>
							<ul className="hours">
								<li><span>Monday - Friday</span><span>8:00 AM – 4:00 PM</span></li>
								<li><span>Saturday</span><span className="closed">Closed</span></li>
								<li><span>Sunday</span><span className="closed">Closed</span></li>
							</ul>
						</div>

					</div>
				</div>

				<form className="contact-form" aria-label="enroll form" onSubmit={handleSubmit} noValidate>
					<h3>Send an Inquiry</h3>

					{status.success && (
						<div className="form-success" role="status" aria-live="polite">{status.message}</div>
					)}

					<div className="form-grid">
						<div className="form-field">
							<label htmlFor="name">Parent / Provider Name <span className="required">*</span></label>
							<input id="name" name="name" type="text" placeholder="Your full name" value={values.name} onChange={handleChange} required />
						</div>

						<div className="form-field">
							<label htmlFor="email">Email Address <span className="required">*</span></label>
							<input id="email" name="email" type="email" placeholder="you@example.com" value={values.email} onChange={handleChange} required />
						</div>

						<div className="form-field">
							<label htmlFor="phone">Phone Number <span className="required">*</span></label>
							<input id="phone" name="phone" type="tel" placeholder="09xx xxx xxxx" value={values.phone} onChange={handleChange} required />
						</div>

						<div className="form-field form-field-full">
							<label htmlFor="message">Tell us about your child’s needs <span className="required">*</span></label>
							<textarea id="message" name="message" placeholder="A brief overview helps us prepare for your visit" rows={5} value={values.message} onChange={handleChange} required />
						</div>
					</div>

					<div className="form-meta">
						<small>We treat your information confidentially. By submitting you agree to be contacted about enrollment.</small>
					</div>

					<button type="submit" disabled={status.submitting}>{status.submitting ? "Sending..." : "Submit Inquiry"}</button>
				</form>

			</div>
		</section>
	);
}

export default ContactForm;