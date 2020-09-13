const errorLog = {
	/**
	 * Will log the  error
	 * @error: error thrown
	 * @info: more info optional
	 */
	log: function (error: any, info: any = '') {
		console.log(error, info);
	},
};
export default errorLog;
