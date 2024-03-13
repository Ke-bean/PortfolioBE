import request from "supertest";
import { app, server } from "../../src/index"; 
const { User } = require("../models/user")

describe("auth middleware", () =>{
    let token:any; 
    const exec = () => {
        return request(app).get("/blogs").set("x-auth-token", token).send({ title: "titleone" })
    }
    beforeEach(()=>{
        token = new User().generateAuthToken();
    })
    it("should return 401 if no token is provided", async () =>{
        token = ""
        const res = await exec();
        expect(res.status).toBe(401);
    })
      afterAll(async () => {
        await server.close(); 
    });
})