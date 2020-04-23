
module.exports =function(aplication){
   
    aplication.get('/noticias', function(req, res){
        var noticiaController = new aplication.app.controllers.NoticiaController(aplication);
        noticiaController.listar_todos(req, res);
    });
   
    aplication.get('/noticia', function(req, res){
        var noticiaController = new aplication.app.controllers.NoticiaController(aplication);
        id_noticia = req.query;
        
        noticiaController.buscar_noticia(id_noticia,req, res);
    });
}