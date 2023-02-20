const _ = require("lodash");
const crypto = require("crypto");
const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY || "12345678901234567890123456789012"; // Must be 256 bits (32 characters)
const IV_KEY = process.env.IV_KEY || "0123456789012345";

class EncryptHelper {
	encrypt(text) {
		const cipher = crypto.createCipher("aes-256-cbc", ENCRYPTION_KEY);
		let crypt = cipher.update(text,"utf8","hex");
		crypt += cipher.final("hex");
		return crypt;
	}

	decrypt(text) {
		if (text === null || typeof text === "undefined") {return text;}
		let decipher = crypto.createDecipher("aes-256-cbc", ENCRYPTION_KEY);
		let dec = decipher.update(text,"hex","utf8");
		dec += decipher.final("utf8");
		return dec;
	}

	encryptIv(text) {
		const iv = Buffer.from(IV_KEY, "utf8");
		let cipher = crypto.createCipheriv("aes-256-cbc", ENCRYPTION_KEY, iv);
		let encrypted = cipher.update(text);
		encrypted = Buffer.concat([encrypted, cipher.final()]);
		return iv.toString("hex") + ":" + encrypted.toString("hex");
	}

	decryptIv(text) {
		if (!text) {
			return text;
		}
		let textParts = text.split(":");
		let iv = Buffer.from(textParts.shift(), "hex");
		let encryptedText = Buffer.from(textParts.join(":"), "hex");
		let decipher = crypto.createDecipheriv("aes-256-cbc", Buffer.from(ENCRYPTION_KEY), iv);
		let decrypted = decipher.update(encryptedText);
		decrypted = Buffer.concat([decrypted, decipher.final()]);
		return decrypted.toString();
	}

	encryptBase64(text) {
		if (_.isEmpty(text)) {
			return null;
		}
		return Buffer.from(text).toString("base64");
	}

	decryptBase64(text) {
		if (_.isEmpty(text)) {
			return null;
		}
		return Buffer.from(text, "base64");
	}

	encryptBase64Object(obj) {
		if (_.isEmpty(obj)) {
			return null;
		}
		let objJsonStr = JSON.stringify(obj);
		return Buffer.from(objJsonStr).toString("base64");
	}

	decryptBase64Object(obj) {
		if (_.isEmpty(obj)) {
			return null;
		}
		try {
			return JSON.parse(Buffer.from(obj, "base64"));
		} catch (e) {
			console.log('invalid object decryptBase64Object');
			return null;
		}

	}

	desEcbEncrypt(plaintext, key) {
		key = new Buffer(key.substr(0, 8));
		const cipher = crypto.createCipheriv("des-ecb", key, new Buffer(0));
		cipher.setAutoPadding(true);
		let ciph = cipher.update(plaintext, "utf8", "base64");
		ciph += cipher.final("base64");
		return ciph;
	}

	desEcbDecrypt(plaintext, key) {
		try {
			key = new Buffer(key.substr(0, 8));
			const cipher = crypto.createDecipheriv("des-ecb", key, new Buffer(0));
			cipher.setAutoPadding(true);
			let ciph = cipher.update(plaintext, "base64", "utf8");
			ciph += cipher.final("utf8");
			return ciph;
		} catch (e) {
			return false;
		}
	}

	hashMD5(plaintext) {
		const md5sum = crypto.createHash('md5');
		const res = md5sum.update(plaintext).digest('hex');
		return res;
	}

	hashSHA256(plaintext) {
		const md5sum = crypto.createHash('sha256');
		const res = md5sum.update(plaintext).digest('hex');
		return res;
	}
}

module.exports = EncryptHelper;

