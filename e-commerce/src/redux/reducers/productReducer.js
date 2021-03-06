const INITIAL_STATE = {
	productList: [],
};

export const productReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "FETCH_PRODUCTS":
			return {
				...state,
				productList: action.payload,
			};
		default:
			return state;
	}
};
