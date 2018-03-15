import { axiosInstance, resolvePromise } from "../utils/axios";
import { httpRoutes } from "../utils/config";

const loginApi = {
	login(login, password, brandingRef = "DEFAULT") {
		return new Promise(function(resolve, reject) {
			const data = {
				login,
				password,
				brandingRef
			};
			const loginUrl = httpRoutes.login.login;

			resolvePromise(axiosInstance.post(loginUrl, data), resolve, reject);
		});
	}
};

export default loginApi;
