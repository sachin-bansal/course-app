import {Request, Response} from 'express'
import courses from './../db/courses';
import Course from './../models/course'

const getAllCourses = (req: Request, res: Response) =>{
    return res.json(courses);
};

const getCourseWithId = (req: Request, res: Response) =>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course){
        return res.status(404).send('A course with given id is not found');
    }
    return res.json(course);
};

const addCourse = (req: Request, res: Response) =>{
    const course: Course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course);
    return res.json(course);
};

const updateCourse = (req: Request, res: Response) =>{
    return res.status(200).json(req.params.id);
};

const deleteCourse = (req: Request, res: Response) =>{
    return res.status(200).json(req.params.id);
};

export default {getAllCourses, getCourseWithId, updateCourse, addCourse, deleteCourse}
