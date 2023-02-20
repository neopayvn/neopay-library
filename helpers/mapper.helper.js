const _ = require("lodash");

/** Class MapperHelper
 * Use for mapping data return client*/
class MapperHelper {
	constructor() {
	}
	/** MapObj: mapping object  format data output
	 * @output object formatted props follow by targetObj
	 * @param sourceObj: object data input
	 * @param targetObj: object format data output
	 */
	mapObj(sourceObj, targetObj) {
		if (!sourceObj || !targetObj || !_.isObject(sourceObj) || !_.isObject(targetObj)) {
			return sourceObj;
		}
		const targetObjKeys = Object.keys(targetObj);
		if (!_.isArray(targetObjKeys) || targetObjKeys.length < 1) {
			return sourceObj;
		}
		const outData = {};
		targetObjKeys.map((targetKey) => {
			outData[targetKey] = sourceObj[targetKey];
			return targetKey;
		});
		return outData;
	}

	/** mapListObj: mapping object format data output
	 * @output array object formatted props follow by targetObj
	 * @param sourceList: list object data input
	 * @param targetObj: object format data output
	 */
	mapListObj(sourceList, targetObj) {
		if (!_.isArray(sourceList) || !_.isObject(targetObj)) {
			return sourceList;
		}
		const returnList = [];
		sourceList.map((sourceObj) => {
			const mapObj = this.mapObj(sourceObj, targetObj);
			returnList.push(mapObj);
			return sourceObj;
		});
		return returnList;
	}
}

module.exports = MapperHelper;
