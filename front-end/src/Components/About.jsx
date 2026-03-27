import React from "react";

function About() {
	return (
		<section className="section about" id="about">
			<div className="about-inner" style={{display: 'flex', gap: 24, alignItems: 'center', justifyContent: 'space-between'}}>
				<div style={{flex: 1}}>
					<h2>About Our Academy</h2>
					<h3>Providing Quality Education Since 1992</h3>
					<p>
						Lamb of God Special Education Academy of Buhangin, Inc. (LOGSEA) has been
						dedicated to nurturing and educating children with special needs in Davao City since 1992.
					</p>
				</div>
			</div>
		</section>
	);
}

export default About;
