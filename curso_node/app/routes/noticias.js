
module.exports =function(aplication){
   
    aplication.get('/noticias', function(req, res){
        var noticiaController = new aplication.app.controllers.NoticiaController(aplication);
        noticiaController.listar_todos(req, res);
    });
   
    aplication.get('/buscar/:id', function(req, res){
        var noticiaController = new aplication.app.controllers.NoticiaController(aplication);
        noticiaController.buscar_noticia(req, res);
    });
}