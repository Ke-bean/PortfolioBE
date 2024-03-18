"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userInquiry_1 = require("../models/userInquiry");
const router = express_1.default.Router();
router.post('/', async (req, res) => {
    const { error } = (0, userInquiry_1.validateUserInquiry)(req.body);
    if (error)
        return res.status(400).send(error.details[0].message);
    try {
        const userInquiry = new userInquiry_1.UserInquiry({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        });
        await userInquiry.save();
        res.status(201).json("User inquiry sent successfully!");
    }
    catch (error) {
        console.error("Error sending user inquiry:", error);
        res.status(500).send("Internal Server Error");
    }
});
module.exports = router;
//# sourceMappingURL=userInquiry.js.map