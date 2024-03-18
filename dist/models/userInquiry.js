"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUserInquiry = exports.UserInquiry = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const joi_1 = __importDefault(require("joi"));
const userInquirySchema = new mongoose_1.default.Schema({
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
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
const UserInquiry = mongoose_1.default.model("UserInquiry", userInquirySchema);
exports.UserInquiry = UserInquiry;
function validateUserInquiry(userInquiry) {
    const schema = joi_1.default.object({
        name: joi_1.default.string().required(),
        email: joi_1.default.string().required().email(),
        message: joi_1.default.string().required()
    });
    return schema.validate(userInquiry);
}
exports.validateUserInquiry = validateUserInquiry;
//# sourceMappingURL=userInquiry.js.map