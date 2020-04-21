module.exports = function(aplication){
    aplication.get('/formulario_noticia', function(req, res){
    
        aplication.app.controllers.admin.formulario_noticia(aplication,req, res);
    
    
    
    });

    aplication.post('/noticias/salvar', function(req, res){
        var noticia = req.body;
       
        //Validações de formulário
         req.assert('titulo','Título  obrigatório*').notEmpty();
         req.assert('resumo','Resumo obrigatório*').notEmpty();
         req.assert('resumo','Resumo não pode ser maior que 100 caracteres*').len(0,100);
         req.assert('autor','Autor obrigatório*').notEmpty();
         req.assert('data_noticia','Data da notícia obrigatório*').notEmpty();
         req.assert('noticia','Notícia  obrigatório*').notEmpty();

        var errors = req.validationErrors();
        if(errors){
            res.render('admin/form_add_noticia',{validacao: errors, noticia: noticia});
            return;
        }

        var conn = aplication.config.dbConnection();
        var noticiaModel = new aplication.app.models.NoticiasDAO(conn);
       
        noticiaModel.insertNoticia(noticia,function(error, result){
            res.redirect('/noticias');
        });
    });
}
