const _ = require("lodash");

class SqlFunctionHelper {
	/** Get all entity model
	 * @output array entity model
	 * @param dbConnection
	 * @param filter object contains filter props
	 * @param sort object contains sort props
	 * @param select object contains props name need to get*/
	$getAll(dbConnection, sqlRequest = {}, sort = {}, select = {}) {
		return new Promise((res, rej) => {
			const dataReturn = [];
			sqlRequest.on("row", (columns) => {
				const mapObj = {};
				columns.forEach((col) => {
					if (_.isEmpty(col)) {
						return col;
					}
					mapObj[col.name] = col.value;
					dataReturn.push(mapObj);
				});
				res(dataReturn);
			});
			sqlRequest.on("done", (rowCount, more) => {
				console.log(rowCount);
				console.log(more);
			});
			dbConnection.execSql(sqlRequest);
		});
	}
}

module.exports = SqlFunctionHelper;
