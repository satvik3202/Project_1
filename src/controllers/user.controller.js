//Line 6
import {asyncHandler} from "../utils/asyncHandler.js";  //import the basic async handler utillity from the utills
import { ApiError } from "../utils/ApiError.js";

const registerUser=asyncHandler(async(req, res) =>{
     //steps:
     //1. get user details from frontend(here take from postman)
     //2. validation(no empty usenrmae, email.... are they valid or not(if missed by frontend))  --not empty(main checkup)
     //3. check if user already exists How?(by username or email)
     //4. files are there or not (as avatar is required in schem)
     //5. upload them to cloudinary, is avtar is uploaded on cloudinary or not
     //6. create user object (as mongodb require object data type)  --create entry in db
     //7. remove password and refresh token field from response(as response contains all the details)
     //8. check if response came or not(if not then user is not created)
     //return response (means user is successfully created);


     //1:
     const {fullname, email, username, password} =req.body
     console.log("email: ",email);

    //  if(fullname===""){    //but we have to write so many if statments so use something better;
    //     throw new ApiError(400, "Fullname is required")         //the apierror is imported from the utillity(it needs mainly 2 arguments)
    //  }

    if (
        [fullname,email,username,password].some
    ) {
        
    }
})

export {registerUser}
//Line6 end    