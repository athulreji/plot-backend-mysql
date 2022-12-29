const mysql = require('mysql');

const connection = mysql.createConnection({
	host : 'db4free.net',
	database : 'plotdb2',
	user : 'athul_reji',
	password : 'Pass@1234',
});

connection.connect(function(error){
	if(error)
	{
		throw error;
	}
	else
	{
		console.log('MySQL Database is connected Successfully');
	}
});

module.exports = connection;
