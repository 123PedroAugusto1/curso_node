
module.exports =function(aplication){
    aplication.get('/noticias', function(req, res){
        //Variável de conexão com o banco
        var conn = aplication.config.dbConnection();
       
        var noticiaModel = new aplication.app.models.NoticiasDAO(conn);
        
        noticiaModel.getNoticias(function(error, result){
            res.render('noticias/noticias',{noticias : result}); 
        })          
    });
}