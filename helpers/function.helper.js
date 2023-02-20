const randomize = require("randomatic");
const jsonDiff = require("json-diff");
const _ = require("lodash");
const mongoose = require("mongoose");
const dateFrm = require("dateformat");
const locationResource = require("../defined/locations");

/** Functions Helpers
 *
 */
class FunctionHelper {

	/** Convert string to unicode
	 * @param str string value
	 * @output string result
	 */
	convertUnicode(str) {
		try {
			return str.normalize("NFD")
				.replace(/[\u0300-\u036f]/g, "")
				.replace(/đ/g, "d").replace(/Đ/g, "D");
		} catch (e) {
			return "";
		}
	}

	/** Generate random a string with number format
	 * @param length numbers characters
	 * @param startString character start
	 * @param endString character end
	 * @param delimiter character delimiter
	 * @output string result
	 */
	generateRandomNumber(length, startString = "", endString = "", delimiter = "") {
		try {
			const numberGen = randomize("0", length, "");
			let result = "";
			if (!endString) {
				return `${startString}${delimiter}${numberGen}`;
			}
			result = `${startString}${delimiter}${numberGen}${delimiter}${endString}`;
			return result;
		} catch (e) {
			return "";
		}
	}

	/** Generate random a upper string
	 * @param length numbers characters
	 * @param startString character start
	 * @param endString character end
	 * @param delimiter character delimiter
	 * @output string result
	 */
	generateRandomUpperString(length, startString = "", endString = "", delimiter = "") {
		try {
			const stringGen = randomize("A", length, "");
			let result = "";
			if (_.isEmpty(endString)) {
				result = `${startString}${delimiter}${stringGen}`;
				return result;
			}
			result = `${startString}${delimiter}${stringGen}${delimiter}${endString}`;
			return result;
		} catch (e) {
			return "";
		}
	}

	/** Generate random a string with a patter
	 * @param pattern characters
	 * @param length numbers characters
	 * @param option numbers characters
	 * @param startString character start
	 * @param endString character end
	 * @param delimiter character delimiter
	 * @output string result
	 */
	generateRandomStringCustom(pattern, length, option = {}, startString = "", endString = "", delimiter = "") {
		try {
			const stringGen = randomize(pattern, length, option);
			return `${startString}${delimiter}${stringGen}${delimiter}${endString}`;
		} catch (e) {
			return "";
		}
	}

	/** Remove all space and special characters of a string
	 * @param text string value input
	 * @output string result
	 */
	removeAllSpaceAndSpecialChars(text) {
		try {
			const newString = text.replace(/[^A-Z0-9_]+/ig, "");
			return newString;
		} catch (e) {
			return "";
		}
	}

	/** Convert string to key code
	 * @param text string value input
	 * @output string result
	 */
	convertToKeyCode(text) {
		const str = this.convertUnicode(text);
		return this.removeAllSpaceAndSpecialChars(str);
	}

	/** Compare 2 json
	 * @param jsonObj object json need to compare
	 * @param compareJsonObj object json use to compare
	 * @output boolean value
	 */
	jsonCompare(jsonObj, compareJsonObj) {
		const result = jsonDiff.diffString(jsonObj, compareJsonObj);
		return !result;
	}

	/** Find a character in a string
	 * @param str string value input
	 * @param charToCount character need to find
	 * @output number value
	 */
	findOccurrences(str, charToCount) {
		return str.split(charToCount).length - 1;
	}

	/** Replace string with specific
	 * @param str string value input
	 * @param strRep value need to replace
	 * @param strRep value use to replace
	 * @output string replaced
	 */
	replaceString(str, strRep, repStr) {
		if (!str) {
			return "";
		}
		if (!strRep) {
			return str;
		}
		// const repE = new RegExp(strRep, "gi");
		const newStr = str.replace(new RegExp(strRep, "gi"), repStr);
		return newStr;
	}

	/** Get first character of string
	 * @param str string value input
	 * @output string result
	 */
	getFirstCharsOfString(str) {
		if (!str) {
			return "";
		}
		const strArr = str.split(" ");
		if (!strArr || !_.isArray(strArr) || strArr.length < 1) {
			return str;
		}
		let returnText = "";
		strArr.map((x) => {
			returnText += x.charAt(0);
			return x;
		});
		return returnText;
	}

	/** Trim all fields of a object or array objects
	 * @param obj dynamic value object or array object
	 * @output result
	 */
	trimDynamic(obj) {
		if (!Array.isArray(obj) && typeof obj !== "object") return obj;
		return Object.keys(obj).reduce((acc, key) => {
			acc[key.trim()] = typeof obj[key] === "string" ? obj[key].trim() : this.trimDynamic(obj[key]);
			return acc;
		}, Array.isArray(obj) ? [] : {});
	}

	/** Get current date format from date timestamp value
	 * @param date number timestamp
	 * @param dateFm
	 * @output result
	 */
	getCurrentDateByFormat(date = Date.now(), dateFm = "yyyymmdd-hhMMss") {
		try {
			return dateFrm(date, dateFm);
		} catch (e) {
			return "";
		}
	}

	/** Convert value to date
	 * @param inputParams number timestamp or string datetime
	 * @output result date object
	 */
	convertToDate(inputParams) {
		try {
			if (!inputParams) {
				return null;
			}
			const timeStamp = parseInt(inputParams, 10);
			if (_.isNumber(timeStamp)) {
				return new Date(timeStamp);
			}
			return new Date(inputParams);
		} catch (e) {
			return null;
		}
	}

	/** Convert string value to date
	 * @param strDate number timestamp or string datetime
	 * @param typeFrm format date
	 * @output result date object
	 */
	convertStringToDate(strDate, typeFrm = "yyyy-MM-dd") {
		try {
			if (!strDate) {
				return null;
			}
			const date = new Date(strDate);
			return date;
		} catch (e) {
			return null;
		}
	}

	/** Convert string value to number
	 * @param strNum string number value
	 * @output result number
	 */
	convertStringToNumber(strNum) {
		if (!strNum || _.isEmpty(strNum)) {
			return null;
		}
		// eslint-disable-next-line no-useless-escape
		return Number(strNum.replace(/[^0-9\.]+/g, ""));
	}

	/** Convert string value to number
	 * @param dateTime string or number timestamp
	 * @param numberDayAgo a number day will skip
	 * @param isOnlyGetDate just only get date need not time
	 * @output result date iso
	 */
	convertDateTimeToStringISO(dateTime, numberDayAgo = 0, isOnlyGetDate = true) {
		let strDate = "";
		if (_.isNumber(dateTime)) {
			dateTime = new Date(dateTime);
		}
		if (numberDayAgo && _.isNumber(numberDayAgo)) {
			dateTime = new Date(dateTime - numberDayAgo * (864e5)); // 864e5 == 86400000 == 24*60*60*1000
		}
		if (isOnlyGetDate) {
			dateTime = new Date(dateTime.setUTCHours(0, 0, 0, 0));
		}
		strDate = dateTime.toISOString();
		return strDate;
	}

	/** Validate email address
	 * @param email string
	 * @output result boolean
	 */
	validateEmailAddress(email) {
		const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		return regex.test(email);
	}

	/** Validate string is format phone number
	 * @param strPhone string number value
	 * @output result boolean
	 */
	validPhoneNumber(strPhone) {
		const regex = /^[0-9]{10}$/;
		return regex.test(strPhone);
	}

	/** Convert a string to a phone number format
	 * @param strPhone string number value
	 * @output result string
	 */
	convertStringToPhone(strPhone) {
		if (strPhone.indexOf("/") > -1) {
			const strPhoneArr = strPhone.split("/");
			const strPhoneFirst = strPhoneArr[0];
			strPhone = strPhoneFirst;
		}
		let formatPhone = strPhone.replace(/ /g, "");
		formatPhone = formatPhone.replace(/^84/, "0");
		formatPhone = formatPhone.replace("+84", "0");
		formatPhone = formatPhone.replace("+84", "0");
		formatPhone = formatPhone.replace("+84(0)", "0");
		formatPhone = formatPhone.replace("(+84)", "0");
		formatPhone = formatPhone.replace("0(0)", "0");
		formatPhone = this.removeAllSpaceAndSpecialChars(formatPhone);
		return formatPhone;
	}

	/** Get date string format
	 * @param date string number value
	 * @output result string
	 */
	getDateStringFormat(date = null) {
		if (_.isNumber(date)) {
			return dateFrm(new Date(date), "yymdhMs");
		}
		if (date && _.isDate(date)) {
			return dateFrm(date, "yymdhMs");
		}
		return "";
	}

	/** Set content child properties by language code
	 * @param contentObj object data processing
	 * @param languageCode string language code
	 * @output object mapped value via language code */
	translateContent(contentObj, languageCode = "vi") {
		if (!contentObj) {
			return contentObj;
		}
		const dataReturn = {};
		if (contentObj[languageCode] == null || contentObj[languageCode] === undefined
			|| contentObj[languageCode] === "" || Object.keys(contentObj).length < 1) {
			dataReturn[languageCode] = contentObj;
			return dataReturn;
		}
		dataReturn[languageCode] = contentObj[languageCode];
		return dataReturn;
	}

	/** Convert value to mongoId
	 * @output array _id or _id
	 * @param params array value or string value */
	convertToMongoId(params) {
		if (_.isArray(params)) {
			return params.map((id) => mongoose.Types.ObjectId(id));
		} if (_.isString(params)) {
			return mongoose.Types.ObjectId(params);
		}
		return params;
	}

	/** Check input param is empty
	 * @param inputValue: param value need to checking
	 * @output true || false */
	isEmpty(inputValue) {
		if (typeof inputValue === "number") {
			return false;
		}
		if (typeof inputValue === "boolean") {
			return false;
		}
		if (!inputValue) {
			return true;
		}
		if (typeof inputValue === "object" && Object.keys(inputValue).length < 1) {
			return true;
		}
		return Array.isArray(inputValue) && inputValue.length < 1;
	}

	/** Random a string contains only number
	 * @param length
	 * @output string number */
	randomStringNumber(length) {
		const result = [];
		const characters = "0123456789";
		const charactersLength = characters.length;
		for (let i = 0; i < length; i++) {
			result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
		}
		return result.join("");
	}

	/** Check string is valid phone format
	 * @param value
	 * @output true || false */
	isPhoneNumber(value) {
		const vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
		return vnf_regex.test(value || "");
	}

	/** Get full string address
	 * @param province
	 * @param district
	 * @param ward
	 * @param address
	 * @output address full */
	getFullTextAddress(province, district, ward, address) {
		let provinceText = province;
		let districtText = district;
		let wardText = address;
		if (province && _.isNumber(province) && parseInt(province, 10) > 0) {
			const provinceObj = locationResource.LIST_PROVINCE.find((x) => x.id === province);
			provinceText = provinceObj ? provinceObj.name : "";
		}
		if (district && _.isNumber(district) && parseInt(district, 10) > 0) {
			const districtObj = locationResource.LIST_DISTRICT.find((x) => x.id === district);
			districtText = districtObj ? districtObj.name : "";
		}
		if (ward && _.isNumber(ward) && parseInt(ward, 10) > 0) {
			const wardObj = locationResource.LIST_WARD.find((x) => x.id === ward);
			wardText = wardObj ? wardObj.name : "";
		}
		let fullAddress = "";
		if (!address || address.length < 1) {
			fullAddress = `${wardText}, ${districtText}, ${provinceText}`;
			return fullAddress;
		}
		fullAddress = `${address}, ${wardText}, ${districtText}, ${provinceText}`;
		return fullAddress;
	}

	/** Get full string address by location object
	 * @param locationDataObj
	 * @output address full */
	getFullTextAddressByLocation(locationDataObj) {
		if (!locationDataObj) {
			return "";
		}
		let province = locationDataObj.province && locationDataObj.province.value ? locationDataObj.province.value.vi : "";
		let district = locationDataObj.district && locationDataObj.district.value ? locationDataObj.district.value.vi : "";
		let ward = locationDataObj.ward && locationDataObj.ward.value ? locationDataObj.ward.value.vi : "";
		const address = locationDataObj.address && locationDataObj.address.value ? locationDataObj.address.value.vi : "";
		if (province && _.isNumber(province) && parseInt(province, 10) > 0) {
			const provinceObj = locationResource.LIST_PROVINCE.find((x) => x.id === province);
			province = provinceObj ? provinceObj.name : "";
		}
		if (district && _.isNumber(district) && parseInt(district, 10) > 0) {
			const districtObj = locationResource.LIST_DISTRICT.find((x) => x.id === district);
			district = districtObj ? districtObj.name : "";
		}
		if (ward && _.isNumber(ward) && parseInt(ward, 10) > 0) {
			const wardObj = locationResource.LIST_WARD.find((x) => x.id === ward);
			ward = wardObj ? wardObj.name : "";
		}
		let fullAddress = "";
		if (!address || address.length < 1) {
			fullAddress = `${ward}, ${district}, ${province}`;
			return fullAddress;
		}
		fullAddress = `${address}, ${ward}, ${district}, ${province}`;
		return fullAddress;
	}

	/** Check have special characters in str */
	isHaveSpecialChars(str) {
		const regex = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
		return regex.test(str);
	}

	/** Get regex filter equal from string without lower or upper for MONGO
	 * @param str
	 * @output regex */
	getRegexStringEqualMongo(str) {
		if (this.isEmpty(str)) {
			return str;
		}
		return new RegExp(`^${str}$`, "i");
	}

	/** Get regex filter start with from string without lower or upper for MONGO
	 * @param str
	 * @output regex */
	getRegexStringStartWithMongo(str) {
		if (this.isEmpty(str)) {
			return str;
		}
		const isHave = this.isHaveSpecialChars(str);
		if (isHave) {
			return undefined;
		}
		return new RegExp(`^${str}`, "i");
	}

	/** Get regex filter contain with from string without lower or upper for MONGO
	 * @param str
	 * @output regex */
	getRegexStringContainWithMongo(str) {
		if (this.isEmpty(str)) {
			return str;
		}
		const isHave = this.isHaveSpecialChars(str);
		if (isHave) {
			return undefined;
		}
		return new RegExp(`${str}`, "i");
	}

	/** checkPasswordPolicy
	 * @param pwdPolicy object
	 * @param pwd string
	 * @output regex */
	checkPasswordPolicy(pwdPolicy = {}, pwd = '') {
		const result = {
			valid: true,
			messages: []
		};

		Object.keys(pwdPolicy).map(field => {
			switch (field) {
				case 'minLength':
					if (pwd.length < pwdPolicy.minLength) {
						result.valid = false;
						result.messages.push({
							vi: `Mật khẩu phải ít nhất ${pwdPolicy.minLength} kí tự`,
							en: `Password must be at least ${pwdPolicy.minLength} characters`
						});
					}
					break;
				case 'maxLength':
					if (pwd.length > pwdPolicy.maxLength) {
						result.valid = false;
						result.messages.push({
							vi: `Mật khẩu chỉ tối đa ${pwdPolicy.maxLength} kí tự`,
							en: `Maxinum password length is ${pwdPolicy.maxLength} characters`
						});
					}
					break;
				case 'number':
					if (!pwd.match(/\d+/g) && pwdPolicy['number']) {
						result.valid = false;
						result.messages.push({
							vi: `Mật khẩu phải chứa ký tự số`,
							en: `Password require at least one number`
						});
					}
					break;
				case 'upperCase':
					if (!/[A-Z]/.test(pwd) && pwdPolicy['upperCase']) {
						result.valid = false;
						result.messages.push({
							vi: `Mật khẩu phải chứa chữ in hoa`,
							en: `Password require at least one uppercase letter`
						});
					}
					break;
				case 'lowerCase':
					if (!/[a-z]/.test(pwd) && pwdPolicy['lowerCase']) {
						result.valid = false;
						result.messages.push({
							vi: `Mật khẩu phải chứa chữ in thường`,
							en: `Password require at least one lowercase letter`
						});
					}
					break;
				case 'specialChars':
					if (!/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(pwd) && pwdPolicy['specialChars']) {
						result.valid = false;
						result.messages.push({
							vi: `Mật khẩu phải chứa ký tự đặc biệt`,
							en: `Password require at least one symbol character`
						});
					}
					break;
				case 'blacklist':
					if (pwdPolicy[field].includes(pwd)) {
						result.valid = false;
						result.messages.push({
							vi: `Bạn cần đặt mật khẩu phức tạp hơn`,
							en: `You need to be set more complex password`
						});
					}
					break;
				default:
					return false;
			}
		});

		return result;
	}

	/** Check string is empty
	 * @param str string input
	 * @output boolean: true or false */
	stringIsEmpty(str) {
		return (!str || str.length === 0 );
	}

	/** Check string is blank
	 * @param str string input
	 * @output boolean: true or false */
	stringIsBlank(str) {
		return (!str || /^\s*$/.test(str));
	}

	/** Check string is blank
	 * @param str string input
	 * @output boolean: true or false */
	stringIsEmptyOrBlank(str) {
		return this.stringIsEmpty(str) || this.stringIsBlank(str);
	}

	/** Validation object with defining data type
	 * @param definedInput object
	 * @param paramInput object
	 * @param parentName
	 * @param resOut
	 * @output object {result: boolean, listFieldErr = [{key, message}]}*/
	validateParam(definedInput, paramInput = {}, parentName = "", resOut = {}) {
		parentName = this.isEmpty(parentName) ? "param" : parentName;
		/** Defined return object */
		const res = this.isEmpty(resOut) ? {
			result: true,
			message: "",
			listKeyFailed: []
		} : resOut;
		/** Valid defined input param */
		if (!definedInput) {
			res.result = false;
			res.message = "MISSING DEFINING INPUT";
			return res;
		}
		if (!paramInput) {
			res.result = false;
			res.message = "MISSING PARAM INPUT";
		}
		/** Foreach defined input obj -- check param input */
		const keys = Object.keys(definedInput);
		/** */
		if (keys.length < 1) {
			res.result = false;
			res.message = "MISSING DEFINING INPUT";
			return res;
		}
		keys.map((key) => {
			const definedProp = definedInput[key];
			const paramProp = key in paramInput ? paramInput[key] : undefined;
			/** Check required */
			if (definedProp.required && this.isEmpty(paramProp)) {
				res.result = false;
				res.message = "VALIDATION FAILED";
				res.listKeyFailed.push({key: `${parentName}.${key}`, err: `value empty`});
				return key;
			}
			/** Check data type */
			switch (definedProp.type) {
				case "array":
					if (!Array.isArray(paramProp) && !this.isEmpty(paramProp)) {
						res.result = false;
						res.message = "VALIDATION FAILED";
						res.listKeyFailed.push({key:`${parentName}.${key}`, err: `type is not ${definedProp.type}`});
					}
					if (definedProp.prop && typeof definedProp.prop === "object") {
						paramProp.map((item) => {
							this.validateParam(definedProp.prop, item, `${key}`, res);
						});
					}
					break;
				case "object":
					if (typeof paramProp !== definedProp.type && !this.isEmpty(paramProp)) {
						res.result = false;
						res.message = "VALIDATION FAILED";
						res.listKeyFailed.push({key:`${parentName}.${key}`, err: `type is not ${definedProp.type}`});
					}
					if (definedProp.prop && typeof definedProp.prop === "object") {
						this.validateParam(definedProp.prop, paramProp, `${key}`, res);
					}
					break;
				case "string": case "number": case "boolean":
					if (typeof paramProp !== definedProp.type && !this.isEmpty(paramProp)) {
						res.result = false;
						res.message = "VALIDATION FAILED";
						res.listKeyFailed.push({key:`${parentName}.${key}`, err: `type is not ${definedProp.type}`});
					}
					break;
			}
			return key;
		});
		return res;
	}

	/** Convert number to currency with locales */
	convertNumberToCurrency(valueNumber, locales = "vi-VN", currencyFormat = "vnd") {
		if (!valueNumber) {
			return "";
		}
		return valueNumber.toLocaleString(locales, { style: 'currency', currency: currencyFormat });
	}

	/** Wrapper message defined with values */
	putValueToMessage(msgDefinedObj, valObj) {
		if (!msgDefinedObj || !msgDefinedObj.MESSAGE) {
			return null;
		}
		if (!valObj) {
			return msgDefinedObj;
		}
		const langKeys = _.keys(msgDefinedObj.MESSAGE);
		langKeys.map((lang) => {
			try {
				msgDefinedObj.MESSAGE[lang] = eval(msgDefinedObj.MESSAGE[lang]);
			} catch (e) {
				msgDefinedObj.MESSAGE[lang] = msgDefinedObj.MESSAGE[lang];
			}
			return lang;
		});
		return msgDefinedObj;
	}

	timeBaseUUIDGenerator(length = 12) {
		let dateString = Date.now().toString(36);
		if(parseInt(length) > dateString.length){
			return ( dateString + randomize("A0", parseInt(length) - dateString.length)).toLocaleUpperCase();
		}
		return null;
	}

	/** Format amount (+) or (-)
	 * @param transType type of transaction
	 * @param value amount
	 * @output amount with sign */
	formatMoneyVal(currentUserPhone, senderPhone, receiverPhone, value, transType = null) {
		if(this.convertStringToPhone(currentUserPhone) === this.convertStringToPhone(senderPhone)) {
			return -value;
		} else if (this.convertStringToPhone(currentUserPhone) === this.convertStringToPhone(receiverPhone)){
			return value;
		}
		return value;
	}

	removeAccents(str) {
		return str.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '')
			.replace(/đ/g, 'd').replace(/Đ/g, 'D');
	}

	/** translate number to string
 * @param number number
 * @output translated number */
	numberToString(number) {
		const mangso = ['không','một','hai','ba','bốn','năm','sáu','bảy','tám','chín'];
		const dochangchuc = function (so, daydu) {
			let chuoi = "";
			const chuc = Math.floor(so/10);
			const donvi = so % 10;
			if (chuc > 1) {
				chuoi = " " + mangso[chuc] + " mươi";
				if (donvi === 1) {
					chuoi += " mốt";
				}
			} else if (chuc === 1) {
				chuoi = " mười";
				if (donvi == 1) {
					chuoi += " một";
				}
			} else if (daydu && donvi > 0) {
				chuoi = " lẻ";
			}
			if (donvi == 5 && chuc >= 1) {
				chuoi += " lăm";
			} else if (donvi > 1 || (donvi == 1 && chuc == 0)) {
				chuoi += " " + mangso[donvi];
			}
			return chuoi;
		}

		const docblock = function (so, daydu) {
			let chuoi = "";
			const tram = Math.floor(so/100);
			so = so % 100;
			if (daydu || tram > 0) {
				chuoi = " " + mangso[tram] + " trăm";
				chuoi += dochangchuc(so, true);
			} else {
				chuoi = dochangchuc(so, false);
			}
			return chuoi;
		}

		const dochangtrieu = function (so, daydu) {
			let chuoi = "";
			const trieu = Math.floor(so/1000000);
			so = so % 1000000;
			if (trieu > 0) {
				chuoi = docblock(trieu, daydu) + " triệu";
				daydu = true;
			}
			const nghin = Math.floor(so/1000);
			so = so % 1000;
			if (nghin > 0) {
				chuoi += docblock(nghin, daydu) + " nghìn";
				daydu = true;
			}
			if (so > 0) {
				chuoi += docblock(so, daydu);
			}
			return chuoi;
		}

		let so = number;
		if (so === 0) return ' ' + mangso[0];
		let chuoi = "", hauto = "";
		do {
			let ty = so % 1000000000;
			so = Math.floor(so/1000000000);
			if (so > 0) {
				chuoi = dochangtrieu(ty, true) + hauto + chuoi;
			} else {
				chuoi = dochangtrieu(ty, false) + hauto + chuoi;
			}
			hauto = " tỷ";
		} while (so > 0);
		return chuoi.trim();
	}
}

module.exports = FunctionHelper;
// const test = new FunctionHelper();
// console.log(test.putValueToMessage(msgObj, value));
// console.log(test.removeAllSpaceAndSpecialChars("\"\",\"*^\":[\"\",\"\"]"));
// console.log(test.getRegexStringStartWithMongo("&^&"))
