module.exports = function(aplication){
    aplication.get('/formulario_inclusao_noticia', function(req, res){
        res.render('admin/form_add_noticia');
    });

    aplication.post('/noticias/salvar', function(req, res){
        var noticia = req.body;
        console.log(noticia);
        res.send("Chegou na pagina");
    });
}
