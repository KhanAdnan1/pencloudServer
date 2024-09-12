const assyncHandler=(requestHandler)=> {(req,res,next)=>{
    Promise.resolve(requestHandler(req,res,next))
    .catch((err)=>next(err))
}}

// const assyncHandler=(fn)=> async(req, res,next)=>{
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.status(error.code || 5000).json({
//             success:false,
//             message:err.message
//         })

        
//     }
// }