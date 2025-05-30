import { isAdmin, isBodyNull, isParamsNull, isUserNull } from "../../utility/reUsableFunctions/reUsableFunctions.js";
import product from "../../model/Product.js";
import Product from "../../model/Product.js";

const UpdateProductAction = async (request, response) => {
    if (isParamsNull(request.query?.productId)) {
        response.json({
            status: 400,
            message: "Bad Request",
        });
        return;
    }
    if (!isAdmin(request.user?.role)||isBodyNull(request.body)||isUserNull(request.user)) {
        response.json({
            status: 401,
            message: "Unauthorized",
        });
        return;
    }
    const { productName,labelledPrice: oldLabelledPrice,price: oldPrice,stock: oldStock,alterNames: oldAlterNames,description,brand,warranty,images,isAvailable } = request.body;
    const labelledPrice = Number(oldLabelledPrice);
    const price = Number(oldPrice);
    const stock = Number(oldStock);
    const alterNames = oldAlterNames.split('/');
    const discount = labelledPrice - price;

    const res = await Product.updateOne({productId: request.query?.productId}, {
        productName,
        labelledPrice,
        price,
        discount,
        stock,
        warranty,
        alterNames,
        description,
        brand,
        images,
        isAvailable,
    });
    if (res){
        response.json({
            status: 200,
            message: "Product updated",
        });
        return;
    }
    response.json(
        {
            status: 500,
            message: "Something went wrong. Please try again later.",
        }
    )

};
export default UpdateProductAction;