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
exports.deleteCourse = exports.updateCourse = exports.createCourse = exports.getCourse = exports.getCourses = void 0;
const Course_1 = __importDefault(require("../models/Course"));
const getCourses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const courses = yield Course_1.default.findAll();
    res.json(courses);
});
exports.getCourses = getCourses;
const getCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    if (!id) {
        res.status(400).json({
            message: "Bad parameters",
        });
    }
    else {
        const course = yield Course_1.default.findByPk(id);
        if (!course) {
            res.status(404).json({
                message: `Course with id ${id} does not exist`,
            });
        }
        else {
            res.json({ course });
        }
    }
});
exports.getCourse = getCourse;
const createCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const name = req.body.name;
    if (!name) {
        res.status(400).json({
            message: "Bad parameters",
        });
    }
    else {
        const course = yield Course_1.default.create({ name });
        res.status(201).json({ course });
    }
});
exports.createCourse = createCourse;
const updateCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const name = req.body.name;
    if (!id || !name) {
        res.status(400).json({
            message: "Bad parameters",
        });
    }
    else {
        const course = yield Course_1.default.findByPk(id);
        if (!course) {
            res.status(404).json({
                message: `Course with id ${id} does not exist`,
            });
        }
        else {
            course.name = name;
            yield course.save();
            res.json({ course });
        }
    }
});
exports.updateCourse = updateCourse;
const deleteCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    if (!id) {
        res.status(400).json({
            message: "Bad parameters",
        });
    }
    else {
        const course = yield Course_1.default.findByPk(id);
        if (!course) {
            res.status(404).json({
                message: `Course with id ${id} does not exist.`,
            });
        }
        else {
            yield course.destroy();
            res.status(204).send();
        }
    }
});
exports.deleteCourse = deleteCourse;
