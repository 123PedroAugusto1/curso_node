function NoticiaController(aplication){
    this._aplication = aplication;

}

NoticiaController.prototype.index = function(req,res){
    var conn = this._aplication.config.dbConnection();
    var noticiaModel = new this._aplication.app.models.NoticiasDAO(conn);
    
    noticiaModel.getUltimasNoticias(function(error, result){
        res.render('home/index',{noticias : result}); 
    });
    
}

NoticiaController.prototype.formulario_noticia = function(req,res){
    res.render('admin/form_add_noticia',{validacao: 0,noticia: {}});
}

NoticiaController.prototype.listar_todos = function(req,res){
     //Variável de conexão com o banco
     var conn = this._aplication.config.dbConnection();
     var noticiaModel = new this._aplication.app.models.NoticiasDAO(conn);
     
     noticiaModel.getNoticias(function(error, result){
         res.render('noticias/noticias',{noticias : result}); 
     })          
}

NoticiaController.prototype.buscar_noticia = function(req,res){
    //Parametro de busca
    var id_noticia =1;
    //var id_noticia = req.params['id'];
    //Variável de conexão com o banco
    var conn = this._aplication.config.dbConnection();
    
    var noticiaModel = new this._aplication.app.models.NoticiasDAO(conn);
  
    noticiaModel.getNoticia(id_noticia,function(error, result){
        res.render('noticias/noticia',{noticia : result}); 
    });        
}

//Função para validação de dados
NoticiaController.prototype.validaDados = function(req){
    req.assert('titulo','Título  obrigatório*').notEmpty();
    req.assert('resumo','Resumo obrigatório*').notEmpty();
    req.assert('resumo','Resumo não pode ser maior que 100 caracteres*').len(0,100);
    req.assert('autor','Autor obrigatório*').notEmpty();
    req.assert('data_noticia','Data da notícia obrigatório*').notEmpty();
    req.assert('noticia','Notícia  obrigatório*').notEmpty();
    return req.validationErrors();
 }

 NoticiaController.prototype.salvar_noticia = function(req,res){
    //Dados vindos do formulário
    var noticia = req.body; 
    //Validações de formulário
    var errors = this.validaDados(req);
    if(errors){
        res.render('admin/form_add_noticia',{validacao: errors, noticia: noticia});
        return;
    }
    var conn = this._aplication.config.dbConnection();
    var noticiaModel = new this._aplication.app.models.NoticiasDAO(conn);
   
    noticiaModel.insertNoticia(noticia,function(error, result){
        res.redirect('/noticias');
    });
    }

module.exports = function(){
    return NoticiaController;
} ; 