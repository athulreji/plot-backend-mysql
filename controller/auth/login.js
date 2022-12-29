const connection = require('..//../db')

module.exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    query = `select * from user where email="${email}"`;
    connection.query(query, function(error, data) {
      if(data.length == 0) {
        return res.status(400).json({
          success: false,
          message: "User does not exist",
          data: null,
        });
      }
      else if(data[0].password==password) {
        return res.status(200).json({
          success: true,
          message: "Login successful",
          user_id: data[0].id
        });
      }
      else {
        return res.status(400).json({
          success: false,
          message: "Password incorrect",
          data: null,
        });
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      data: error.message,
    });
  }
};
