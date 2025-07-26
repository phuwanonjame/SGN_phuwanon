exports.checkfilesize = (req , res ,next)=>{
    const contentlength = perseInt(req.headers['content-length']|| '0')
    const maxsize = 120*1024*1024

    if(contentlength > maxsize){
         return res.status(413).json({ error: 'File too large (max 120MB)' })
    }
    next()
}