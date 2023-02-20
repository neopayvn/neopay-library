const {StatusCodes} = require("http-status-codes");
/** Define status codes about business logic at file json */
const InternalDefaultCodes = require("./internal-codes/default.json");
const GatewayCodes = require("./gateway-codes/default.json");
const PaymentGatewayCodes = require("./gateway-codes/payment-gateway.json");
const State = require("./states/default.json");

module.exports = {
	HTTP_STATUS_CODES: StatusCodes,
	INTERNAL_CODES: InternalDefaultCodes,
	GATE_CODES: GatewayCodes,
	PAYMENT_GATEWAY_CODES: PaymentGatewayCodes,
	STATE: State
};
