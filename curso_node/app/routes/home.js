
module.exports = function(aplication){
    aplication.get('/', function(req, res){
        res.render("home/index");
    });
}
    
