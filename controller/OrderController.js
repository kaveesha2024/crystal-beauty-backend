import GetAllOrdersAction from "../actions/Order/GetAllOrdersAction.js";
import GetOrderByUserIdAction from "../actions/Order/GetOrderByUserIdAction.js";
import PlaceOrderAction from "../actions/Order/PlaceOrderAction.js";
import DeleteOrderAction from "../actions/Order/DeleteOrderAction.js";

export const PlaceOrder = async (req, res) => {
  await PlaceOrderAction(req, res);
};
export const GetAllOrders = async (req, res) => {
  await GetAllOrdersAction(req, res);
};
export const GetOrderByUserId = async (req, res) => {
  await GetOrderByUserIdAction(req, res);
};
export const DeleteOrder = async (req, res) => {
    await DeleteOrderAction(req, res)
}