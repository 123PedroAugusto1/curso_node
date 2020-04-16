module.exports = function(){
 
    this.getNoticias = function(conn, callback)
    {
        conn.query('SELECT * FROM noticias',callback); 
    }

    this.getNoticia = function(conn, id_noticia, callback )
    {
      var sql = 'SELECT * FROM noticias WHERE id_noticia = '+ id_noticia;
      conn.query( sql ,callback);   
    }

    return this;
}