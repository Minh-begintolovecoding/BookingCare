let getHomePage=(req,res)=>{
    return res.send("Hello world from Controllers");
}

module.exports={
    getHomePage: getHomePage,
}