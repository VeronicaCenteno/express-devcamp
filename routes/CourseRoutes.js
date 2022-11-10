const express = require('express')
const{
    getAllCourses,
    getSingleCourse,
    updateCourse,
    deleteCourse,
    createCourse

} = require ('../controllers/CourseController')
//Definir objeto de ruteo
const router = express.Router()

//Las rutas de Course 
router.route('/')
            .get(getAllCourses)
            .post(createCourse)

//Crear ruta con parametros 
    router.route('/:id')
            .get(getSingleCourse)
            .put(updateCourse)
            .delete(deleteCourse)
module.exports = router
