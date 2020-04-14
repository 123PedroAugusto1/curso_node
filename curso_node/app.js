var app = require('./config/server');
var rota_home = require('./app/routes/home');
var rota_noticia = require('./app/routes/noticias');
var rota_inclusao = require('./app/routes/formulario_inclusao_noticia');

rota_home(app);
rota_noticia(app);
rota_inclusao(app);



app.listen(8181, function(){
    console.log("Servidor on");
})