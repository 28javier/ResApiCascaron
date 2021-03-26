const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_CDC, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log('Base de Datos Online');
    } catch (error) {
        console.log(error);
        throw new Error('Error al Iniciar la Base de Datos');
    }
};

module.exports = {
    dbConnection
};