
module.exports =function(aplication){
    aplication.get('/noticias', function(req, res){
        var conn = aplication.config.dbConnection();
        var noticiaModel = aplication.app.models.noticiaModel;
        
        noticiaModel.getNoticias(conn,function(error, result){
            res.render('noticias/noticias',{noticias : result}); 
        })       
    
    });
}