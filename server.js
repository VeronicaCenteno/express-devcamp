//1.Crear el objeto express 
const express = require('express')
//2. Citar las dependecncias necesarias 
const dotenv = require('dotenv')
const colors = require ('colors')
const listEndPoint = require('express-list-endpoints')
// Los componentes de  ruta
const bootcampRoutes = require('./routes/BootcampRoutes') 
const courseRoutes = require('./routes/CourseRoutes')
//3. Establecer archivo de configuracion 
dotenv.config({
    path: './config/config.env'
})
console.log(process.env.PORT)

//Crear el objeto aplicación para el servidor de desarrollo 
const app = express()


//rutas de proyecto 
app.use('/api/v1/bootcamps' , bootcampRoutes)
app.use('/api/v1/courses' , courseRoutes)
//Endpoint de aplicacion 
app.get('/' , (request , response)=>{
    response
        .status(200)
        .json({
            "success": true,
            "data": "Request exitosa"
        })
        send('Ruta funcionando')
})

//EndPoints de dominio  




//Imprimir la lista de endpoints validas por el proyecto 
console.log(listEndPoint(app))

//Ejecutar el servidor de desarrollo 
//Parametros 
            //Puertos de escucha - listen 
app.listen(process.env.PORT ,()=>{
    console.log(`Servidor activo en puerto 5000`.bgMagenta.black)
})