import { API_BASE_PATH } from '../constants/constants';

const APPLICATION_API = {
	GET_PROPERTY: (): string => {
		return `${API_BASE_PATH()}/rest/sav/searchoptions`;
	},
	GET_USER: (): string => {
		return `${API_BASE_PATH()}/rest/sav/searchoptions`;
	},
};


export { APPLICATION_API};
