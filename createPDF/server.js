var express=require('express');
var app=express();
var fs = require('fs');
var jadepdf = require('jade-pdf-redline');
var jade = require('jade');
var pdf = require('html-pdf'); //by htm-pdf

// report.generate(path.join(__dirname, "test.jade"), "Jade Complex with Letterhead.pdf", _data , function(error, pdf) { //by jade report
//   if (error) {
//     console.log (error);
//     return false;
//   }
//   console.log ("Report created: " + pdf)
// });


var rows={"id":"10","name":"pal","city":"gwl"};

// fs.readFile('test.jade', 'utf8', function (err, data) {
//         if (err) throw err;
//         var fn = jade.compile(data);
//         var html = fn({options});
//         console.log(html); 

// 		var html = fs.readFileSync(html, 'utf8');
// 		var options = { format: 'Letter' };
		 
// 		pdf.create(html, options).toFile('businesscard.pdf', function(err, res) {
// 		  if (err) return console.log(err);
// 		  console.log(res); 
// 		});
//     });
app.get('/',function(req,res){

	//res.render('test', {title: 'pal'}); 
	var options = {
   "locals": {
      "rows": rows  
    }
}
	fs.createReadStream('test.jade')
		  .pipe(jadepdf(options))
		  .pipe(fs.createWriteStream('test.pdf'));


});

app.listen(3000,function(){
    console.log("Express Started on Port 3000");
});