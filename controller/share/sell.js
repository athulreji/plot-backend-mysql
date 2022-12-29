const share=require('../../model/share/share')
const user=require("..//../model/user");

module.exports.sell=async(req,res)=>{
    const {user_id,share_id,number}=req.body;
    var share_price;
    try {
        query = `select * from user where id=${user_id}`;
        connection.query(query,function(error,data) {
            if(data.length==0) {
                return res.status(400).json({
                    success: false,
                    message: 'user not found'
                })
            }
        });
        query = `select * from share where id=${share_id}`;
        connection.query(query,function(error,data) {
            if(data.length==0) {
                return res.status(400).json({
                    success: false,
                    message: 'share not found'
                })
            }
            share_price=data[0]['price'];
            query = `select * from user_shares where user_id=${user_id} and share_id=${share_id} and share_count>0`;
            connection.query(query, function(error, data) {
                if(data.length==0) {
                    return res.status(400).json({
                        success: false,
                        message: 'shares not found'
                    });
                }
                else {
                    query =`update user_shares set share_count=${data[0]['share_count']-number}`;
                }
                connection.query(query, function(error,data) {});
                query = `update user set money=money+${number*share_price}, portfolio=portfolio-${number*share_price} where id=${user_id}`;
                connection.query(query, function(error,data) {});
                query = `update share set booked=booked-${number} where id=${share_id}`;
                connection.query(query, function(error,data) {});
                return res.status(200).json({
                    success: true,
                    message: 'share updated'
                });
            });
        });
    }
    catch(err){
        console.log(err);
        res.status(500).json({err})
    }
}
