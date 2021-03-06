const express = require('express');
const app = express();
const port = 80;
// const db = require('./server/models/db');
const path = require('path');

// Static file set

app.use("/info_publica", express.static(path.join(__dirname, '/archivo')));
// app.use("/public/archivos", express.static(path.join(__dirname, '/public/archivos')));
// app.use("/public/img/noticias", express.static(path.join(__dirname, '/public/img/noticias')));
// app.use("/public/img/banner", express.static(path.join(__dirname, '/public/img/banner')));
// app.use("/public/img/proyectos", express.static(path.join(__dirname, '/public/img/proyectos')));
// app.use("/public/img/vume", express.static(path.join(__dirname, '/public/img/vume')));
app.use("/", express.static(path.join(__dirname, 'dist', 'municipalidad-morales')));


// setup the Express middlware
require('./server/middleware/middleware')(app);

// setup the api
require('./server/api')(app);


// Static content
// app.use(express.static(path.join(__dirname, 'dist')));

app.listen(port, () => {
    console.log('running server on port ' + port);
});

// db.sequelize.sync({
//   force:true
// })
//     .then(()=>{
//         // Populate DB
//         const populate = require('./server/models/seed/seed-db').insert;
//         populate().then(()=>{
//             console.log('done');
//         });
//     })
//     .then(()=>{
//       app.listen(port, () => {
//       console.log('running server on port ' + port);
//     });
//
//     }).catch((err)=>{
//         console.log(err);
//     });
