import React from "react";
import twitter from "../icons/twitter.svg";
import instagram from "../icons/instagram.svg";
import linkedin from "../icons/linkedin.svg";
import { handleHover, handleHoverExit } from "./Animations";

function ContactMe() {
	return (
		<div className="container main-container">
			<div className="social-media body-container">
				<p>+6287783870115</p>
				<a href="mailto:adhtanjung@mail.com">Send email</a>
				<a
					href="https://twitter.com/adhitanjung_"
					target="_blank"
					rel="noreferrer"
				>
					<img src={twitter} alt="" height="25px" />
				</a>
				<br />
				<a
					href="https://github.com/adhtanjung"
					target="_blank"
					rel="noreferrer"
				>
					github
				</a>
				<br />
				<a
					href="https://github.com/adhtanjung"
					target="_blank"
					rel="noreferrer"
				>
					<img src={instagram} alt="" height="25px" />
				</a>
			</div>
		</div>
	);
}

export default ContactMe;
