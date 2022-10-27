const user=require("..//../model/user");

module.exports.user=async(req,res)=>{
    const {email}=req.body;
    try{
        const user1=await user.findOne({email:email});
        return res.status(201).json({
            success:true,
            message:"user found successfully",
            user1
        })
    }
    catch(err){
        res.status(500).json({err})
    }
}

