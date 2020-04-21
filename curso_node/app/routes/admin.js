module.exports = function(aplication){
    aplication.get('/formulario_noticia', function(req, res){
        res.render('admin/form_add_noticia');
    });

    aplication.post('/noticias/salvar', function(req, res){
        var noticia = req.body;
       
        req.assert('titulo','Título  obrigatório*').notEmpty();
        req.assert('resumo','Resumo obrigatório*').notEmpty();
        req.assert('resumo','Resumo não pode ser maior que 100 caracteres*').len(0,10);
        req.assert('autor','Autor obrigatório*').notEmpty();
        req.assert('data_noticia','Data da notícia obrigatório*').notEmpty().isDate({format: 'YYYY-MM-DD'});
        req.assert('noticia','Notícia  obrigatório*').notEmpty();

        var errors = req.validationErrors();
        if(errors){
            res.render('admin/form_add_noticia');
            return;
        }

        var conn = aplication.config.dbConnection();
        var noticiaModel = new aplication.app.models.NoticiasDAO(conn);
       
        noticiaModel.insertNoticia(noticia,function(error, result){
            console.log(noticia);
            res.redirect('/noticias');
        });
    });
}
