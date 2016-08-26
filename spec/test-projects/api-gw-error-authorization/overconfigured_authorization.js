/*global exports*/
exports.apiConfig = function () {
	'use strict';
	return {
		version: 2,
		authorizers: { customA: { lambdaName: 'nnn' } },
		routes: { echo: { 'GET' : { authorizationType: 'AWS_IAM', customAuthorizer: 'customA' } }}
	};
};
exports.router = function (event, context) {
	'use strict';
	context.succeed(event);
};