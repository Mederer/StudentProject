"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const express_1 = __importStar(require("express"));
const studentRoutes_1 = __importDefault(require("./routes/studentRoutes"));
const courseRoutes_1 = __importDefault(require("./routes/courseRoutes"));
const app = (0, express_1.default)();
// Middleware
app.use((0, express_1.json)());
// Check that the API key is present.
app.use((req, res, next) => {
    const key = req.get("Api-Key");
    if (!key || key !== process.env.KEY) {
        res.status(401).json({
            message: "Unauthorized"
        });
    }
    else {
        next();
    }
});
// Routers
app.use("/students", studentRoutes_1.default);
app.use("/courses", courseRoutes_1.default);
// Routes
app.get("/", (req, res) => {
    res.send("<h1>Hello from express & typescript</h1>");
});
// Start server
const port = process.env.PORT;
if (!port) {
    console.log("No port has been given. Please set the 'PORT' environment variable");
}
else {
    app.listen(port, () => console.log(`Now listening on port ${port}`));
}