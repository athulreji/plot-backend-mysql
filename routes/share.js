const {buy}=require("..//controller/share/buy")
const {sell}=require("..//controller/share/sell")
const {create}=require("..//controller/share/create")

const {showall}=require("..//controller/share/showall")
const {myshares}=require("..//controller/share/myshares")


const router = require("express").Router();


router.post("/buy", buy);
router.post("/sell", sell);
router.post("/create", create);


router.get("/showall", showall);
router.post("/myshares", myshares);

module.exports = router;
