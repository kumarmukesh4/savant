import { API_BASE_PATH } from '../constants/constants';

const APPLICATION_API = {
	GET_USER: (): string => {
		return `${API_BASE_PATH()}/todos`;
	},
};


export { APPLICATION_API};
