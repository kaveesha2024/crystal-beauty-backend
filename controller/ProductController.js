import CreateProductAction from "../actions/Product/CreateProductAction.js";
import getAllUsersAction from "../actions/User/GetAllUsersAction.js";
import getAllProductsAction from "../actions/Product/GetAllProductsAction.js";

export const CreateProductController = async (request, response) => {
    await CreateProductAction(request, response);
}
export const getAllProducts = async (req, res) => {
    await getAllProductsAction(req, res);
}