const _ = require("lodash");

class LoggerHelper {
  getFormatLogGwAC(reqObj) {
    if (!reqObj.ignoreFields || reqObj.ignoreFields.length < 1 || !reqObj.params || _.isEmpty(reqObj.params)) {
      return `AC ${reqObj.prototype} ${reqObj.clientIP} ${reqObj.correlationId} ${new Date(reqObj.requestTime).toISOString()}` +
        ` ${reqObj.userName} ${reqObj.method} ${reqObj.url} ${reqObj.action} ${JSON.stringify(reqObj.params)}`;
    }
    let logParamObj = this.processIgnoreFields(JSON.parse(JSON.stringify(reqObj.params)), reqObj.ignoreFields);
    logParamObj = this.processMaskingFields(JSON.parse(JSON.stringify(reqObj.params)), reqObj.maskingFields);
    return `AC ${reqObj.prototype} ${reqObj.clientIP} ${reqObj.correlationId} ${new Date(reqObj.requestTime).toISOString()}` +
      ` ${reqObj.userName} ${reqObj.method} ${reqObj.url} ${reqObj.action} ${JSON.stringify(logParamObj)}`;
  }

  getFormatLogGwOUT(resObj) {
    if (!resObj.ignoreFields || resObj.ignoreFields.length < 1 || !resObj.data || _.isEmpty(resObj.data)) {
      return `OU ${resObj.prototype} ${resObj.clientIP} ${resObj.correlationId} ${new Date(resObj.requestTime).toISOString()}` +
        ` ${resObj.userName} ${resObj.method} ${resObj.url} ${resObj.action} ${JSON.stringify(resObj.data)}`;
    }
    let logDataObj = this.processIgnoreFields(JSON.parse(JSON.stringify(resObj.data)), resObj.ignoreFields);
    logDataObj = this.processMaskingFields(JSON.parse(JSON.stringify(resObj.data)), resObj.maskingFields);
    return `OU ${resObj.prototype} ${resObj.clientIP} ${resObj.correlationId} ${new Date(resObj.requestTime).toISOString()}` +
      ` ${resObj.userName} ${resObj.method} ${resObj.url} ${resObj.action} ${JSON.stringify(logDataObj)}`;
  }

  getFormatLogSvIN(inObj) {
    if (!inObj.ignoreFields || inObj.ignoreFields.length < 1 || !inObj.params || _.isEmpty(inObj.params)) {
      return `IN ${inObj.clientIP} ${inObj.correlationId} ${inObj.requestTime}`
        + ` ${inObj.caller} ${inObj.userName} ${inObj.action} ${JSON.stringify(inObj.params)}`;
    }
    let logInObj = this.processIgnoreFields(JSON.parse(JSON.stringify(inObj.params), inObj.ignoreFields));
    logInObj = this.processMaskingFields(JSON.parse(JSON.stringify(inObj.params), inObj.maskingFields));
    return `IN ${inObj.clientIP} ${inObj.correlationId} ${inObj.requestTime}`
      + ` ${inObj.caller} ${inObj.userName} ${inObj.action} ${JSON.stringify(logInObj)}`;
  }

  getFormatLogSvOUT(outObj) {
    if (!outObj.ignoreFields || outObj.ignoreFields.length < 1 || !outObj.data || _.isEmpty(outObj.data)) {
      return `OUT ${outObj.clientIP} ${outObj.correlationId} ${outObj.requestTime}`
        + ` ${outObj.caller} ${outObj.userName} ${outObj.action} ${JSON.stringify(outObj.data)}`;
    }
    let logOutObj = this.processIgnoreFields(JSON.parse(JSON.stringify(outObj.data), outObj.ignoreFields));
    logOutObj = this.processMaskingFields(JSON.parse(JSON.stringify(outObj.data), outObj.maskingFields));
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

  processMaskingFields(objectToProccess, maskingFields) {
    if (!maskingFields || maskingFields.length < 1) {
      return objectToProccess;
    }
    maskingFields.forEach(maskConfig => {
      const {fields, maskType} = maskConfig;
      Array.isArray(fields) && fields.length > 0 && fields.forEach(field => {
        const maskValue = _.get(objectToProccess, field);
        if (!maskValue || _.isEmpty(maskValue)) {
          return;
        }
        switch (maskType) {
          case "BANK_CARD":
            _.set(objectToProccess, field, maskValue.replace(maskValue.substring(6,maskValue.length-4), '*'.repeat(maskValue.length-10)));
            break;
          case "FULL":
            _.set(objectToProccess, field, '*'.repeat(maskValue.length));
            break;
          default:
            _.set(objectToProccess, field, '*'.repeat(maskValue.length));
            break;
        }
      });
    });
    return objectToProccess;
  }
}

module.exports = LoggerHelper;
