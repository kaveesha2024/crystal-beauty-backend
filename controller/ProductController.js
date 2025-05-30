import CreateProductAction from "../actions/Product/CreateProductAction.js";
import GetAllProductsAction from "../actions/Product/GetAllProductsAction.js";
import UpdateProductAction from "../actions/Product/UpdateProductAction.js";
import DeleteProductAction from "../actions/Product/DeleteProductAction.js";

export const CreateProductController = async (request, response) => {
    await CreateProductAction(request, response);
}
export const GetAllProductsController = async (req, res) => {
    await GetAllProductsAction(req, res);
}
export const UpdateProductController = async (req, res) => {
    await UpdateProductAction(req, res);
}
export const DeleteProductController = async (req, res) => {
    await DeleteProductAction(req, res);
}