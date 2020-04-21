function NoticiasDAO(conn){
  this._conn = conn;

}
NoticiasDAO.prototype.getNoticias = function(callback)
{
  this._conn.query('SELECT * FROM noticias',callback); 
}
NoticiasDAO.prototype.getNoticia = function(id_noticia, callback )
{
  var sql = 'SELECT * FROM noticias WHERE id_noticia = '+ id_noticia;
  this._conn.query( sql ,callback);   
}
//Função responsável pela inserção dos dados no banco 
NoticiasDAO.prototype.insertNoticia = function(params, callback )
{
  var sql = "INSERT INTO noticias (titulo, noticia) VALUES('"+params['titulo']+ "', '"+params['noticia']+"')";
  this._conn.query( sql ,callback);   
}

module.exports = function(){
    return NoticiasDAO;
}