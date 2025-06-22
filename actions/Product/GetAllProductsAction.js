import Product from "../../model/Product.js";

const GetAllProductsAction = async (request, response) => {
    const products = await Product.find().sort({createdAt: -1});
    response.json(
        {
            status: 200,
            message: products,
        }
    );
};
export default GetAllProductsAction;
