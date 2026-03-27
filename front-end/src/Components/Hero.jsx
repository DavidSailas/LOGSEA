import React from "react";
import heroImg from "../assets/hero.png";

function Hero() {
	return (
		<section className="hero" id="home">
			<div className="hero-text">
				<h1>Empowering Children with Special Needs to Learn and Grow</h1>
				<p>
					Dedicated to nurturing and educating children with special needs.
				</p>
				<a href="#enroll" className="cta-btn">
					Learn More
				</a>
			</div>

			<div className="hero-image">
				<img src={heroImg} alt="Academy" style={{ maxWidth: 420 }} />
			</div>
		</section>
	);
}

export default Hero;
