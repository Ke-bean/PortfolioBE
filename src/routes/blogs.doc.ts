const allBlogs = {
    tags:["Blogs"],
    description: "List of all blogs",
    security: [{ "bearerAuth": [] as string[] }, {"adminAuth": [] as string[]}],
    responses: {
        200: {
            description: "OK",
            content: {
                "application/json":{
                    schema:{
                        type: "object",
                        example:{
                            count: 1,
                            blog: [
                                {
                                    "_id": "65e11c7b47dd9c974d28beb6",
                                    "title": "Test",
                                    "description": "new test",
                                    "author": "kebean",
                                    "postedDate": "2024-03-01T00:08:27.946Z",
                                    "authorImage": "uploads\\1709251707856-Kebean.jpg",
                                    "blogImage": "uploads\\1709251707871-Promies Js-img.jpg",
                                    "likes": 0,
                                    "likeBy":[] as string[],
                                    "comments": [] as string[],
                                    "__v": 0
                                }
                            ]
                        }
                    }
                }
            }
        },
        400: {
            description: "Bad Request"
        }
    }
};

const createBlogs = {
    tags:["Blogs"],
    description: "Create blog",
    security: [{ "bearerAuth": [] as string[] }, {"adminAuth": [] as string[]}],
    requestBody:{
        required: true,
        content:{
            "multipart/form-data":{ 
                schema: {
                    type: "object",
                    properties: {
                        title: {
                            type: "string",
                            description: "Title of blog",
                            example: "Javascript ES6"
                        },
                        description: {
                            type: "string",
                            description: "Actual content of blog",
                            example: "Javascript ES6 is a new version of javascript with enhanced and cool features"
                        },
                        author: {
                            type: "string",
                            description: "Blog author",
                            example: "kebean"
                        },
                        authorImage: {
                            type: "string",
                            format: "binary",
                            description: "Author image"
                        },
                        blogImage: {
                            type: "string",
                            format: "binary", 
                            description: "Blog image"
                        },
                    }
                }
            },
        }
    },
    responses: {
        201: {
            description: "Created",
            content: {
                "application/json":{
                    schema:{
                        type: "object",
                        example:{
                            "_id": "65e11c7b47dd9c974d28beb6",
                            "title": "Test",
                            "description": "new test",
                            "author": "kebean",
                            "postedDate": "2024-03-01T00:08:27.946Z",
                            "authorImage": "uploads\\1709251707856-Kebean.jpg",
                            "blogImage": "uploads\\1709251707871-Promies Js-img.jpg",
                            "likes": 0,
                            "likeBy": [] as string[],
                            "comments": [] as string[],
                            "__v": 0
                        }
                    }
                }
            }
        },
        400: {
            description: "Bad Request"
        }
    }
};



const deleteBlog = {
    tags:["Blogs"],
    description: "Delete a blog by ID",
    parameters: [
        {
            in: "path",
            name: "id",
            required: true,
            description: "ID of the blog to delete",
            schema: {
                type: "string",
                example: "65e11c7b47dd9c974d28beb6"
            }
        }
    ],
    security: [{ "bearerAuth": [] as string[] }, {"adminAuth": [] as string[]}],
    responses: {
        200: {
            description: "OK",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        example: {
                            "_id": "65e11c7b47dd9c974d28beb6",
                            "title": "Test",
                            "description": "new test",
                            "author": "kebean",
                            "postedDate": "2024-03-01T00:08:27.946Z",
                            "authorImage": "uploads\\1709251707856-Kebean.jpg",
                            "blogImage": "uploads\\1709251707871-Promies Js-img.jpg",
                            "likes": 0,
                            "likeBy": [] as string[],
                            "comments": [] as string[],
                            "__v": 0
                        }
                    }
                }
            }
        },
        400: {
            description: "Bad Request"
        }
    }
};

const updateBlog = {
    tags:["Blogs"],
    description: "Update a blog by ID",
    parameters: [
        {
            in: "path",
            name: "id",
            required: true,
            description: "ID of the blog to update",
            schema: {
                type: "string",
                example: "65e11c7b47dd9c974d28beb6"
            }
        }
    ],
    requestBody: {
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        title: {
                            type: "string",
                            description: "Title of blog",
                            example: "Updated Title"
                        },
                        description: {
                            type: "string",
                            description: "Content of the blog",
                            example: "Updated content of the blog"
                        }
                    }
                }
            }
        }
    },
    security: [{ "bearerAuth": [] as string[] }, {"adminAuth": [] as string[]}],
    responses: {
        200: {
            description: "OK",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        example: {
                            "_id": "65e11c7b47dd9c974d28beb6",
                            "title": "Updated Title",
                            "description": "Updated content of the blog",
                            "author": "kebean",
                            "postedDate": "2024-03-01T00:08:27.946Z",
                            "authorImage": "uploads\\1709251707856-Kebean.jpg",
                            "blogImage": "uploads\\1709251707871-Promies Js-img.jpg",
                            "likes": 0,
                            "likeBy": [] as string[],
                            "comments": [] as string[],
                            "__v": 0
                        }
                    }
                }
            }
        },
        400: {
            description: "Bad Request"
        }
    }
};

const likeBlog = {
    tags:["Blogs"],
    description: "Like a blog by ID",
    parameters: [
        {
            in: "path",
            name: "id",
            required: true,
            description: "ID of the blog to like",
            schema: {
                type: "string",
                example: "65e11c7b47dd9c974d28beb6"
            }
        }
    ],
    security: [{ "bearerAuth": [] as string[] }, {"adminAuth": [] as string[]}],
    responses: {
        200: {
            description: "OK"
        },
        500: {
            description: "Internal Server Error"
        }
    }
};

const addCommentToBlog = {
    tags:["Blogs"],
    description: "Add a comment to a blog by ID",
    parameters: [
        {
            in: "path",
            name: "id",
            required: true,
            description: "ID of the blog to comment on",
            schema: {
                type: "string",
                example: "65e11c7b47dd9c974d28beb6"
            }
        }
    ],
    security: [{ "bearerAuth": [] as string[] }, {"adminAuth": [] as string[]}],
    requestBody: {
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        content: {
                            type: "string",
                            description: "Content of the comment",
                            example: "Great blog post!"
                        }
                    }
                }
            }
        }
    },
    responses: {
        200: {
            description: "OK"
        },
        500: {
            description: "Internal Server Error"
        }
    }
};

module.exports = {
    "/blogs": {
        get: allBlogs,
        post: createBlogs,
    },
    "/blogs/{id}": {
        delete: deleteBlog,
        put: updateBlog
    },
    "/blogs/{id}/like": {
        post: likeBlog
    },
    "/blogs/{id}/comment": {
        post: addCommentToBlog
    }
};
