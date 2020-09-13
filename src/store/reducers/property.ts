import {
	GET_PROPERTY_START,
	GET_PROPERTY_SUCCESS,
	GET_PROPERTY_FAIL,
} from '../actions/actions';
import { mergeObject } from '../../common/utils/utility';
import {Error, GenericSchema ,ApplicationInfo } from '../../schemas';

const initialState: ApplicationInfo = {
	list:null,
	error: new Error(),
	loading: false,
};
const reducer = (state = initialState, action: GenericSchema) => {
	switch (action.type) {
		case GET_PROPERTY_START:
			return mergeObject(state, {
				error: null,
				loading: true,
			});
		case GET_PROPERTY_SUCCESS:
			return mergeObject(state, {
				list: action.payload,
				error: null,
				loading: false,
			});
		case GET_PROPERTY_FAIL:
			return mergeObject(state, {
				error: action.error,
				loading: false,
			});
		default:
			return state;
	}
};

export default reducer;
