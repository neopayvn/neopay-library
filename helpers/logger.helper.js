const _ = require("lodash");

class LoggerHelper {
  getFormatLogGwAC(reqObj) {
    if (!reqObj.ignoreFields || reqObj.ignoreFields.length < 1 || !reqObj.params || _.isEmpty(reqObj.params)) {
      return `AC ${reqObj.prototype} ${reqObj.clientIP} ${reqObj.correlationId} ${new Date(reqObj.requestTime).toISOString()}` +
        ` ${reqObj.userName} ${reqObj.method} ${reqObj.url} ${reqObj.action} ${JSON.stringify(reqObj.params)}`;
    }
    const logParamObj = this.processIgnoreFields(JSON.parse(JSON.stringify(reqObj.params)), reqObj.ignoreFields);
    return `AC ${reqObj.prototype} ${reqObj.clientIP} ${reqObj.correlationId} ${new Date(reqObj.requestTime).toISOString()}` +
      ` ${reqObj.userName} ${reqObj.method} ${reqObj.url} ${reqObj.action} ${JSON.stringify(logParamObj)}`;
  }

  getFormatLogGwOUT(resObj) {
    if (!resObj.ignoreFields || resObj.ignoreFields.length < 1 || !resObj.data || _.isEmpty(resObj.data)) {
      return `OU ${resObj.prototype} ${resObj.clientIP} ${resObj.correlationId} ${new Date(resObj.requestTime).toISOString()}` +
        ` ${resObj.userName} ${resObj.method} ${resObj.url} ${resObj.action} ${JSON.stringify(resObj.data)}`;
    }
    const logDataObj = this.processIgnoreFields(JSON.parse(JSON.stringify(resObj.data)), resObj.ignoreFields);
    return `OU ${resObj.prototype} ${resObj.clientIP} ${resObj.correlationId} ${new Date(resObj.requestTime).toISOString()}` +
      ` ${resObj.userName} ${resObj.method} ${resObj.url} ${resObj.action} ${JSON.stringify(logDataObj)}`;
  }

  getFormatLogSvIN(inObj) {
    if (!inObj.ignoreFields || inObj.ignoreFields.length < 1 || !inObj.params || _.isEmpty(inObj.params)) {
      return `IN ${inObj.clientIP} ${inObj.correlationId} ${inObj.requestTime}`
        + ` ${inObj.caller} ${inObj.userName} ${inObj.action} ${JSON.stringify(inObj.params)}`;
    }
    const logInObj = this.processIgnoreFields(JSON.parse(JSON.stringify(inObj.params), inObj.ignoreFields));
    return `IN ${inObj.clientIP} ${inObj.correlationId} ${inObj.requestTime}`
      + ` ${inObj.caller} ${inObj.userName} ${inObj.action} ${JSON.stringify(logInObj)}`;
  }

  getFormatLogSvOUT(outObj) {
    if (!outObj.ignoreFields || outObj.ignoreFields.length < 1 || !outObj.data || _.isEmpty(outObj.data)) {
      return `OUT ${outObj.clientIP} ${outObj.correlationId} ${outObj.requestTime}`
        + ` ${outObj.caller} ${outObj.userName} ${outObj.action} ${JSON.stringify(outObj.data)}`;
    }
    const logOutObj = this.processIgnoreFields(JSON.parse(JSON.stringify(outObj.data), outObj.ignoreFields));
    return `OUT ${outObj.clientIP} ${outObj.correlationId} ${outObj.requestTime}`
      + ` ${outObj.caller} ${outObj.userName} ${outObj.action} ${JSON.stringify(logOutObj)}`;
  }

  /** Process hide secret value */
  processIgnoreFields(objProc, ignoreFields) {
    if (!ignoreFields || ignoreFields.length < 1) {
      return objProc;
    }
    ignoreFields.map(fieldKey => {
      const valueIgnore = _.get(objProc, fieldKey);
      if (!valueIgnore || _.isEmpty(valueIgnore)) {
        return fieldKey;
      }
      _.set(objProc, fieldKey, "*********");
    });
    return objProc;
  }
}

module.exports = LoggerHelper;
