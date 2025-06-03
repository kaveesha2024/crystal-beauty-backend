import GetAllOrdersAction from "../actions/Order/GetAllOrdersAction.js";
import PlaceOrderAction from "../actions/Order/PlaceOrderAction.js";

export const PlaceOrder = async (req, res) => {
  await PlaceOrderAction(req, res);
};
export const GetAllOrders = async (req, res) => {
  await GetAllOrdersAction(req, res);
};