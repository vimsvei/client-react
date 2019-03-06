class ApiService {
  typeObject = [
	{id: 1, name: "Application Component"},
	{id: 2, name: "Landscape"},
	{id: 3, name: "Application Function"},
	{id: 4, name: "Divice"}
  ];
  
  getTypeObject() {
	return new Promise((resolve, reject) => {
	  setTimeout(() => {
		if (Math.random() > 0.75) {
		  reject(new Error('Something bad happened'));
		} else {
		  resolve(this.typeObject);
		}
	  }, 1000);
	});
  }
  
}

export default ApiService
