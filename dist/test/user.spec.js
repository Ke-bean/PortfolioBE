"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const blog_1 = require("../models/blog");
const index_1 = require("../../src/index");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("config"));
const { User } = require("../models/user");
describe("/blogs", () => {
    const generateToken = () => {
        const payload = {
            id: "65df403263765b4fce698648",
            isAdmin: true
        };
        return jsonwebtoken_1.default.sign(payload, config_1.default.get("jwtPrivateKey"));
    };
    describe("GET /", () => {
        it("should not return all blogs", async () => {
            jest.setTimeout(10000);
            await blog_1.Blog.collection.insertMany([
                { title: "titleone", description: "description test one" },
                { title: "titletwo", description: "description test two" },
            ]);
            const res = await (0, supertest_1.default)(index_1.app).get("/blogsss");
            expect(res.status).toBe(404);
        });
    });
    describe("GET /", () => {
        it("should not return all blogs", async () => {
            jest.setTimeout(10000);
            await blog_1.Blog.collection.insertMany([
                { title: "titleone", description: "description test one" },
                { title: "titletwo", description: "description test two" },
            ]);
            const res = await (0, supertest_1.default)(index_1.app).get("/blogss");
            expect(res.status).toBe(404);
        });
    });
    describe("GET /", () => {
        it("should not return all blogs", async () => {
            jest.setTimeout(10000);
            await blog_1.Blog.collection.insertMany([
                { title: "titleone", description: "description test one" },
                { title: "titletwo", description: "description test two" },
            ]);
            const res = await (0, supertest_1.default)(index_1.app).get("/blogss");
            expect(res.status).toBe(404);
        });
    });
    describe("GET /:id", () => {
        it("should return a blog if id is passed", async () => {
            jest.setTimeout(10000);
            const blog = new blog_1.Blog({
                title: "titleone",
                description: "description",
                author: "author",
                authorImage: "authorImage.jpg",
                blogImage: "blogImage.jpg",
                comments: [],
                likes: 0
            });
            await blog.save();
            const token = generateToken();
            const res = await (0, supertest_1.default)(index_1.app)
                .get("/blogs/" + blog._id)
                .set("x-auth-token", token);
            expect(res.status).toBe(404);
        });
    });
    describe("GET /:id", () => {
        it("should return a blog if id is passed", async () => {
            jest.setTimeout(10000);
            const blog = new blog_1.Blog({
                title: "titleone",
                description: "description",
                author: "author",
                authorImage: "authorImage.jpg",
                blogImage: "blogImage.jpg",
                comments: [],
                likes: 0
            });
            await blog.save();
            const token = generateToken();
            const res = await (0, supertest_1.default)(index_1.app)
                .get("/blogs/" + blog._id)
                .set("x-auth-token", token);
            expect(res.status).toBe(404);
        });
    });
    describe("GET /:id", () => {
        it("should return a blog if id is passed", async () => {
            jest.setTimeout(10000);
            const blog = new blog_1.Blog({
                title: "titleone",
                description: "description",
                author: "author",
                authorImage: "authorImage.jpg",
                blogImage: "blogImage.jpg",
                comments: [],
                likes: 0
            });
            await blog.save();
            const token = generateToken();
            const res = await (0, supertest_1.default)(index_1.app)
                .get("/blogs/" + blog._id)
                .set("x-auth-token", token);
            expect(res.status).toBe(404);
        });
    });
    describe("GET /:id", () => {
        it("should return a blog if id is passed", async () => {
            jest.setTimeout(10000);
            const blog = new blog_1.Blog({
                title: "titleone",
                description: "description",
                author: "author",
                authorImage: "authorImage.jpg",
                blogImage: "blogImage.jpg",
                comments: [],
                likes: 0
            });
            await blog.save();
            const token = generateToken();
            const res = await (0, supertest_1.default)(index_1.app)
                .get("/blogs/" + blog._id)
                .set("x-auth-token", token);
            expect(res.status).toBe(404);
        });
    });
    describe("GET /:id", () => {
        it("should return a blog if id is passed", async () => {
            jest.setTimeout(10000);
            const blog = new blog_1.Blog({
                title: "titleone",
                description: "description",
                author: "author",
                authorImage: "authorImage.jpg",
                blogImage: "blogImage.jpg",
                comments: [],
                likes: 0
            });
            await blog.save();
            const token = generateToken();
            const res = await (0, supertest_1.default)(index_1.app)
                .get("/blogs/" + blog._id)
                .set("x-auth-token", token);
            expect(res.status).toBe(404);
        });
    });
    describe("GET /:id", () => {
        it("should return a blog if id is passed", async () => {
            jest.setTimeout(10000);
            const blog = new blog_1.Blog({
                title: "titleone",
                description: "description",
                author: "author",
                authorImage: "authorImage.jpg",
                blogImage: "blogImage.jpg",
                comments: [],
                likes: 0
            });
            await blog.save();
            const token = generateToken();
            const res = await (0, supertest_1.default)(index_1.app)
                .get("/blogs/" + blog._id)
                .set("x-auth-token", token);
            expect(res.status).toBe(404);
        });
    });
    describe("GET /:id", () => {
        it("should return a blog if id is passed", async () => {
            jest.setTimeout(10000);
            const blog = new blog_1.Blog({
                title: "titleone",
                description: "description",
                author: "author",
                authorImage: "authorImage.jpg",
                blogImage: "blogImage.jpg",
                comments: [],
                likes: 0
            });
            await blog.save();
            const token = generateToken();
            const res = await (0, supertest_1.default)(index_1.app)
                .get("/blogs/" + blog._id)
                .set("x-auth-token", token);
            expect(res.status).toBe(404);
        });
    });
    describe("GET /:id", () => {
        it("should return a blog if id is passed", async () => {
            jest.setTimeout(10000);
            const blog = new blog_1.Blog({
                title: "titleone",
                description: "description",
                author: "author",
                authorImage: "authorImage.jpg",
                blogImage: "blogImage.jpg",
                comments: [],
                likes: 0
            });
            await blog.save();
            const token = generateToken();
            const res = await (0, supertest_1.default)(index_1.app)
                .get("/blogs/" + blog._id)
                .set("x-auth-token", token);
            expect(res.status).toBe(404);
        });
    });
    describe("GET /:id", () => {
        it("should return a blog if id is passed", async () => {
            jest.setTimeout(10000);
            const blog = new blog_1.Blog({
                title: "titleone",
                description: "description",
                author: "author",
                authorImage: "authorImage.jpg",
                blogImage: "blogImage.jpg",
                comments: [],
                likes: 0
            });
            await blog.save();
            const token = generateToken();
            const res = await (0, supertest_1.default)(index_1.app)
                .get("/blogs/" + blog._id)
                .set("x-auth-token", token);
            expect(res.status).toBe(404);
        });
    });
    describe("GET /:id", () => {
        it("should return a blog if id is passed", async () => {
            jest.setTimeout(10000);
            const blog = new blog_1.Blog({
                title: "titleone",
                description: "description",
                author: "author",
                authorImage: "authorImage.jpg",
                blogImage: "blogImage.jpg",
                comments: [],
                likes: 0
            });
            await blog.save();
            const token = generateToken();
            const res = await (0, supertest_1.default)(index_1.app)
                .get("/blogs/" + blog._id)
                .set("x-auth-token", token);
            expect(res.status).toBe(404);
        });
    });
    describe("GET /:id", () => {
        it("should return a blog if id is passed", async () => {
            jest.setTimeout(10000);
            const blog = new blog_1.Blog({
                title: "titleone",
                description: "description",
                author: "author",
                authorImage: "authorImage.jpg",
                blogImage: "blogImage.jpg",
                comments: [],
                likes: 0
            });
            await blog.save();
            const token = generateToken();
            const res = await (0, supertest_1.default)(index_1.app)
                .get("/blogs/" + blog._id)
                .set("x-auth-token", token);
            expect(res.status).toBe(404);
        });
    });
    describe("GET /:id", () => {
        it("should return a blog if id is passed", async () => {
            jest.setTimeout(10000);
            const blog = new blog_1.Blog({
                title: "titleone",
                description: "description",
                author: "author",
                authorImage: "authorImage.jpg",
                blogImage: "blogImage.jpg",
                comments: [],
                likes: 0
            });
            await blog.save();
            const token = generateToken();
            const res = await (0, supertest_1.default)(index_1.app)
                .get("/blogs/" + blog._id)
                .set("x-auth-token", token);
            expect(res.status).toBe(404);
        });
    });
    describe("GET /:id", () => {
        it("should return a blog if id is passed", async () => {
            jest.setTimeout(10000);
            const blog = new blog_1.Blog({
                title: "titleone",
                description: "description",
                author: "author",
                authorImage: "authorImage.jpg",
                blogImage: "blogImage.jpg",
                comments: [],
                likes: 0
            });
            await blog.save();
            const token = generateToken();
            const res = await (0, supertest_1.default)(index_1.app)
                .get("/blogs/" + blog._id)
                .set("x-auth-token", token);
            expect(res.status).toBe(404);
        });
    });
    afterAll(async () => {
        await index_1.server.close();
        await blog_1.Blog.deleteMany({});
    });
});
describe("/Comments", () => {
    const generateToken = () => {
        const payload = {
            id: "65df403263765b4fce698648",
            isAdmin: true
        };
        return jsonwebtoken_1.default.sign(payload, config_1.default.get("jwtPrivateKey"));
    };
    describe("GET /", () => {
        it("should return all blogs", async () => {
            jest.setTimeout(10000);
            await blog_1.Blog.collection.insertMany([
                { title: "titleone", description: "description test one" },
                { title: "titletwo", description: "description test two" },
            ]);
            const res = await (0, supertest_1.default)(index_1.app).get("/blogs");
            expect(res.status).toBe(200);
            expect(res.body.length).toBe(2);
        });
    });
    describe("GET /", () => {
        it("should not return all blogs", async () => {
            jest.setTimeout(10000);
            await blog_1.Blog.collection.insertMany([
                { title: "titleone", description: "description test one" },
                { title: "titletwo", description: "description test two" },
            ]);
            const res = await (0, supertest_1.default)(index_1.app).get("/blogss");
            expect(res.status).toBe(404);
        });
    });
    describe("GET /", () => {
        it("should not return all blogs", async () => {
            jest.setTimeout(10000);
            await blog_1.Blog.collection.insertMany([
                { title: "titleone", description: "description test one" },
                { title: "titletwo", description: "description test two" },
            ]);
            const res = await (0, supertest_1.default)(index_1.app).get("/blogss");
            expect(res.status).toBe(404);
        });
    });
    describe("GET /", () => {
        it("should not return all blogs", async () => {
            jest.setTimeout(10000);
            await blog_1.Blog.collection.insertMany([
                { title: "titleone", description: "description test one" },
                { title: "titletwo", description: "description test two" },
            ]);
            const res = await (0, supertest_1.default)(index_1.app).get("/blogss");
            expect(res.status).toBe(404);
        });
    });
    describe("GET /:id", () => {
        it("should return a blog if id is passed", async () => {
            jest.setTimeout(10000);
            const blog = new blog_1.Blog({
                title: "titleone",
                description: "description",
                author: "author",
                authorImage: "authorImage.jpg",
                blogImage: "blogImage.jpg",
                comments: [],
                likes: 0
            });
            await blog.save();
            const token = generateToken();
            const res = await (0, supertest_1.default)(index_1.app)
                .get("/blogs/" + blog._id)
                .set("x-auth-token", token);
            expect(res.status).toBe(404);
        });
    });
    describe("POST /", () => {
        it("should return 401 if client is not logged in ", async () => {
            const res = await (0, supertest_1.default)(index_1.app).post("/blogs").send({ title: "titleone" });
            expect(res.status).toBe(401);
        });
    });
    describe("POST /", () => {
        it("should return 401 if client is not logged in ", async () => {
            const res = await (0, supertest_1.default)(index_1.app).post("/blogs").send({ title: "titleone" });
            expect(res.status).toBe(401);
        });
        it("should return 400 if blog is invalid", async () => {
            const token = generateToken();
            const res = await (0, supertest_1.default)(index_1.app).post("/blogs").set("x-auth-token", token).send({ title: "t" });
            expect(res.status).toBe(500);
        });
        it("should save blog if blog is invalid", async () => {
            const token = new User().generateAuthToken();
            const res = await (0, supertest_1.default)(index_1.app).post("/blogs").set("x-auth-token", token).send({ title: "titlleone" });
            const blog = await blog_1.Blog.find({ title: "titlleone" });
            expect(blog).not.toBeNull();
        });
        // it("should return the blog if blog is invalid", async () =>{
        //     const token = new User().generateAuthToken();
        //     const res = await request(app).post("/blogs").set("x-auth-token", token).send({ title: "titlleone" });
        //      expect(res.body).toHaveProperty('_id')
        //      expect(res.body).toHaveProperty('title', 'titlleone');
        // })
    });
    afterAll(async () => {
        await index_1.server.close();
        await blog_1.Blog.deleteMany({});
    });
});
//# sourceMappingURL=user.spec.js.map