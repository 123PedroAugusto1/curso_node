//var conn = require('../../config/conexao')();
module.exports =function(app){
    app.get('/noticias', function(req, res){
        var conn = app.config.dbConnection();

          conn.query('SELECT * FROM noticias',function(error, result){
            res.render('noticias/noticias',{noticia : result}); 
        });       
    });
}