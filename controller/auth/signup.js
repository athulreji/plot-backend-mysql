const connection = require('..//../db')

module.exports.signup = async (req, res) => {
    var { email, password, name} = req.body;
    try {
      query = `select * from user where email="${email}"`;
      connection.query(query, function(error, data) {
        if(data.length > 0) {
          return res.status(400).json({
            success: false,
            message: "User already exists",
            data: null,
          });
        }
        else {
          query = `insert into user(email,password,name) values("${email}","${password}","${name}")`;
          connection.query(query, function(error, data) {
            query = `select * from user where email = "${email}"`;
            connection.query(query, function(error, data) {
              return res.status(201).json({
                success: true,
                message: "User created successfully",
                uid: data[0].id,
              });
          });
          });
        }
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
        data: null,
      });
    }
  };
