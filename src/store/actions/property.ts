import {
	GET_PROPERTY_START,
	GET_PROPERTY_SUCCESS,
	GET_PROPERTY_FAIL,
} from './actions';

import { APPLICATION_API } from './../../common/configs';
import { Dispatch, ActionCreator } from 'redux';
import { AxiosResponse, AxiosError } from 'axios';
import { http } from '../../common/services';

interface IProperty {
	type: string;
}

const getPropertyStart: ActionCreator<IProperty> = () => {
	return {
		type: GET_PROPERTY_START,
	};
};

interface IPropertySuceessAction extends IProperty {
	payload: any
}

interface IPropertyErrorAction extends IProperty {
	error: AxiosError;
}

const getPropertySuccess: ActionCreator<IPropertySuceessAction> = (
	payload: any
) => {
	return {
		type: GET_PROPERTY_SUCCESS,
		payload: payload
	};
};

const getPropertyFail: ActionCreator<IPropertyErrorAction> = (error: AxiosError) => {
	return {
		type: GET_PROPERTY_FAIL,
		error: error,
	};
};

const getPropertyList = () => {
    return (dispatch:Dispatch) => {
		dispatch(getPropertyStart());
		return http
			.get(APPLICATION_API.GET_USER())
			.then((response:AxiosResponse) => {
				const res = response?.data?.data;
				dispatch(getPropertySuccess(response.data));
			})
			.catch((err:AxiosError) => {
				dispatch(getPropertyFail(err?.message));
			});
	};
}

export { getPropertyList }