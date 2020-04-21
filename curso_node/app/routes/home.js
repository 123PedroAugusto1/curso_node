
module.exports = function(aplication){
    aplication.get('/', function(req, res){
        var noticiaController = new aplication.app.controllers.NoticiaController(aplication);
        noticiaController.index(req, res);
    });
}
    
