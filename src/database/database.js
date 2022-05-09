const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose
    .connect(
      process.env.DB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB Conectado!'))
    .catch((error) =>
      console.log(`Erro ao conectar com o MongoDB, erro: ${error}`),
    );
};

module.exports = connectToDatabase;
