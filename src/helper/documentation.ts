import { any } from "joi"
const blogDoc = require("../routes/blogs.doc")
const authDoc = require("../routes/auth.doc");
const userDoc = require("../routes/users.doc")

const swaggerDocumentation ={
    // swagger: "2.0",
    openapi: "3.0.0",
    info: {
        title: "Kebean",
        version: "0.0.1",
        description: "Kebean Portfolio Website"
    },
  components: {
      securitySchemes: {
        bearerAuth: {
          type: "apiKey",
          name: "x-auth-token",
          in: "header",
          description: "Bearer token authorization"
        },
      },
    },  
    // servers: [
    //     {
    //         url: "http://localhost:3000",
    //         description: "Local dev environment"
    //     },
    //     {
    //         url: "http://production",
    //         description: "Production environment"
    //     }
    // ],
    tags:[
        {
            name:"Blogs",
            description: "Blogs routes"
        },
    

    ],
    paths:{
        ...authDoc,
        ...userDoc,
        ...blogDoc,
    }
} 
module.exports = swaggerDocumentation