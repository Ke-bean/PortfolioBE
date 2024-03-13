"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const index_1 = require("../../src/index");
const { User } = require("../models/user");
describe("auth middleware", () => {
    let token;
    const exec = () => {
        return (0, supertest_1.default)(index_1.app).get("/blogs").set("x-auth-token", token).send({ title: "titleone" });
    };
    beforeEach(() => {
        token = new User().generateAuthToken();
    });
    it("should return 401 if no token is provided", async () => {
        token = "";
        const res = await exec();
        expect(res.status).toBe(401);
    });
    afterAll(async () => {
        await index_1.server.close();
    });
});
//# sourceMappingURL=auth.spec.js.map