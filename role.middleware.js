const checkrole = (role)=>{
    return(req,res,next)=>{
        if(req.user.role !== role){
            return res.send("Not a Admin")
        }
        next()
    }
}

export default checkrole