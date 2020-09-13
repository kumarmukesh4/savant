import axios, {
	AxiosRequestConfig,
	AxiosError,
	AxiosResponse,
	AxiosPromise,
} from 'axios';
import localStore from './localstorage.service';
import errorLog from './error-log.service';

declare var window: any;
interface PayLoad {
	[key: string]: any;
}

class HttpService {
	service: HttpService;
	constructor() {
		let service = null;
		if (!window.HttpService) {
			service = axios.create();
			service.interceptors.request.use(
				this.handleRequestSuccess,
				this.handleRequestError
			);
			service.interceptors.response.use(
				this.handleResponseSuccess,
				this.handleResponseError
			);
			window.HttpService = service;
		}

		this.service = window.HttpService;
	}

	// HTTP interceptor handlers
	handleRequestSuccess = (config: AxiosRequestConfig) => {
		// Do something before request is sent
		return config;
	};
	handleRequestError = (error: AxiosError) => {
		// Do something with request error
		return Promise.reject(error);
	};
	handleResponseSuccess = (response: AxiosResponse) => {
		return response;
	};

	handleResponseError = (error: AxiosError) => {
		try {
			const status = error?.response?.status;
			const msg =
				error?.response?.data?.message ||
				error?.response?.statusText ||
				'Something went wrong.Please try again.';
			switch (status) {
				case 400:
					//window.location.href = `/error?msg=${msg}`;
					break;
				case 401:
					//window.location.href = `/error?msg=${msg}`;
					break;
				case 404:
					//window.location.href = `/error?msg=${msg}`;
					break;
				default:
					break;
			}
			// errorLog.log(status);
			return Promise.reject(error);
		} catch (e) {
			console.log(error.response);
		}
	};

	//set headers
	get config() {
		const token = localStore.get('AUTH_TOKEN') || '';
		const refreshToken = localStore.get('REFRESH_TOKEN') || '';
		return {
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
				'refresh-token': `${refreshToken}`,
				Authorization: `Bearer ${token}`,
			},
		};
	}

	// GET Request
	get(path: string, config = this.config): AxiosPromise {
		return this.service.get(path, config);
	}
	// POST Request
	post(path: string, payload: PayLoad, config = this.config): AxiosPromise {
		return this.service.post(path, payload, config);
	}
	// PATCH Request
	patch(path: string, payload: PayLoad, config = this.config): AxiosPromise {
		return this.service.patch(path, payload, config);
	}
	// PUT Request
	put(path: string, payload: PayLoad, config = this.config): AxiosPromise {
		return this.service.put(path, payload, config);
	}
	// DELETE Request
	delete(path: string, config = this.config): AxiosPromise {
		return this.service.delete(`${path}`, config);
	}

	// Auth Request
	auth(path: string, payload: PayLoad) {
		return axios({
			method: 'post',
			url: path,
			data: payload,
			headers: {
				'content-type': 'application/json',
			},
		});
	}

	// Signup Request
	signup(path: string, payload: PayLoad) {
		return axios({
			method: 'post',
			url: path,
			data: payload,
			headers: {
				'content-type': 'application/json',
			},
		});
	}
}

const http = new HttpService();
const httpInstance = window.HttpService || null;

export { http, httpInstance };
