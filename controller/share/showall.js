const connection = require('..//../db')

module.exports.showall=async(req,res)=>{
    try {
        console.log("hello");
        query = `select * from share where total!=booked`;
        connection.query(query, function(error,data) {
            return res.status(200).json({
                success: true,
                message: "shares",
                shares: data,
            });
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            data: null,
        });
    }
}
