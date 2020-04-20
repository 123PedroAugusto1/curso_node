module.exports = function(aplication){
    aplication.get('/formulario_noticia', function(req, res){
        res.render('admin/form_add_noticia');
    });

    aplication.post('/noticias/salvar', function(req, res){
        var noticia = req.body;
        
        var conn = aplication.config.dbConnection();
        var noticiaModel = new aplication.app.models.NoticiasDAO(conn);
       
       
       
        noticiaModel.insertNoticia(noticia,function(error, result){
            res.redirect('/noticias');
        });
    });
}
