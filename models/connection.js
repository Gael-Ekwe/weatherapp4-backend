const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://gaelekwe:qC5EqlQwfXCV9Jhg@cluster0.e52vslz.mongodb.net/weatherapp';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));
