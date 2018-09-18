//import thư viện express
var express = require('express');
var app = express();
var _ = require('underscore');

var todos =[{
	id: 1,
	description: 'Build a simple API - nodejs',
	completed: false
}, {
	id: 2,
	description: 'Go to T-beer - team building',
	completed: false
}, {
	id: 3,
	description: 'Feed the dog ',
	completed: true
}];
//Khai báo cổng chạy dịch vụ
var PORT = process.env.PORT || 3000;

//"To do API Root" sẽ được trả về khi thực hiện get request

app.get('/', (req, res) => {
	res.send('To do API Root')
});

app.get('/todos', function(req, res) {
	res.json(todos);
});

app.get('/todos/:id', function(req, res) {
	// params được gửi thuộc kiểu string do đó phải convert params về kiểu integer
	var todoId = parseInt(req.params.id, 10);
	var matchedTodo;
	// duyệt từng phần tử trong todos
	todos.forEach(function (todo) {
		if (todoId == todo.id) {
			matchedTodo = todo;
		}
	});
	// nếu tồn tại kết quả thì trả về dưới dạng json nếu không trả về status 404
	if (matchedTodo) {
		res.json(matchedTodo);
	} else {
		res.status(404).send();
	}
});

app.listen(PORT, () => {
	console.log('Express listening on port' + PORT + '!');
})
