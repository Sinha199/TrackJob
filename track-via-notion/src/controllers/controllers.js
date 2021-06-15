const { notion } = require('../notion/client');

// Get all applications 
const getAllApplications = async (req, res) => {
    const data = await notion.databases.query({
        database_id: process.env.DB_ID
    });

    // Return the data in a page form 
    const pages = data.results.map(page => {
        return{
            id : page.id,
            created : page.created_time,
            updated : page.last_edited_time,
            company: page.properties.Company.title[0].plain_text,
            position: page.properties.Position.select.name,
            status: page.properties.Status.select.name,
            deadline: page.properties['Next Deadline'].date.start,
            jobDescription: page.properties['Job Description'].url,
            comments: page.properties.Comments.rich_text[0].plain_text
        }
    });

    return pages
};

//Get application by id
const getApplication = async (req,res)=>{
    const page = await notion.pages.retrieve({
        page_id:req.params.id
    });
    return{
            id : page.id,
            created : page.created_time,
            updated : page.last_edited_time,
            company: page.properties.Company.title[0].plain_text,
            position: page.properties.Position.select.name,
            status: page.properties.Status.select.name,
            deadline: page.properties['Next Deadline'].date.start,
            jobDescription: page.properties['Job Description'].url,
            comments: page.properties.Comments.rich_text[0].plain_text
    };
};

//filter applications by company

const filterApplications = async (req,res) =>{
    const data = await notion.databases.query({
        database_id : process.env.DB_ID,
        filter :{
            property:'Company',
            text:{
                contains:req.query.company || ''
            }
        }
    });
    const pages = data.results.map(page => {
        return{
            id : page.id,
            created : page.created_time,
            updated : page.last_edited_time,
            company: page.properties.Company.title[0].plain_text,
            position: page.properties.Position.select.name,
            status: page.properties.Status.select.name,
            deadline: page.properties['Next Deadline'].date.start,
            jobDescription: page.properties['Job Description'].url,
            comments: page.properties.Comments.rich_text[0].plain_text
        }
    });

    return pages
};

// add application


module.exports={
    getAllApplications,
    getApplication,
    filterApplications,

};