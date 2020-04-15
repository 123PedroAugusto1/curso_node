var app = require('./config/server');

//Rotas do projeto
//var rota_home = require('./app/routes/home')(app);
//var rota_noticia = require('./app/routes/noticias')(app);
//var rota_inclusao = require('./app/routes/formulario_inclusao_noticia')(app);

app.listen(8181, function(){
    console.log("Servidor on");
})