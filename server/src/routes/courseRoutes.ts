import express from "express";
import * as CourseController from "../controllers/courseController";
const courseRouter = express.Router();

courseRouter.get("/", CourseController.getCourses);

courseRouter.get("/:id", CourseController.getCourse);

courseRouter.post("/", CourseController.createCourse);

courseRouter.put("/:id", CourseController.updateCourse);

courseRouter.delete("/:id", CourseController.deleteCourse);

export default courseRouter;
