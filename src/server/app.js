const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.Path = {
            productos: '/api/productos',
        };

        //Base de Datos
        this.dbConectarDB();

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }

    // Conecion a la bdd antes que toso
    async dbConectarDB() {
        await dbConnection();
    }

    // Midleware se ejecuantan antes de llegar a las rutas
    middlewares() {

        // CORS
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use(express.json());

        // Directorio Público
        this.app.use(express.static('public'));

    }

    // Rutas de la api
    routes() {
        this.app.use(this.Path.productos, require('../routes/productos.routes'));
    }

    // Puerto donde escuch el sistema
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }

}

module.exports = Server;