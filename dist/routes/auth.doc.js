const loginUser = {
    tags: ["Authentication"],
    description: "Login user",
    requestBody: {
        required: true,
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        email: { type: "string", format: "email" },
                        password: { type: "string", format: "password" }
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
                            token: { type: "string" }
                        }
                    }
                }
            }
        },
        400: {
            description: "Bad Request"
        },
        401: {
            description: "Unauthorized"
        },
        500: {
            description: "Internal Server Error"
        }
    }
};
module.exports = {
    "/auth": {
        post: loginUser,
    }
};
//# sourceMappingURL=auth.doc.js.map