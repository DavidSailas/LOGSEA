import React, { useEffect, useRef } from "react";
import { scrollToSection } from "../utils/scrollToSection";
import { FaFacebookF, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function Hero() {
	const textRef = useRef(null);
	const barRef = useRef(null);

	useEffect(() => {
		// Staggered reveal: hero text then contact bar
		const textEl = textRef.current;
		const barEl = barRef.current;
		if (textEl) {
			requestAnimationFrame(() => textEl.classList.add("visible"));
		}
		if (barEl) {
			// delay contact bar slightly
			setTimeout(() => barEl.classList.add("visible"), 300);
		}
	}, []);

	return (
			<>
				<section className="hero" id="home">
					<div className="hero-text" ref={textRef}>
					<h1>
						Empowering Children with <br />
						Special Needs to Learn and Grow
					</h1>

					<p className="hero-tagline">
						Train up a child in the way he should go, and when he is old he will not depart from it.
					</p>

					<div className="hero-actions">
						<a
							href="#why"
							className="cta-btn"
							onClick={(e) => {
								e.preventDefault();
								scrollToSection("why");
							}}
						>
							Learn More
						</a>
					</div>
				</div>
			</section>

			<div className="hero-contact-bar" ref={barRef}>
				<div className="contact-item">
					<FaFacebookF />
					<a href="https://www.facebook.com/LGSADavao" target="_blank" rel="noopener noreferrer">
						Facebook
					</a>
				</div>

				<div className="contact-item">
					<FaPhoneAlt />
					<span>0927 685 7573 | (082) 287 6109</span>
				</div>

				<div className="contact-item">
					<FaEnvelope />
					<span>lgsacademydc@yahoo.com</span>
				</div>

				<div className="contact-item">
					<FaMapMarkerAlt />
					<span>Orchid Road, Buhangin, Davao City</span>
				</div>
			</div>
		</>
	);
}

export default Hero;