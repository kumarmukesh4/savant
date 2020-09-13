import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import {propertyReducer} from './reducers'
import thunk from 'redux-thunk';

declare var window: any;
const rootReducer = combineReducers({
	property: propertyReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk))
);

export { store };
