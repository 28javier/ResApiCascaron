const { response, request } = require('express');


const productosGet = (req = request, res = response) => {

    const { q, nombre = 'No name', apikey, page = 1, limit } = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const productosPost = (req, res = response) => {

    const { nombre, edad } = req.body;

    res.json({
        msg: 'post API - productosPost',
        nombre,
        edad
    });
}

const productosPut = (req, res = response) => {

    const { id } = req.params;

    res.json({
        msg: 'put API - productosPut',
        id
    });
}

// const usuariosPatch = (req, res = response) => {
//     res.json({
//         msg: 'patch API - usuariosPatch'
//     });
// }

const productosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - productosDelete'
    });
}




module.exports = {
    productosGet,
    productosPost,
    productosPut,
    // usuariosPatch,
    productosDelete,
};