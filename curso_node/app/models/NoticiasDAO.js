function NoticiasDAO(conn){
  this._conn = conn;

}
NoticiasDAO.prototype.getNoticias = function(callback)
{
  this._conn.query('SELECT * FROM noticias',callback); 
}
NoticiasDAO.prototype.getNoticia = function(id_noticia, callback )
{
  var sql = 'SELECT * FROM noticias WHERE id_noticia = '+ id_noticia['id'];
  this._conn.query( sql ,callback);   
}
//Função responsável por pegar as 5 ultimas notícias cadastradas
NoticiasDAO.prototype.getUltimasNoticias = function(callback)
{
  var sql = 'SELECT * FROM noticias ORDER BY 1 DESC LIMIT 5';
  this._conn.query( sql ,callback);   
}
//Função responsável pela inserção dos dados no banco 
NoticiasDAO.prototype.insertNoticia = function(params, callback )
{
  var sql = "INSERT INTO noticias( titulo, noticia, resumo, autor, data_noticia) VALUES('"+params['titulo']+"','"+params['noticia']+"','"+params['resumo']+"','"+params['autor']+"','"+params['data_noticia']+"')";
  this._conn.query( sql ,callback);   
}

module.exports = function(){
    return NoticiasDAO;
}