module.exports = function(aplication){
    aplication.get('/formulario_noticia', function(req, res){
        var noticiaController = new aplication.app.controllers.NoticiaController(aplication);
        noticiaController.formulario_noticia(req, res);
    
    
    });
    aplication.post('/noticias/salvar', function(req, res){
        var noticiaController = new aplication.app.controllers.NoticiaController(aplication);
        noticiaController.salvar_noticia(req, res);
    });
}
