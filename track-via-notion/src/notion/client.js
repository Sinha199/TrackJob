const { Client } = require('@notionhq/client');

require('dotenv').config();

const notion = new Client({
    auth: process.env.TOKEN
});
const getDatabases = async () =>{
    const databases = await notion.databases.list();

    console.log(databases);
}

getDatabases();

//module.exports={
//    notion
//};