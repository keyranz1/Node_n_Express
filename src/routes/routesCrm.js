import { runInNewContext } from "vm";
import { addNewContact, getAllContacts, getContactWithId, updateContact, deleteContact} from "../controllers/controllersCrm";

const routes = (app) => {
    app.route('/contact')
    .get((req,res,next)=>{
        //Middleware uses 
        console.log(`Request from ${req.originalUrl}`);
        console.log(`Request type: ${req.method}`);
        next();
    }, getAllContacts)
    // (req, res,next)=>{res.send('Get request send Successful!!!');}
    //Post endpoint
    .post(addNewContact);
    // .post((req,res)=>{
    //     res.send('POST request sucessfull!!!');
    // });

    app.route('/contact/:contactId')
    //get specific contact
    .get(getContactWithId)

    //put request
    .put(updateContact)

    //delete request
    .delete(deleteContact);
}

export default routes;