
const models = require('../db');

// JSON
const _PERSONA = require('./persona.json');
const _ROL = require('./rol.json');
const _EMPLEADO = require('./empleado.json');
const _USUARIO = require('./usuario.json');
const _DEPARTAMENTO = require('./departamento.json');
const _DEPARTAMENTO_EMPLEADO = require('./departamento_empleado.json');
const _CLIENTE_LOTE = require('./cliente_lote.json');
const _LOTE = require('./lote.json');
const _COMPRA_LOTE = require('./compra_lote.json');
const _CLIENTE_INHUMACION = require('./cliente_inhumacion.json');
const _INHUMACION = require('./inhumacion.json');
const _NOTICIA = require('./noticia.json');
const _TIPO_ARCHIVO = require('./tipo_archivo.json');
const _ARCHIVO = require('./archivo.json');
const _TIPO_SERVICIO = require('./tipo_servicio.json');
const _SERVICIO = require('./servicio.json');
const _TIPO_CURSO = require('./tipo_curso.json');
const _CURSO = require('./curso.json');
const _TIPO_PROYECTO = require('./tipo_proyecto.json');
const _CATEGORIA_PROYECTO = require('./categoria_proyecto');
const _PROYECTO = require('./proyecto.json');
const _CATEGORIA_TRABAJO = require('./categoria_trabajo.json');
const _OFERTA_TRABAJO = require('./oferta_trabajo.json');
const _POSTULANTE = require('./postulante.json');
const _POSTULACION = require('./postulacion.json');
const _EVENTO = require('./evento.json');

module.exports = {
  insert: async ()=> {

      try {

          await models.persona.bulkCreate(_PERSONA);
          await models.rol.bulkCreate(_ROL);
          await models.empleado.bulkCreate(_EMPLEADO);
          await models.usuario.bulkCreate(_USUARIO);
          await models.departamento.bulkCreate(_DEPARTAMENTO);
          await models.departamento_empleado.bulkCreate(_DEPARTAMENTO_EMPLEADO);
          await models.cliente_lote.bulkCreate(_CLIENTE_LOTE);
          await models.lote.bulkCreate(_LOTE);
          await models.compra_lote.bulkCreate(_COMPRA_LOTE);
          await models.cliente_inhumacion.bulkCreate(_CLIENTE_INHUMACION);
          await models.inhumacion.bulkCreate(_INHUMACION);
          await models.noticia.bulkCreate(_NOTICIA);
          await models.tipo_archivo.bulkCreate(_TIPO_ARCHIVO);
          await models.archivo.bulkCreate(_ARCHIVO);
          await models.tipo_servicio.bulkCreate(_TIPO_SERVICIO);
          await models.servicio.bulkCreate(_SERVICIO);
          await models.tipo_curso.bulkCreate(_TIPO_CURSO);
          await models.curso.bulkCreate(_CURSO);
          await models.tipo_proyecto.bulkCreate(_TIPO_PROYECTO);
          await models.categoria_proyecto.bulkCreate(_CATEGORIA_PROYECTO);
          await models.proyecto.bulkCreate(_PROYECTO);
          await models.categoria_trabajo.bulkCreate(_CATEGORIA_TRABAJO);
          await models.oferta_trabajo.bulkCreate(_OFERTA_TRABAJO);
          await models.postulante.bulkCreate(_POSTULANTE);
          await models.postulacion.bulkCreate(_POSTULACION);
          await models.evento.bulkCreate(_EVENTO);

      } catch (error) {

          console.log(error);

  }
}
};
