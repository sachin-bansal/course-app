import {Request, Response} from 'express'
import courses from './../db/courses';

const getAllCourses = (req: Request, res: Response) =>{
    return res.status(200).json(courses);
};

const getCourseWithId = (req: Request, res: Response) =>{
    return res.status(200).json(courses);
};

const updateCourse = (req: Request, res: Response) =>{
    return res.status(200).json(courses);
};

const addCourse = (req: Request, res: Response) =>{
    return res.status(200).json(courses);
};

const deleteCourse = (req: Request, res: Response) =>{
    return res.status(200).json(courses);
};

export default {getAllCourses, getCourseWithId, updateCourse, addCourse, deleteCourse}
