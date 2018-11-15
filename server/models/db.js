'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(__filename);
var db        = {};

const sequelize = new Sequelize('dbdev', 'root', '<sisifo2016>', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
    logging: false
});


db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Declaring models
db.persona = require('../models/persona')(sequelize, Sequelize);
db.empleado = require('../models/empleado')(sequelize, Sequelize);
db.rol = require('../models/rol')(sequelize, Sequelize);
db.usuario = require('../models/usuario')(sequelize, Sequelize);
db.departamento = require('../models/departamento')(sequelize, Sequelize);
db.departamento_empleado = require('../models/departamento_empleado')(sequelize, Sequelize);
db.cliente_lote = require('../models/cliente_lote')(sequelize, Sequelize);
db.lote = require("../models/lote")(sequelize, Sequelize);
db.compra_lote = require("../models/compra_lote")(sequelize, Sequelize);
db.cliente_inhumacion = require("../models/cliente_inhumacion")(sequelize, Sequelize);
db.inhumacion = require("../models/inhumacion")(sequelize, Sequelize);
db.noticia = require("../models/noticia")(sequelize, Sequelize);
db.noticia = require("../models/noticia")(sequelize, Sequelize);
db.tipo_archivo = require("../models/tipo_archivo")(sequelize, Sequelize);
db.archivo = require("../models/archivo")(sequelize, Sequelize);
db.tipo_servicio = require("../models/tipo_servicio")(sequelize, Sequelize);
db.servicio = require("../models/servicio")(sequelize, Sequelize);
db.tipo_curso = require("../models/tipo_curso")(sequelize, Sequelize);
db.curso = require("../models/curso")(sequelize, Sequelize);
db.tipo_proyecto = require("../models/tipo_proyecto")(sequelize, Sequelize);
db.categoria_proyecto = require("../models/categoria_proyecto")(sequelize, Sequelize);
db.proyecto = require("../models/proyecto")(sequelize, Sequelize);
db.categoria_trabajo = require("../models/categoria_trabajo")(sequelize, Sequelize);
db.oferta_trabajo = require("../models/oferta_trabajo")(sequelize, Sequelize);
db.postulante = require("../models/postulante")(sequelize, Sequelize);
db.postulacion = require("../models/postulacion")(sequelize, Sequelize);
db.evento = require("../models/eventos")(sequelize, Sequelize);
db.banner = require("../models/banner")(sequelize, Sequelize);



//Making associations

// 1 empleado para 1 rol
db.empleado.belongsTo(db.rol, { foreignKey: 'id_rol'});

//1 empleado para 1 persona
db.empleado.belongsTo(db.persona, { foreignKey: 'id_persona'});

//1 usuario para 1 empleado
db.usuario.belongsTo(db.empleado, {foreignKey: 'id_empleado'});

//1 departamento tiene muchos departamentos_empleados ?
db.departamento.hasMany(db.departamento_empleado, {foreignKey: "id_departamento", as: "depto"});
//1 empleado tiene muchos departamento_empleado ?
db.empleado.hasMany(db.departamento_empleado, {foreignKey: "id_empleado"});

// 1 persona tiene muchos cliente_lote ?
db.persona.hasMany(db.cliente_lote, {foreignKey: "id_persona"});
db.cliente_lote.belongsTo(db.persona,{foreignKey: "id_persona"}); // Check if this works

// 1 empleado tiene muchos compras de lotes.
db.empleado.hasMany(db.compra_lote, {foreignKey: "id_empleado"});
// 1 cliente tiene muchos compras de lotes
db.cliente_lote.hasMany(db.compra_lote, {foreignKey: "id_cliente_lote"});
// 1 lote tiene muchas compra_lote ?  mismas facturas? seria 1:1
db.lote.hasMany(db.compra_lote, {foreignKey: "id_lote"});

// 1 persona tiene muchos cliente_inhumacion
db.persona.hasMany(db.cliente_inhumacion, {foreignKey: "id_persona"}); // ?

// 1 empleado muchas inhumaciones
db.empleado.hasMany(db.inhumacion, {foreignKey: "id_empleado"});
// 1 cliente_inhumacion muchas inhumaciones ? 1:1
db.cliente_inhumacion.hasMany(db.inhumacion,{foreignKey: "id_cliente_inhumacion"});

// 1 empleado muchas noticias
db.empleado.hasMany(db.noticia, {foreignKey: "id_empleado"});

// 1  empleado muchos archivos
db.empleado.hasMany(db.archivo, {foreignKey: "id_empleado"});
// 1 tipo de archivo para muchos archivos
db.tipo_archivo.hasMany(db.archivo, {foreignKey: "id_tipo_archivo"});

// 1 empleado muchos servicios
db.empleado.hasMany(db.servicio, {foreignKey: "id_empleado"});
//1 tipo de servicio para muchos servicios
db.tipo_servicio.hasMany(db.servicio, {foreignKey: "id_tipo_servicio"});

// 1 empleado para muchos cursos
db.empleado.hasMany(db.curso, {foreignKey: "id_empleado"});
// 1 tipo de curso muchos cursos
db.tipo_curso.hasMany(db.curso, {foreignKey: "id_tipo_curso"});

// 1 tipo de proyecto para varios proyectos
db.tipo_proyecto.hasMany(db.proyecto, {foreignKey: "id_tipo_proyecto"});
// 1 empleado muchos proyectos
db.empleado.hasMany(db.proyecto, {foreignKey: "id_empleado"});
// 1 categoria de proyecto para muchos proyectos
db.categoria_proyecto.hasMany(db.proyecto, {foreignKey: "id_categoria_proyecto"});

// 1 empleado muchas ofertas de trabajo
db.empleado.hasMany(db.oferta_trabajo, {foreignKey: "id_empleado"});
// 1 categoria de trabajo para muchas ofertas de trabajo
db.categoria_trabajo.hasMany(db.oferta_trabajo, {foreignKey: "id_categoria_trabajo"});

// 1 persona para muchas postulante
db.persona.hasMany(db.postulante, {foreignKey: "id_persona"});

// 1 postulante para muchas postulaciones
db.postulante.hasMany(db.postulacion,{foreignKey: "id_postulante"});
// 1 oferta trabajo para una postulacion
db.oferta_trabajo.hasOne(db.postulacion, {foreignKey: "id_oferta_trabajo"});

// 1 empleade para muchos eventos
db.empleado.hasMany(db.evento, {foreignKey: "id_empleado"});

//Try out queries


module.exports = db;
