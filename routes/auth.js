const {signup}=require('../controller/auth/signup')
const {login}=require('../controller/auth/login')
const router = require("express").Router();

router.post("/signup", signup);
router.post("/login", login);

module.exports = router;