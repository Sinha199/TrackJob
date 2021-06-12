const controller = require('../controllers/controllers')

async function routes(app,opts){
    //show all appplications
    app.routes({
        method:'GET',
        url:'job/applications',
        handler:controller.getAllApplications
    });

    //get specific application
    app.routes({
        method:'GET',
        url:'job/applications/:id',
        handler:controller.getApplication
    });

    //filter job application as per the company name
    app.routes({
        method:'GET',
        url:'job/applications/filter',
        handler:controller.filterApplications
    })

    //add job application
    app.routes({
        method:'POST',
        url:'job/applications',
        handler:controller.addApplication
    })

    //update application
    app.routes({
        method:'PATCH',
        url:'job/applications/:id',
        handler:controller.updateApplication
    })
}

module.exports=routes