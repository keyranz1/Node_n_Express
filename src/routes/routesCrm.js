import { runInNewContext } from "vm";
import { addNewContact } from "../controllers/controllersCrm";

const routes = (app) => {
    app.route('/contact')
    .get((req,res,next)=>{
        //Middleware uses 
        console.log(`Request from ${req.originalUrl}`);
        console.log(`Request type: ${req.method}`);
        next();
    },(req, res,next)=>{
        res.send('Get request send Successful!!!');
    })
    //Post endpoint
    .post(addNewContact);
    // .post((req,res)=>{
    //     res.send('POST request sucessfull!!!');
    // });

    app.route('/contact/:contactId')
    .put((req,res,next)=>{
        console.log(req);
        next();
    },(req,res,next)=>{
        res.send('Put request sucessful!!');
    })
    .delete((req,res)=>{
        res.send('DELETE request send sucessfully');
    });
}

export default routes;