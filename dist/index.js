"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = exports.app = void 0;
const config = require("config");
const mongoose = require("mongoose");
const Joi = require("joi");
const users = require("./routes/users");
const auth = require("./routes/auth");
const express = require("express");
const cors = require('cors');
const swaggerDocumentation = require("./helper/documentation");
// const  swaggerDoc = require("./utils/swagger");
const swaggerDoc = require("swagger-ui-express");
const blogs_1 = __importDefault(require("./routes/blogs"));
exports.app = express();
exports.app.use('/1709249851955-Promies Js-img.jpg', express.static("uploads"));
exports.app.use(cors());
if (!config.get("jwtPrivateKey")) {
    console.error("Fatal Error: JwtPrivateKey is not defined.");
    process.exit(1);
}
exports.app.use(express.json());
exports.app.use("/documentation", swaggerDoc.serve);
exports.app.use("/documentation", swaggerDoc.setup(swaggerDocumentation));
mongoose.Promise = Promise;
const db = config.get("db");
mongoose.connect(db);
mongoose.connection.on("connected", () => console.log(`connected to ${db}`));
// mongoose.connection.on("error", (error: Error) => console.log(error));
exports.app.use(express.json());
exports.app.use("/users", users);
exports.app.use("/auth", auth);
exports.app.use("/blogs", blogs_1.default);
const port = process.env.PORT || 3000;
exports.server = exports.app.listen(port, () => console.log(`listening on port ${port}...`));
// export default app;
module.exports = { server: exports.server, app: exports.app };
//# sourceMappingURL=index.js.map