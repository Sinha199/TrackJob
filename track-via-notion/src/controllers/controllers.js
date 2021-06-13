const { notion } = require('../notion/client');

const getAllApplications = async(req,res) => {
    const data = await notion.databases.query({
        database_id:process.env.DB_ID
    })
    console.log(data);
};

getAllApplications();