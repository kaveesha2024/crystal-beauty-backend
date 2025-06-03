import PlaceOrderAction from "../actions/Order/PlaceOrderAction.js";

export const PlaceOrder = async (req, res) => {
  await PlaceOrderAction(req, res);
};