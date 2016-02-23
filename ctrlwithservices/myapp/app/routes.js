var Todo = require('./models/todo');

module.exports = function(app) {

	// api ---------------------------------------------------------------------
	// get all todos
	app.get('/api/todos', function(req, res) {

		// use mongoose to get all todos in the database
		Todo.find(function(err, todos) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(todos); // return all todos in JSON format
		});
	});

	// create todo and send back all todos after creation
	app.post('/api/todos', function(req, res) {

		//conlose.log(req.body);
		//console.log(req.body);
		// create a todo, information comes from AJAX request from Angular
		Todo.create({
			name : req.body.text,
			add : req.body.text1,
			done : false
		}, function(err, todo) {
			if (err)
				res.send(err);

			// get and return all the todos after you create another
			Todo.find(function(err, todos) {
				if (err)
					res.send(err)
				res.json(todos);
			});
		});

	});

	// delete a todo
	app.delete('/api/todos/:todo_id', function(req, res) {

		Todo.remove({_id : req.params.todo_id}, function(err, todo) {
			if (err)
				res.send(err);

			// get and return all the todos after you create another
			Todo.find(function(err, todos) {
				if (err)
					res.send(err)
				res.json(todos);
			});
		});
	});
	// update a todo
	app.post('/api/todos/:todo_id1', function(req, res) {
		
		Todo.update({_id:req.params.todo_id1},{$set:{'name':'Ashok'}},function(err,todo)
		{
		console.log(req.params.todo_id1);
		if (err)
				res.send(err);
			//console.log("sucessful");
			//res.send("Ashok");
			// get and return all the todos after you create another
			Todo.find(function(err, todos) {
				if (err)
					res.send(err)
				res.json(todos);
			});
			
	});
		
	});

	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
};