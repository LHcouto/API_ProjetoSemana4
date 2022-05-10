const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose
    .connect(
      'mongodb+srv://luis123:<admin>@api-elgeladon.2jzy4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('mongoDb CONNECT!'))
    .catch((error) =>
      console.log(`Erro ao conectar com o MongoDB,erro: ${error}`),
    );
};

module.exports = connectToDatabase;
