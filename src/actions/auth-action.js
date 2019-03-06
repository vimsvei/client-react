const authRequested = () => {
  return {
	type: 'FETCH_AUTH_REQUEST'
  };
};

const authSuccess = (token) => {
  return {
	type: 'FETCH_AUTH_SUCCESS',
	payload: token
  };
};

const authError = (token) => {
  return {
	type: 'FETCH_AUTH_ERROR'
  };
};
