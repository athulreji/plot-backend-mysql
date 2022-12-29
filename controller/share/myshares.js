const connection = require('..//../db')

module.exports.myshares=async(req,res)=>{
  const {user_id}=req.body;
  var async = require('async');
  var shares=[];
  try{
    query = `select * from user_shares where user_id=${user_id} and share_count>0`;
    connection.query(query,function(error,results){
      if(error) throw err;

      async.eachSeries(results,function(data,callback){
        query=`select name from share where id=${data['share_id']}`;
        connection.query(query,function(error,results1){
          if(error) throw err;

          shares.push({
            "name": results1[0]['name'],
            "count": data['share_count']
          })
          callback();
        });
      }, function(err, results) {
        return res.status(200).json({
          success: true,
          shares: shares
        });
      });
    });
  } catch(err){
    console.log(err);
    res.status(500).json({err})
  }
}
