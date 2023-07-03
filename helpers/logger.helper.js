const _ = require("lodash");

class LoggerHelper {
  getFormatLogGwAC(reqObj) {
    const logObject = JSON.parse(JSON.stringify(reqObj));
    if (!_.isEmpty(logObject.params) && !_.isEmpty(logObject.ignoreFields) && Array.isArray(logObject.ignoreFields) && logObject.ignoreFields.length > 0) {
      logObject.params = this.processIgnoreFields(logObject.params, logObject.ignoreFields);
    }
    if (!_.isEmpty(logObject.params) && !_.isEmpty(logObject.maskingFields) && Array.isArray(logObject.maskingFields) && logObject.maskingFields.length > 0) {
      logObject.params = this.processMaskingFields(logObject.params, logObject.maskingFields);
    }
    return `AC ${logObject.prototype} ${logObject.clientIP} ${logObject.correlationId} ${new Date(logObject.requestTime).toISOString()}` +
        ` ${logObject.userName} ${logObject.method} ${logObject.url} ${logObject.action} ${JSON.stringify(logObject.params)}`;
  }

  getFormatLogGwOUT(resObj) {
    const logObject = JSON.parse(JSON.stringify(resObj));
    if (!_.isEmpty(logObject.data) && !_.isEmpty(logObject.ignoreFields) && Array.isArray(logObject.ignoreFields) && logObject.ignoreFields.length > 0) {
      logObject.data = this.processIgnoreFields(logObject.data, logObject.ignoreFields);
    }
    if (!_.isEmpty(logObject.data) && !_.isEmpty(logObject.maskingFields) && Array.isArray(logObject.maskingFields) && logObject.maskingFields.length > 0) {
      logObject.data = this.processMaskingFields(logObject.data, logObject.maskingFields);
    }
    const result = `OU ${logObject.prototype} ${logObject.clientIP} ${logObject.correlationId} ${new Date(logObject.requestTime).toISOString()}` +
    ` ${logObject.userName} ${logObject.method} ${logObject.url} ${logObject.action} ${JSON.stringify(logObject.data)}`;
    return result.length > 500 ? result.slice(0, 500) + "..." : result;
  }

  getFormatLogSvIN(inObj) {
    const logObject = JSON.parse(JSON.stringify(inObj));
    if (!_.isEmpty(logObject.params) && !_.isEmpty(logObject.ignoreFields) && Array.isArray(logObject.ignoreFields) && logObject.ignoreFields.length > 0) {
      logObject.params = this.processIgnoreFields(logObject.params, logObject.ignoreFields);
    }
    if (!_.isEmpty(logObject.params) && !_.isEmpty(logObject.maskingFields) && Array.isArray(logObject.maskingFields) && logObject.maskingFields.length > 0) {
      logObject.params = this.processMaskingFields(logObject.params, logObject.maskingFields);
    }
    return `IN ${logObject.clientIP} ${logObject.correlationId} ${logObject.requestTime}`
    + ` ${logObject.caller} ${logObject.userName} ${logObject.action} ${JSON.stringify(logObject.params)}`;
  }

  getFormatLogSvOUT(outObj) {
    const logObject = JSON.parse(JSON.stringify(outObj));
    if (!_.isEmpty(logObject.data) && !_.isEmpty(logObject.ignoreFields) && Array.isArray(logObject.ignoreFields) && logObject.ignoreFields.length > 0) {
      logObject.data = this.processIgnoreFields(logObject.data, logObject.ignoreFields);
    }
    if (!_.isEmpty(logObject.data) && !_.isEmpty(logObject.maskingFields) && Array.isArray(logObject.maskingFields) && logObject.maskingFields.length > 0) {
      logObject.data = this.processMaskingFields(logObject.data, logObject.maskingFields);
    }
    const result = `OUT ${logObject.clientIP} ${logObject.correlationId} ${logObject.requestTime}`
    + ` ${logObject.caller} ${logObject.userName} ${logObject.action} ${JSON.stringify(logObject.data)}`;
    return result.length > 500 ? result.slice(0, 500) + "..." : result;
  }

  /** Process hide secret value */
  processIgnoreFields(objProc, ignoreFields) {
    const objectToProccess = JSON.parse(JSON.stringify(objProc));
    if (!ignoreFields || ignoreFields.length < 1) {
      return objectToProccess;
    }
    ignoreFields.map(fieldKey => {
      const valueIgnore = _.get(objectToProccess, fieldKey);
      if (!valueIgnore || _.isEmpty(valueIgnore)) {
        return fieldKey;
      }
      _.set(objectToProccess, fieldKey, "*********");
    });
    return objectToProccess;
  }

  processMaskingFields(objProc, maskingFields) {
    if (typeof yourVariable === 'object' && !Array.isArray(yourVariable) &&yourVariable !== null) {
      return objProc;
  }
    const objectToProccess = JSON.parse(JSON.stringify(objProc));
    if (!maskingFields || !Array.isArray(maskingFields) || maskingFields.length < 1) {
      return objProc;
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
            _.set(objectToProccess, field, maskValue.slice(0, 6).padEnd(maskValue.length - 4, "*").concat(maskValue.slice(-4)));
            break;
          case "SECRET":
            _.set(objectToProccess, field, '******'.concat(maskValue.slice(-6)));
            break;
          case "FULL":
            _.set(objectToProccess, field, '******');
            break;
          default:
            _.set(objectToProccess, field, '******');
            break;
        }
      });
    });
    return objectToProccess;
  }
}

module.exports = LoggerHelper;
