const initialState = {
  isAuth: false,
  token: {},
  loading: false,
  error: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
	case 'FETCH_AUTH_REQUEST':
	  return {
		...state,
		isAuth: state.isAuth,
		token: state.token,
		loading: true,
		error: false
	  };
	case 'FETCH_AUTH_SUCCESS':
	  return {
		...state,
		isAuth: true,
		token: action.payload,
		loading: false,
		error: false
	  };
	case 'FETCH_AUTH_ERROR':
	  return {
		...state,
		isAuth: false,
		token: {},
		loading: false,
		error: true
	  };
	case 'SET_AUTH_TOKEN':
	  return state;
	default:
	  return state;
  }
};

export default authReducer;
