const typesLoaded = (types) => {
  return {
	type: 'OBJECT_TYPES_LOADED',
	payload: types
  };
};

export {
  typesLoaded
}
