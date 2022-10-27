const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Share= new Schema({
    cost:Number,
    remaining:Number,
    total:Number,
    owner:String,
    land:String,

});

const ShareSchema = mongoose.model("Share", Share);
module.exports = ShareSchema;
