import {Request, Response} from 'express'
import courses from './../db/courses';
import {Course, update} from './../models/course'

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
    let id = 0;
    if(courses.length > 0){
        id = courses[courses.length-1].id + 1;
    } 
    const course: Course = {
        id: id,
        name: req.body.name
    }
    courses.push(course);
    return res.json(course);
};

const updateCourse = (req: Request, res: Response) =>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course){
        return res.status(404).send('A course with given id is not found');
    }
    update(course, req.body);
    return res.json(course);
};

const deleteCourse = (req: Request, res: Response) =>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course){
        return res.status(404).send('A course with given id is not found');
    }
    const index = courses.indexOf(course);
    courses.splice(index, 1);
    return res.json(course);
};

export default {getAllCourses, getCourseWithId, updateCourse, addCourse, deleteCourse}
