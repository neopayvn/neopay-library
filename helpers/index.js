const MapperHelper = require("./mapper.helper");
const MongoFuncHelper = require("./mongo-function.helper");
const RequestHelper = require("./request.helper");
const ResponseHelper = require("./response.helper");
const FunctionHelper = require("./function.helper");
const EncryptHelper = require("./encrypt.helper");
const SqlFuncHelper = require("./sql-function.helper");
const LoggerHelper = require("./logger.helper");

module.exports = {
	MapperHelper: new MapperHelper(),
	MongoFuncHelper: new MongoFuncHelper(),
	RequestHelper: new RequestHelper(),
	ResponseHelper: new ResponseHelper(),
	FunctionHelper: new FunctionHelper(),
	EncryptHelper: new EncryptHelper(),
	SqlFuncHelper: new SqlFuncHelper(),
	LoggerHelper: new LoggerHelper(),
};
