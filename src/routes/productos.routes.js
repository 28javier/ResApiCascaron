const { Router } = require('express');

const {
    productosGet,
    productosPut,
    productosPost,
    productosDelete,
    // usuariosPatch
} = require('../controllers/productos.controllers');

const router = Router();


router.get('/', productosGet);

router.put('/:id', productosPut);

router.post('/', productosPost);

router.delete('/:id', productosDelete);

// router.patch('/', usuariosPatch);





module.exports = router;