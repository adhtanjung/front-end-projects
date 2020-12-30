import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutAction } from "../redux/actions";

function Header(props) {
	const logout = () => {
		localStorage.removeItem("id");
		props.logoutAction();
	};
	return (
		<div className="d-flex align-items-center justify-content-between p-3">
			<div className="header-left d-flex">
				<Link to="/" className="clickable">
					<h3 style={{ fontWeight: "bolder" }}>
						<b>berger.</b>
					</h3>
				</Link>
			</div>
			{props.id !== 0 ? (
				<div className="header-right d-flex justify-content-end align-items-center">
					<h6 className="mr-3 clickable">{props.email}</h6>

					<h4 onClick={logout} className="clickable">
						Logout
					</h4>
				</div>
			) : (
				<div className="header-right d-flex justify-content-end">
					<Link to="/login" className="clickable">
						<h4 className="mr-3">login</h4>
					</Link>
					<Link to="/signup" className="clickable">
						<h4>sign up</h4>
					</Link>
				</div>
			)}
		</div>
	);
}
const mapStateToProps = ({ user }) => {
	return {
		id: user.id,
		email: user.email,
	};
};
export default connect(mapStateToProps, { logoutAction })(Header);
