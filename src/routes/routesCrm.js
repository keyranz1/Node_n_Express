const routes = (app) => {
    app.route('/contact')
    .get((req,res)=>{
        res.send('Get request send Successful!!!');
    })
    .post((req,res)=>{
        res.send('POST request sucessfull!!!');
    });

    app.route('/contact/:contactId')
    .put((req,res)=>{
        res.send('PUt request sucessful!!');
    })
    .delete((req,res)=>{
        res.send('DELETE request send sucessfully');
    });
}

export default routes;