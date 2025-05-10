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


  export default async function handler(req, res) {

    const headers = {
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
        'Access-Control-Allow-Headers': "Origin, X-Requested-With, Content-Type, Accept",
        'Content-Type': 'application/json'
    };

    res.writeHead(200, headers);

    const url = new URL(req.url, `http://${req.headers.host}`);
    const category = url.searchParams.get('category');
    // console.log('categ:', category);
    console.log(req.url);
  
    // Временно — проверь, что вообще попадаешь в этот код
    res.status(200).end(JSON.stringify([{ test: true, category }]));

    //     function getProducts(category) {

    //     return new Promise((resolve, reject) => {

    //         mysql.query(`select * from ${category}`, function(err, results) {
    
    //             if(err) console.log(err);    
                
    //             resolve(results);
                
    //         });

    //     });

    // };
  
  
  
    // if (req.url === '/smartphones') {
    //     getProducts('Smartphones').then(products => res.end(JSON.stringify(products)));
    //     mysql.end();
    // }
    // else if (req.url === '/laptops') {        
    //     getProducts('Smartphones').then(products => res.end(JSON.stringify(products)));
    //     mysql.end();
    // }
    // else if (req.url === '/headphones') {
    //     getProducts('Smartphones').then(products => res.end(JSON.stringify(products)));
    //     mysql.end();
    // }
    // else {
    //     res.status(200).end('');
    //     return;
    // }

  
}


// try {
//   const products = await mysql.query(`SELECT * FROM ${table}`);
//   await mysql.end();
//   res.status(200).json(products);
// } catch (err) {
//   console.error(err);
//   res.status(500).json({ error: 'Internal server error' });
// }

// const server =  http.createServer(function(request, response){


//     const headers = {
//         'Access-Control-Allow-Origin':'*',
//         'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
//         'Access-Control-Allow-Headers': "Origin, X-Requested-With, Content-Type, Accept"
//     };

//     response.writeHead(200, headers);



//     function getProducts(category) {

//         return new Promise((resolve, reject) => {

//             mysql.query(`select * from ${category}`, function(err, results) {
    
//                 if(err) console.log(err);    
                
//                 resolve(results);
                
//             });

//         });

//     };

            


//     if (request.url === '/smartphones') {

//         getProducts('Smartphones').then(products => response.end(JSON.stringify(products))); 

//     } else if (request.url === '/laptops') {

//         getProducts('Laptops').then(products => response.end(JSON.stringify(products)));

//     } else if (request.url === '/headphones') {
//         getProducts('Headphones').then(products => response.end(JSON.stringify(products)));
//     } else if (request.url === '/') {
//         response.end(JSON.stringify(''))
//     }
       

// });



// server.listen(3001);




// Main handler function
// let handler = async (event, context) => {
//     // Run your query
//     let results = await mysql.query('SELECT * FROM Smartphones')
  
//     // Run clean up function
//     await mysql.end()
  
//     // Return the results
//     return results
//   }

// handler().then(result => (response.end(JSON.stringify(result))));