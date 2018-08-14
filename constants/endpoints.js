let url = function (path) {
	const serverUrl = process.env.SERVER_URL || 'localhost:8080' // you can extract localhost:8080 (server url) to .env
	return serverUrl + path
}

export default {
	/*
	* Methods: GET, POST
	*/
	EXAMPLE_ENDPOINT: url('/example')
}
