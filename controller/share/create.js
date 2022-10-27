const share=require('../../model/share/share')

module.exports.create=async(req,res)=>{
    const {cost,total,owner,land,remaining,location}=req.body;
    try{
        const share1=new share({
            cost,
            total,
            owner,
            land,
            remaining,
            location
            
        })
      
        await share1.save();
        return res.status(201).json({
            success:true,
            message:"share created successfully",
            share1
        })

    }
    catch(err){
        res.status(500).json({err})
    }
}
