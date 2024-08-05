exports.getProducts=(req,res,next)=>{
res.json({
    success :true,
    message : 'Get product working!'
})
}
exports.getsingleProducts=(req,res,next)=>{
    res.json({
        success :true,
        message : 'Get single product working!'
    })
    }