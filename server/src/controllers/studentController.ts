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
    const firstname: string = req.body.firstname;
    const lastname: string = req.body.lastname;
    const email: string = req.body.email;
    const phone: string = req.body.phone;

    if ((!firstname || !lastname || !email || !phone) || !validateParams(firstname, lastname, email, phone)) {
        res.status(400).json({
            message: "Bad parameters",
        });
    }

    const student = await Student.create({firstname, lastname, email, phone});

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
    const firstname: string = req.body.firstname;
    const lastname: string = req.body.lastname;
    const email: string = req.body.email;
    const phone: string = req.body.phone;
    if(
        !firstname ||
        !lastname ||
        !email ||
        !phone
    ){
        console.log(phone);
        return res.status(400).json({
            message: "Bad parameters."
        })
    }
    const student = await Student.findByPk(id);
    if (!student) {
        res.status(404).json({
            message: `Student with id ${id} does not exist.`,
        });
    } else {
        student.firstname = <string>firstname;
        student.lastname = <string>lastname;
        student.email = <string>email;
        student.phone = <string>phone;

        await student.save();
        res.status(200).json({ student });
    }
};

const validateParams = (firstname: string, lastname: string, email: string, phone: string) => {
    return true;
}