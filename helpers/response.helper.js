const { STATE, INTERNAL_CODES, HTTP_STATUS_CODES } = require("../defined/state-code");

class ResponseHelper {
	/** Processing result return to publish actions
	 * @param data data will return
	 * @param state
	 * @output { code, state data, message }
	 */
	resOK(data, state = STATE.DONE) {
		return {
			code: INTERNAL_CODES.SUCCESS.CODE,
			state,
			data,
			message: INTERNAL_CODES.SUCCESS.MESSAGE.EN
		};
	}

	/** Processing result return to publish actions
	 * @output  { code, state data, message }
	 * @param definedCodeObj: object { CODE, MESSAGE, STATUS_CODE } defined
	 * @param state
	 * @param [data]: object custom failed
	 * @param langCode: language code as en, vi.. Default is en
	 */
	resFailed(definedCodeObj, state, langCode = "EN", data = undefined) {
		if (definedCodeObj.CODE && definedCodeObj.MESSAGE) {
			return {
				code: definedCodeObj.CODE,
				state: state,
				message: definedCodeObj.MESSAGE[langCode.toUpperCase()] || definedCodeObj.MESSAGE.EN,
				data
			};
		}
		return {
			code: INTERNAL_CODES.FAILED.CODE,
			state: state,
			message: INTERNAL_CODES.FAILED.MESSAGE.EN,
			data
		}
	}

	/** Processing result return from service to gateway
	 * @output  { code, data, message }
	 * @param dataService
	 * @param res
	 */
	resGateway(dataService, res) {
		if (!dataService) {
			res.statusCode = HTTP_STATUS_CODES.REQUEST_TIMEOUT;
			return {
				code: INTERNAL_CODES.FAILED.CODE,
				data: null,
				message: "FAILED"
			};
		}
		if (dataService.code === INTERNAL_CODES.SUCCESS.CODE) {
			res.statusCode = HTTP_STATUS_CODES.OK;
			return {
				code: dataService.code,
				data: dataService.data,
				message: "SUCCESS"
			};
		}
		res.statusCode = HTTP_STATUS_CODES.EXPECTATION_FAILED;
		return {
			code: dataService.code,
			data: dataService.data,
			message: dataService.message || "FAILED"
		};
	}

	/** Processing result return from service to gateway
	 * @output void || end request -> send response to client
	 * @param res
	 * @param statusCode
	 * @param code
	 * @param message
	 * @param data
	 * @param headers
	 */
	resToClient(res, statusCode, code, message, data = undefined, headers = {"Content-Type": "application/json"}) {
		res.writeHead(statusCode, headers);
		res.end(JSON.stringify({code, data, message}));
	}


	/** Processing result return to publish actions
	 * @param data data will return
	 * @param state
	 * @output { code, state data, message }
	 */
	resOKPGW(data, state = STATE.DONE) {
		return {
			neo_ResponseCode: INTERNAL_CODES.SUCCESS.CODE,
			data,
			neo_ResponseMsg: INTERNAL_CODES.SUCCESS.MESSAGE.EN
		};
	}

	/** Processing result return to publish actions
	 * @output  { code, state data, message }
	 * @param definedCodeObj: object { CODE, MESSAGE, STATUS_CODE } defined
	 * @param state
	 * @param [data]: object custom failed
	 * @param langCode: language code as en, vi.. Default is en
	 */
	resFailedPGW(definedCodeObj, state, langCode = "EN", data = undefined) {
		return {
			neo_ResponseCode: definedCodeObj.CODE,
			data,
			neo_ResponseMsg: definedCodeObj.MESSAGE[langCode.toUpperCase()] || definedCodeObj.MESSAGE.EN,
		};
	}
}

module.exports = ResponseHelper;
