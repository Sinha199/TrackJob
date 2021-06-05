const { notion } = require("./src/notion/client");

const getDatabases = async ()=>{
    const databases = await notion.databases.list();
    console.log(databases);
};

