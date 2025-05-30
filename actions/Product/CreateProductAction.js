import { isAdmin, isBodyNull, isUserNull } from "../../utility/reUsableFunctions/reUsableFunctions.js";
import random from "../../utility/random/random.js";
import Product from "../../model/Product.js";

const CreateProductAction = async (request, response) => {
    if (isBodyNull(request.body)||isUserNull(request.user)||!isAdmin(request.user?.role)){
        response.json({
            status: 401,
            message: "Unauthorized",
        });
        return;
    }
    const { productName,labelledPrice: labelledPriceString,price:PriceString,stock:stockString,alterNames: alterNamesString,description,brand,warranty,images } = request.body;
    if (productName===''||labelledPriceString===''||PriceString===''||stockString===''||alterNamesString===''||description===''||brand===''||warranty===' '){
        response.json({
            status: 400,
            message: "Bad Request",
        });
        return;
    }
    const productId = 'CBC' + random(10);
    const labelledPrice = Number(labelledPriceString);
    const price = Number(PriceString);
    const stock = Number(stockString);
    const discount = labelledPrice - price;
    const alterNames = alterNamesString.split('/');
    const isAvailable = stock > 0;

    const newProduct = new Product({
        productId,
        productName,
        labelledPrice,
        price,
        discount,
        stock,
        warranty,
        alterNames,
        description,
        brand,
        isAvailable,
        images,
    });
    try {
        const res = await newProduct.save();
        if (res){
            response.json({
                status: 200,
                message: "Product created",
            });
            return;
        }
        response.json(
            {
                status: 500,
                message: "Something went wrong. Please try again later.",
            }
        )
    }catch (e){
        response.json(
            {
                status: 500,
                message: "Internal Server Error",
            }
        )
    }
};
export default CreateProductAction;