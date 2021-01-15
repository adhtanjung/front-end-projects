import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { handleHover, handleHoverExit } from "./Animations";

function Header() {
	//
	return (
		<div className="d-flex justify-content-between container-header p-4 align-items-center">
			<div className="header-left d-flex">
				<Link
					to="/"
					className="logo"
					onMouseOver={(e) => handleHover(e)}
					onMouseOut={(e) => handleHoverExit(e)}
				>
					<h3>ADHTNJG.</h3>
				</Link>
			</div>
			<div className="d-flex header-right justify-content-between">
				<Link
					to="/projects"
					className="logo"
					onMouseOver={(e) => handleHover(e)}
					onMouseOut={(e) => handleHoverExit(e)}
				>
					<h5>My Projects</h5>
				</Link>
				<Link
					to="/contact-me"
					className="logo"
					onMouseOver={(e) => handleHover(e)}
					onMouseOut={(e) => handleHoverExit(e)}
				>
					<h5>Find me</h5>
				</Link>
			</div>
		</div>
	);
}

export default Header;
