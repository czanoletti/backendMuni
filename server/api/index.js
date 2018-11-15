// api router will mount other routers
module.exports = (app) => {

  app.use('/api/public', require('./public/public.route'));
  app.use('/api/registrar', require('./registrar/registrar.route'));
  app.use('/api/ingreso', require('./ingresar/ingresar.routes'));
  app.use('/api/banner', require('./banner/banner.route'));
  app.use('/api/persona', require('./persona/persona.route'));
  app.use('/api/rol', require('./rol/rol.route'));
  app.use('/api/empleado', require('./empleado/empleado.route'));
  app.use('/api/usuario', require('./usuario/usuario.route'));
  app.use('/api/departamento', require('./departamento/departamento.route'));
  app.use('/api/departamento_empleado', require('./departamento_empleado/departamento_empleado.route'));
  app.use('/api/cliente_lote', require('./cliente_lote/cliente_lote.route'));
  app.use('/api/lote', require('./lote/lote.route'));
  app.use('/api/compra_lote', require('./compra_lote/compra_lote.route'));
  app.use('/api/cliente_inhumacion', require('./cliente_inhumacion/cliente_inhumacion.route'));
  app.use('/api/inhumacion', require('./inhumacion/inhumacion.route'));
  app.use('/api/noticia', require('./noticia/noticia.route'));
  app.use('/api/tipo_archivo', require('./noticia/noticia.route'));
  app.use('/api/archivo', require('./archivo/archivo.routes'));
  app.use('/api/tipo_servicio', require('./tipo_servicio/tipo_servicio.route'));
  app.use('/api/servicio', require('./servicio/servicio.route'));
  app.use('/api/tipo_curso', require('./tipo_curso/tipo_curso.route'));
  app.use('/api/curso', require('./curso/curso.route'));
  app.use('/api/tipo_proyecto', require('./tipo_proyecto/tipo_proyecto.route'));
  app.use('/api/categoria_proyecto', require('./categoria_proyecto/categoria_proyecto.routes'));
  app.use('/api/proyecto', require('./proyecto/proyecto.route'));
  app.use('/api/categoria_trabajo', require('./categoria_trabajo/categoria_trabajo.route'));
  app.use('/api/oferta_trabajo', require('./oferta_trabajo/oferta_trabajo.route'));
  app.use('/api/postulante', require('./postulante/postulante.route'));
  app.use('/api/postulacion', require('./postulacion/postulacion.route'));
  app.use('/api/evento', require('./evento/evento.route'));
  app.use('/', require('./root/root'));

};



