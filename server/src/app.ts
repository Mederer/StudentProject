import * as dotenv from "dotenv";
dotenv.config();

import express, { json, Express, Request, Response, NextFunction } from "express";
import studentRouter from "./routes/studentRoutes";
import courseRouter from "./routes/courseRoutes";

const app: Express = express();

// Middleware
app.use(json());

// Check that the API key is present.
app.use((req: Request, res: Response, next: NextFunction) => {
    const key = req.get("Api-Key");

    if(!key || key !== process.env.KEY){
        res.status(401).json({
            message: "Unauthorized"
        })
    }else{
        next();
    }
})

// Routers
app.use("/students", studentRouter);
app.use("/courses", courseRouter);

// Routes
app.get("/", (req: Request, res: Response) => {
    res.send("<h1>Hello from express & typescript</h1>");
});

// Start server
const port: string | undefined = process.env.PORT;

if(!port){
    console.log("No port has been given. Please set the 'PORT' environment variable")
}else{
    app.listen(port, () => console.log(`Now listening on port ${port}`));
}
