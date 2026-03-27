import React from "react";

function Footer() {
	return (
		<footer className="footer">
			<div className="footer-inner">
				<p>© {new Date().getFullYear()} Lamb of God Special Education Academy (LOGSEA)</p>
				<p>All rights reserved.</p>
			</div>
		</footer>
	);
}

export default Footer;
