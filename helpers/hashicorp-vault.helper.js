const axios = require('axios');
class HashicorpVaultHelper {
	async getSecretData(endpoint, apiVersion, roleId, secretId, secretPath) {
		const vaulAuthURI = `${endpoint}/${apiVersion}/auth/approle/login`;
		const vaulGetSecretURI = `${endpoint}/${apiVersion}/${secretPath}`;
		const vaultRequestHeader = {
			"Content-Type": "application/json"
		};
		const vaultAuthRequestData = {role_id: roleId, secret_id: secretId};
		try { 
			const approveLogin = await axios.request({
				method: "post",
				url: vaulAuthURI,
				data: JSON.stringify(vaultAuthRequestData),
				headers: vaultRequestHeader,
			});
			vaultRequestHeader["X-Vault-Token"] = approveLogin?.data?.auth?.client_token || "";
			const secretData = await axios.request({
				method: "get",
				url: vaulGetSecretURI,
				headers: vaultRequestHeader,
			});
			return {
				status: "SUCCESS", 
				data: secretData?.data?.data?.data || {},
			};
		}
		catch(error) {
			return {
				status: "FAILED", 
				data: {},
				error: error?.response?.data || error?.message
			}
		}
	}
}

module.exports = HashicorpVaultHelper;