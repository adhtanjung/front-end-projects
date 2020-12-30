import axios from "axios";
import { api_url } from "../../helpers/api_url";

export const signupAction = (data) => {
	return (dispatch) => {
		axios
			.post(`${api_url}/users`, data)
			.then((res) => {
				dispatch({
					type: "SIGNUP",
					payload: res.data,
				});
				localStorage.setItem("id", res.data.id);
			})
			.catch((err) => {
				console.log(err);
			});
	};
};

export const logoutAction = () => {
	return {
		type: "LOGOUT",
	};
};
export const keepLoginAction = (id) => {
	return (dispatch) => {
		axios
			.get(`${api_url}/users/${id}`)
			.then((res) => {
				dispatch({
					type: "LOGIN",
					payload: res.data,
				});

				console.log(res.data);
			})
			.catch((err) => {});
	};
};
