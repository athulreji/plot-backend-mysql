const connection = require('..//../db')

module.exports.user=async(req,res)=>{
    const {email}=req.body;
    try{
        query = `select * from user where email="${email}"`;
        connection.query(query, function(error, data) {
            if(data.length == 0) {
                return res.status(400).json({
                    success: false,
                    message: "User does not exist",
                    data: null,
                });
            }
            else {
                return res.status(201).json({
                    success:true,
                    message:"user found successfully",
                    "user1":data[0],
                });
            }
        });
    }
    catch(err){
        res.status(500).json({err})
    }
}

