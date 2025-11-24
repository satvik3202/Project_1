//Line 7
import multer from 'multer'

const storage = multer.diskStorage({    //tells multer to store uploaded files on local storage(server)
    //then we need two things file destinantion and file name(to be stored on the server)

    destination: function(req, file, cb){   //multer calls this function evrytime a file is uploaded
        cb(null, './public/temp')    //tells no error and store on ./publi/temp
    },
    filename: function(req, file,cb){
        // const uniqueSuffix =Date.now() + '-' + Math.round(Math.random() * 1E9)    //pretty advanced not neccessary
        // cb(null, file.fieldname + '-' + uniqueSuffix)
        cb(null, file.originalname)   //save the file using the same name as the user uploaded
    }
})

export const upload=multer({storage})
//Line 7 end