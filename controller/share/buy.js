const share=require('../../model/share/share')
const user=require("..//../model/user");

module.exports.buy=async(req,res)=>{
    const {email,share_id,number}=req.body;
    try{
     const user1=await user.findOne({email:email});
     const share1=await share.findById(share_id);
        const cost=share1.cost;
        share1.remaining=share1.remaining-number;
        share1.save();
        user1.share_names.push(share1.land);
        user1.share_count.push(number);
        user1.portfolio+=number*cost;
        user1.save();
        return res.status(201).json({
            success:true,
            message:"share bought successfully",
            share1
        })
        

        }
    
    
    catch(err){
        res.status(500).json({err})
    }
}