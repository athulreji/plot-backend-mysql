const connection = require('..//../db')


module.exports.create=async(req,res)=>{
    const {price,total,owner,name,booked,location,description,area}=req.body;
    try {
        query = `select * from user where id="${owner}"`;
        connection.query(query, function(error, data) {
            if(data.length == 0) {
                return res.status(400).json({
                    success: false,
                    message: "Owner does not exist",
                    data: null,
                });
            }
            else {
                query = `insert into share(price,total,owner,name,booked,location,description,area) values(${price},${total},${owner},"${name}",${booked},"${location}","${description}", ${area})`;
                connection.query(query, function(error, data) {
                    return res.status(201).json({
                        success: true,
                        message: "Share created successfully",
                    });
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
}
