const mongoose = require('mongoose');

module.exports = {
  connect: DB_HOST => {
    mongoose.connect(DB_HOST);
    mongoose.connection.on('error', err => {
      console.log(err);
      console.log("Błąd połączenia z bazą danych.");

      process.exit();
    });
  },
  close: () => {
    mongoose.connection.close();
  }
}