//Line 6
import {asyncHandler} from "../utils/asyncHandler.js";  //import the basic async handler utillity from the utills

const registerUser=asyncHandler(async(req, res) =>{
    res.status(200).json({
        message: "Ok"    
    })
})

export {registerUser}
//Line6 end