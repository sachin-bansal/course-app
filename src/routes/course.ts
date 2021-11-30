import express from 'express';
import controller from './../controllers/course';

const router = express.Router();
router.get('/', controller.getAllCourses);
router.get('/:id', controller.getCourseWithId);
router.post('/add', controller.addCourse);
router.put('/update/:id', controller.updateCourse);
router.delete('/delete/:id', controller.deleteCourse);


export = router;