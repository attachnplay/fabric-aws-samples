/*
# Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
# 
# Licensed under the Apache License, Version 2.0 (the "License").
# You may not use this file except in compliance with the License.
# A copy of the License is located at
# 
#     http://www.apache.org/licenses/LICENSE-2.0
# 
# or in the "license" file accompanying this file. This file is distributed 
# on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either 
# express or implied. See the License for the specific language governing 
# permissions and limitations under the License.
*/

var util = require('util');
var request = require('request');
var helper = require('./connection.js');
var logger = helper.getLogger('Export');

var exportTransactionData = async function(message) {
	try {
		logger.info('============ START exportTransactionData');
		request({
			url: "https://ghddibof0a.execute-api.us-east-1.amazonaws.com/v1/transaction/message",
			method: "POST",
			timeout: 5000,
			headers: { "content-type": "application/json" },
			json: message
		}, function(err, res, body) {
			logger.info('## StatusCode : ' + res.statusCode);
		});
	
	} catch(error) {
		logger.error('##### exportTransactionData - Failed to export due to error: ' + error.stack ? error.stack : error);
                return error.toString();
	}
}

exports.exportTransactionData = exportTransactionData;
