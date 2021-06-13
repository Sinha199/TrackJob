const controller = require('../controllers/controllers');

async function routes(app,opts){
    //show all appplications
    app.route({
        method:'GET',
        url:'/job/applications',
        handler:controllers.getAllApplications
    });

    //get specific application
    app.route({
        method:'GET',
        url:'/job/applications/:id',
        handler:controllers.getApplication
    });

    //filter job application as per the company name
    app.route({
        method:'GET',
        url:'/job/applications/filter',
        handler:controllers.filterApplications
    });

    //add job application
    app.route({
        method:'POST',
        url:'/job/applications',
        handler:controllers.addApplication
    });

    //update application
    app.route({
        method:'PATCH',
        url:'/job/applications/:id',
        handler:controllers.updateApplication
    });
}

module.exports=routes;