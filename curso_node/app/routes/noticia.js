module.exports =function(app){
    app.get('/noticia/:id', function(req, res){
        
        var id_noticia = req.params['id'];
        var conn = app.config.dbConnection();

        var sql = 'SELECT * FROM noticias WHERE id_noticia = '+ id_noticia;
        console.log(sql);
        
        conn.query( sql ,function(error, result){
            res.render('noticias/noticia',{noticia : result}); 
        });       
    });
}