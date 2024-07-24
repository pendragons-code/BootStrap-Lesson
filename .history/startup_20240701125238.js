const express = require('express');
const path = require("path");
app = express();

app.get('/', function (req, res) {
	try{
		console.log("============================================== [New Request For Page] ================================================");
		console.log(`[${new Date()}] Serving ./static/html/index.html`);
		res.sendFile(__dirname + '/static/html/index.html');
	} catch(error) {
		console.error(error);
	}
});

app.use(function (req, res, next) {
	try{
		var filename = path.basename(req.url);
		var extension = path.extname(filename);
		if(extension === ".html") console.log("============================================== [New Request For Page] ================================================");
		console.log(`[${new Date()}] The file ${filename} was requested.`);
		next();
	} catch(error) {
		console.error(error);
	}
});

app.use(express.static(__dirname + '/static'));

app.listen(3000, () => {
	console.log("============================================== [New Deployment] ================================================");
	console.log(`[${new Date()}] http://localhost:3000 is running!`);
});