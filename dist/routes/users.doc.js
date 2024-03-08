const getUser = {
    tags: ["Users"],
    description: "Get current user",
    security: [{ "BearerAuth": [] }],
    responses: {
        200: {
            description: "OK",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            _id: { type: "string" },
                            fullName: { type: "string" },
                            email: { type: "string" }
                        }
                    }
                }
            }
        },
        401: {
            description: "Unauthorized"
        },
        500: {
            description: "Internal Server Error"
        }
    }
};
const createUser = {
    tags: ["Users"],
    description: "Create a new user",
    requestBody: {
        required: true,
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        fullName: { type: "string" },
                        email: { type: "string", format: "email" },
                        password: { type: "string", format: "password" },
                        confirmPassword: { type: "string", format: "password" }
                    }
                }
            },
        }
    },
    responses: {
        200: {
            description: "OK",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            _id: { type: "string" },
                            fullName: { type: "string" },
                            email: { type: "string" }
                        }
                    }
                }
            }
        },
        400: {
            description: "Bad Request"
        },
        500: {
            description: "Internal Server Error"
        }
    }
};
module.exports = {
    "/users/me": {
        get: getUser,
    },
    "/users": {
        post: createUser,
    }
};
//# sourceMappingURL=users.doc.js.map