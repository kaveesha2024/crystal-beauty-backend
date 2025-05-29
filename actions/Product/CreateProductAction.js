import { isAdmin, isBodyNull, isUserNull } from "../../utility/refactor/refactor.js";

const CreateProductAction = async (request, response) => {
    if (isBodyNull(request.body)||isUserNull(request.user)||!isAdmin(request.user?.role)){
        response.json({
            status: 401,
            message: "Unauthorized",
        });
        return;
    }

};
export default CreateProductAction;