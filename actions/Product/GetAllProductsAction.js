import Product from "../../model/Product.js";

const GetAllProductsAction = async (request, response) => {
    const products = await Product.find();
    response.json(
        {
            status: 200,
            message: products,
        }
    );
};
export default GetAllProductsAction;
