module.exports =function(aplication){
    aplication.get('/buscar/:id', function(req, res){
        //Parametro de busca
        var id_noticia = req.params['id'];
        
        //Variável de conexão com o banco
        var conn = aplication.config.dbConnection();
        
        var noticiaModel = new aplication.app.models.NoticiasDAO(conn);

        noticiaModel.getNoticia(id_noticia,function(error, result){
            res.render('noticias/noticia',{noticia : result}); 
        });   
    });
}