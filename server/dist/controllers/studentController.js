"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStudent = exports.deleteStudent = exports.createStudent = exports.getStudent = exports.getStudents = void 0;
const Student_1 = __importDefault(require("../models/Student"));
const getStudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json(yield Student_1.default.findAll());
});
exports.getStudents = getStudents;
const getStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    if (!id) {
        return res.status(400).json({
            message: "Bad parameters",
        });
    }
    try {
        const foundStudent = yield Student_1.default.findByPk(id);
        if (foundStudent) {
            res.json(foundStudent);
        }
        else {
            res.status(404).json({
                message: `Student with id ${id} does not exist.`,
            });
        }
    }
    catch (error) {
        res.status(500).json({
            message: error,
        });
    }
});
exports.getStudent = getStudent;
const createStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const phone = req.body.phone;
    if ((!firstname || !lastname || !email || !phone) || !validateParams(firstname, lastname, email, phone)) {
        res.status(400).json({
            message: "Bad parameters",
        });
    }
    const student = yield Student_1.default.create({ firstname, lastname, email, phone });
    res.status(201).json({ student });
});
exports.createStudent = createStudent;
const deleteStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const student = yield Student_1.default.findByPk(id);
    if (!student) {
        res.status(404).json({
            message: "Student with id ${id} does not exist.",
        });
    }
    else {
        yield student.destroy();
        res.status(204).send();
    }
});
exports.deleteStudent = deleteStudent;
const updateStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const phone = req.body.phone;
    if (!firstname ||
        !lastname ||
        !email ||
        !phone) {
        console.log(phone);
        return res.status(400).json({
            message: "Bad parameters."
        });
    }
    const student = yield Student_1.default.findByPk(id);
    if (!student) {
        res.status(404).json({
            message: `Student with id ${id} does not exist.`,
        });
    }
    else {
        student.firstname = firstname;
        student.lastname = lastname;
        student.email = email;
        student.phone = phone;
        yield student.save();
        res.status(200).json({ student });
    }
});
exports.updateStudent = updateStudent;
const validateParams = (firstname, lastname, email, phone) => {
    return true;
};
