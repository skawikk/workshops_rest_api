$.ajax({
	url: 'http://127.0.0.1:8000/book/',
	type: 'GET',
	dataType: 'json'
})
.done(function(result) {
	console.log(result);
});
