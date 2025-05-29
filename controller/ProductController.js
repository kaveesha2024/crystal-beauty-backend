import CreateProductAction from "../actions/Product/CreateProductAction.js";

export const CreateProductController = async (request, response) => {
    await CreateProductAction(request, response);
}