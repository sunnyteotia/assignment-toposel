const express =require('express');
const authMiddleware=require('../middleware/auth-middleware');
const { searchUser } = require('../controllers/auth-controller');
const router = express.Router();

router.post('/checkUser',authMiddleware,searchUser)
module.exports=router;