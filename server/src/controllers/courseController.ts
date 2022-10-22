import { Request, Response } from "express";
import Course from "../models/Course";

export const getCourses = async (req: Request, res: Response) => {
    const courses: Course[] = await Course.findAll();
    res.json(courses);
};

export const getCourse = async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);

    if (!id) {
        res.status(400).json({
            message: "Bad parameters",
        });
    } else {
        const course = await Course.findByPk(id);
        if (!course) {
            res.status(404).json({
                message: `Course with id ${id} does not exist`,
            });
        } else {
            res.json({ course });
        }
    }
};

export const createCourse = async (req: Request, res: Response) => {
    const name: string = req.body.name;

    if (!name) {
        res.status(400).json({
            message: "Bad parameters",
        });
    } else {
        const course: Course = await Course.create({ name });
        res.status(201).json({ course });
    }
};

export const updateCourse = async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const name: string = req.body.name;

    if (!id || !name) {
        res.status(400).json({
            message: "Bad parameters",
        });
    } else {
        const course: Course | null = await Course.findByPk(id);
        if (!course) {
            res.status(404).json({
                message: `Course with id ${id} does not exist`,
            });
        } else {
            course.name = name;
            await course.save();
            res.json({ course });
        }
    }
};

export const deleteCourse = async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);

    if (!id) {
        res.status(400).json({
            message: "Bad parameters",
        });
    } else {
        const course: Course | null = await Course.findByPk(id);
        if (!course) {
            res.status(404).json({
                message: `Course with id ${id} does not exist.`,
            });
        } else {
            await course.destroy();
            res.status(204).send();
        }
    }
};
