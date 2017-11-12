const mysql = require('../node_modules/mysql');

const con = mysql.createConnection({
	host: "localhost",
	user: "x",
	password: "x",
	database: "node_tree"
});

exports.connectToDB = function() {
	con.connect((err) => {
		if(err){
			console.log('Error connecting to DB')
			return;
		}
		console.log('Connection established')
	})
};

exports.endConnect = function() {
	con.end(function(err){});
	console.log('Connection ended')
};

