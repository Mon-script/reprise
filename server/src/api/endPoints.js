const express = require('express');
const router = express.Router();
const { ping } = require('../controllers/pingController');
const { login } = require('../controllers/loginController')
const {getSalida}= require('../controllers/salidaControler')
const {saveProduct}=require('../controllers/productoController')
const {getProducts}=require('../controllers/productoController')
const {deleteProducts}=require('../controllers/productoController')
const {getStock}=require('../controllers/stockcontroller')
const {postEntrada}=require('../controllers/stockcontroller')
const multer=require('multer')
const path = require('path');
const { getEntrada } = require('../controllers/entradaController');

const almacenamientoTemporal= multer.diskStorage({
    destination: path.join(__dirname,'../imagenes'),//dirnaame es una variable global
    // que donde es ejecutada(con js) devuelve la ruta
    // donde esta/el metodo join une en una ruta sus argumentos.
    filename: (req,avatar,callBack)=>{{
        callBack(null,Date.now()+'-berry-'+ avatar.originalname)
    }}
})

const avatarSubir = multer({
    storage: almacenamientoTemporal,
    limits: {
        fileSize: 1024 * 1024 * 1024 * 3 // 3GB límite de tamaño de archivo
    }
}).single('avatar');




router.get('/ping', ping);
router.get('/salida',getSalida);
router.get('/entrada',getEntrada);
router.get('/productos/get',getProducts);
router.get('/stock/get',getStock);

router.post('/login', login);
router.post('/saveProduct',avatarSubir, saveProduct);
router.post('/post/entrada', postEntrada);
router.delete('/producto/delete/:id/:nombree/:calidaa',deleteProducts)


module.exports = router;