const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL ||'mongodb://localhost/parks',  
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);

const db = mongoose.connection;

db.on('connected', function() {
    console.log(`connected to MongoDB at ${db.host}:${db.port}`);
});