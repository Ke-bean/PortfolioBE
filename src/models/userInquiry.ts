import mongoose from "mongoose";
import Joi from "joi";

const userInquirySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    message: {
        type: String,
        required: true,
    }
});

const UserInquiry = mongoose.model("UserInquiry", userInquirySchema);

function validateUserInquiry(userInquiry: any) {
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        message: Joi.string().required()
    });
    return schema.validate(userInquiry);
}

export { UserInquiry, validateUserInquiry };
