import { createRequire } from "module";
const require = createRequire(import.meta.url);

import http from "http";
import dotenv from "dotenv";
dotenv.config();


const mysql = require('serverless-mysql')({
    config: {
        host: 'crossover.proxy.rlwy.net',
        port: 53764,
        user: 'root',
        database: 'railway',
        password: 'fQoSyCpjxmohzjQcNHJciDgeGZfsRwLm'
    }
  })





const server =  http.createServer(function(request, response){


    const headers = {
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
        'Access-Control-Allow-Headers': "Origin, X-Requested-With, Content-Type, Accept"
    };

    response.writeHead(200, headers);



    // function getProducts(category) {

    //     return new Promise((resolve, reject) => {

    //         connection.query(`select * from ${category}`, function(err, results) {
    
    //             if(err) console.log(err);    
                
    //             resolve(results);
                
    //         });

    //     });

    // };


// async function getData() {

// let result = await mysql.query('SELECT * FROM smartphones');

// return result;

// };

// getData().then(result => (response.end(JSON.stringify(result))));


// Main handler function
let handler = async (event, context) => {
    // Run your query
    let results = await mysql.query('SELECT * FROM Smartphones')
  
    // Run clean up function
    await mysql.end()
  
    // Return the results
    return results
  }

handler().then(result => (response.end(JSON.stringify(result))));


            


    // if (request.url === '/smartphones') {

    //     getProducts('Smartphones').then(products => response.end(JSON.stringify(products))); 

    // } else if (request.url === '/laptops') {

    //     getProducts('Laptops').then(products => response.end(JSON.stringify(products)));

    // } else if (request.url === '/headphones') {
    //     getProducts('Headphones').then(products => response.end(JSON.stringify(products)));
    // };
       

});



server.listen(3001);

