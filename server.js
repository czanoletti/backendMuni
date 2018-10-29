const express = require('express');
const app = express();
const port = 3000;
const db = require('./server/models/db');
const path = require('path');

// Static file set

app.use("/info_publica", express.static(path.join(__dirname, '/archivo')));
app.use("/", express.static(path.join(__dirname, 'dist', 'municipalidad-morales')));


// setup the Express middlware
require('./server/middleware/middleware')(app);

// setup the api
require('./server/api')(app);


// Static content
// app.use(express.static(path.join(__dirname, 'dist')));

db.sequelize.sync({
  force:true
})
    .then(()=>{
        // Populate DB
        const populate = require('./server/models/seed/seed-db').insert;
        populate().then(()=>{
            console.log('done');
        });
    })
    .then(()=>{
      app.listen(port, () => {
      console.log('running server on port ' + port);
    });

    }).catch((err)=>{
        console.log(err);
    });
