import React, { useEffect, useRef } from "react";
import { FaUserGraduate, FaHandsHelping, FaChild, FaBrain } from "react-icons/fa";

const PROGRAMS = [
	{
		id: "individualized-education",
		title: "Individualized Education",
		icon: FaUserGraduate,
		description:
			"Personalized learning plans tailored to each child's abilities and goals.",
		bullets: ["Custom curriculum design", "One-on-one support", "Progress tracking"],
	},
	{
		id: "therapy-services",
		title: "Therapy Services",
		icon: FaHandsHelping,
		description: "Integrated therapy programs to support communication and motor skills.",
		bullets: ["Speech therapy", "Occupational therapy", "Physical therapy"],
	},
	{
		id: "inclusive-preschool",
		title: "Inclusive Preschool",
		icon: FaChild,
		description: "A nurturing environment that promotes early learning and social skills.",
		bullets: ["Play-based learning", "Social interaction", "Safe & inclusive space"],
	},
	{
		id: "behavioral-support",
		title: "Behavioral Support",
		icon: FaBrain,
		description: "Structured programs to improve behavior and emotional development.",
		bullets: ["Individual behavior plans", "Parent training", "Positive reinforcement"],
	},
];

function Programs() {
	const sectionRef = useRef(null);

	useEffect(() => {
		const node = sectionRef.current;
		if (!node) return;

		const obs = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						node.classList.add("visible");
						obs.unobserve(node);
					}
				});
			},
			{ threshold: 0.18 }
		);

		obs.observe(node);
		return () => obs.disconnect();
	}, []);

	return (
		<section ref={sectionRef} className="section programs" id="programs" aria-labelledby="programs-heading">
			<div className="programs-header">
				<h2 id="programs-heading">Our Programs</h2>
				<p>
					Comprehensive and individualized programs designed to nurture growth, independence,
					and confidence in every child.
				</p>
			</div>

			<div className="programs-grid" role="list">
				{PROGRAMS.map((p) => {
					const Icon = p.icon;
					return (
						<article key={p.id} className="card" role="listitem" aria-labelledby={`${p.id}-title`}>
							<div className="card-header">
								<div className="card-icon" aria-hidden>
									<Icon />
								</div>
								<h3 id={`${p.id}-title`}>{p.title}</h3>
							</div>
							<p>{p.description}</p>

							<ul className="card-list" aria-hidden>
								{p.bullets.map((b) => (
									<li key={b}>{b}</li>
								))}
							</ul>

							<a href={`#${p.id}`} className="card-btn" aria-label={`Learn more about ${p.title}`}>
								Learn More
							</a>
						</article>
					);
				})}
			</div>
		</section>
	);
}

export default Programs;