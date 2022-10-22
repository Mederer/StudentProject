import express from "express";
import * as StudentController from "../controllers/studentController";
const studentRouter = express.Router();

studentRouter.get("/", StudentController.getStudents);

studentRouter.get("/:id", StudentController.getStudent);

studentRouter.post("/", StudentController.createStudent);

studentRouter.delete("/:id", StudentController.deleteStudent);

studentRouter.put("/:id", StudentController.updateStudent);

export default studentRouter;
