import axios from "axios";
import { httpRequest, requestTimeOut } from "./config";

let baseURL = "";
if (httpRequest.port) {
	baseURL = `${httpRequest.serverAddress}:${httpRequest.port}${httpRequest.serverPath}`;
} else {
	baseURL = `${httpRequest.serverAddress}/`;
}

// Generic axiosInstance
const axiosInstance = axios.create({
	baseURL: baseURL,
	timeout: requestTimeOut,
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json"
	}
});

// Function who follow generic api contract
const resolvePromise = (promise, resolve, reject) => {
	promise
		.then(function(res) {
			if (
				res.data.error &&
				res.data.error.code &&
				res.data.error.code === -3
			) {
				reject(res.data.error);
			} else if (res.data.error && res.data.error.code) {
				reject(res.data.error);
			} else if (typeof res.data.result !== "undefined")
				resolve(res.data.result);
			else {
				reject(res.data.error);
			}
		})
		.catch(function(err) {
			reject(err);
		});
};

export {
	axiosInstance,
	resolvePromise,
};
