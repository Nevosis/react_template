const baseAppRouter = "/";

// http request config
const httpRequest = {
	serverAddress: "http://192.168.1.206",
	port: "8080",
	serverPath: "/path/"
};

// TimeOut request
const requestTimeOut = 600000;

// httpRoutes
const httpRoutes = {
	login: {
		login: "/authentication/authenticate"
	}
};

export { baseAppRouter, requestTimeOut, httpRequest, httpRoutes };