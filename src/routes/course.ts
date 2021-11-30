import express from 'express';
import controller from './../controllers/course';

const router = express.Router();
router.get('/courses', controller.getAllCourses);
router.get('/course/:id', controller.getCourseWithId);
router.get('/course/add', controller.addCourse);
router.get('/course/delete/:id', controller.deleteCourse);
router.get('/course/update/:id', controller.updateCourse);

export = router;