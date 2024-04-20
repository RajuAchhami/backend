




export const userlogin = (req, res)=>{
    console.log(req.body);
    return res.status(200).json({
        status : 'success',
        data: 'Successfull loged In' 
    });
};