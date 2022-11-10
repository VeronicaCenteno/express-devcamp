const express = require('express')
const{
    getAllReviews,
    getSingleReview,
    updateReview,
    deleteReview,
    createReview

} = require ('../controllers/ReviewsController')
//Definir objeto de ruteo
const router = express.Router()

//Las rutas de Course 
router.route('/')
            .get(getAllReviews)
            .post(createReview)

//Crear ruta con parametros 
    router.route('/:id')
            .get(getSingleReview)
            .put(updateReview)
            .delete(deleteReview)
module.exports = router
