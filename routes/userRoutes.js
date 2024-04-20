import express from 'express';
import { userlogin } from '../controllers/userController.js';

const handleAll = (req, res)=>{
    return res.status(405).json({
        status : 'error',
        messege : 'method not allowed'
    });
}

const router = express.Router();


router.route('/login').post(userlogin).all(handleAll);


export default router;