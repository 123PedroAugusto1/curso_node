module.exports =function(aplication){
    aplication.get('/noticia/:id', function(req, res){

        var id_noticia = req.params['id'];
        var conn = aplication.config.dbConnection();
        var noticiaModel = aplication.app.models.noticiaModel;

        noticiaModel.getNoticia(conn,id_noticia,function(error, result){
            res.render('noticias/noticia',{noticia : result}); 
        });
        
        //var sql = 'SELECT * FROM noticias WHERE id_noticia = '+ id_noticia;
        //console.log(sql);
        //conn.query( sql ,);       
    });
}