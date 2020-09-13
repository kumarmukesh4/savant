import * as _ from 'lodash';

const stringifyJSON = (value: Object): string => {
	return JSON.stringify(value);
};
const parseJSON = (value: string) => {
	return JSON.parse(value);
};
const compareResult = (value1: any, value2: any) => {
	return _.isEqual(value1, value2);
};

const mergeArray = (
	oldArr: Array<any>,
	updateArr: Array<any>,
	uniqueKey: string
): Array<any> => {
	const arr = _.unionBy(oldArr, updateArr, uniqueKey);
	return arr;
};

const mergeObject = (obj1:Object ,obj2:Object):Object => {
	return _.merge(obj1, obj2);
}
export {
	stringifyJSON,
	parseJSON,
	compareResult,
	mergeArray,
	mergeObject
};
