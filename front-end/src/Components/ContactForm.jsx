import React from "react";

function ContactForm() {
	return (
		<section className="section contact" id="contact">
			<h2>Get in Touch</h2>
			<div className="contact-wrap" style={{display: 'flex', justifyContent: 'center'}}>
				<form className="contact-form" aria-label="enroll form">
					<input type="text" placeholder="Parent / Provider Name" />
					<input type="email" placeholder="Email" />
					<input type="tel" placeholder="Phone" />
					<textarea placeholder="Message" rows={4} />
					<button type="submit">Submit</button>
				</form>
			</div>
		</section>
	);
}

export default ContactForm;
