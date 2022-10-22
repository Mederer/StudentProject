import { Request, Response } from "express";
import Student from "../models/Student";

export const getStudents = async (req: Request, res: Response) => {
    res.json(await Student.findAll());
};

export const getStudent = async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);

    if (!id) {
        res.status(400).json({
            message: "Bad parameters",
        });
    }

    try {
        const foundStudent = await Student.findByPk(id);

        if (foundStudent) {
            res.json(foundStudent);
        } else {
            res.status(404).json({
                message: `Student with id ${id} does not exist.`,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: error,
        });
    }
};

export const createStudent = async (req: Request, res: Response) => {
    const name: string = req.body.name;

    if (!name) {
        res.status(400).json({
            message: "Bad parameters",
        });
    }

    const student = await Student.create({ name });

    res.status(201).json({ student });
};

export const deleteStudent = async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);

    const student = await Student.findByPk(id);
    if (!student) {
        res.status(404).json({
            message: "Student with id ${id} does not exist.",
        });
    } else {
        await student.destroy();
        res.status(204).send();
    }
};

export const updateStudent = async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const name: string = req.body.name;

    const student = await Student.findByPk(id);
    if (!student) {
        res.status(404).json({
            message: `Student with id ${id} does not exist.`,
        });
    } else {
        student.name = name;
        await student.save();
        res.status(200).json({ student });
    }
};
