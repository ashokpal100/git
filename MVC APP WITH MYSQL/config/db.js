// config/db.js
   module.exports = function(mysql){

	 var connection = mysql.createConnection
	 ({
	   host     : 'localhost',
	   user     : 'root',
	   password : '2016',
	   database : 'mydatabase'
	 });
	connection.connect(function(err)
	{
	 	if(!err)
	 	{
	     	console.log("Database is connected ... \n\n");  
	    } 
	    else 
	    {
	       console.log("Error connecting database ... \n\n");  
	    }
	});
};