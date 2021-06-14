const { Client } = require('@notionhq/client');

require('dotenv').config();

const notion = new Client({
    auth : process.env.TOKEN
});


module.exports={
    notion
 }