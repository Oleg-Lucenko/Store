import mysql from 'serverless-mysql';
import http from "http";
import dotenv from "dotenv";
dotenv.config();


const connection = mysql({
    config: {
        host: '127.0.0.1',
        user: 'river',
        database: 'products',
        password: '4782D3e4'
    }
});






const server =  http.createServer(function(request, response){


    const headers = {
        'Access-Control-Allow-Origin':'<origin>',
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


function getData() {

return new Promise((resolve, reject) => {

       connection.query(`select * from smartphones`, function(err, results) {
   
           if(err) console.log(err);    
           
           resolve(results);
           
       });

   });

};

getData().then(result => (response.end(JSON.stringify(result))));
            

    // if (request.url === '/smartphones') {

    //     getProducts('Smartphones').then(products => response.end(JSON.stringify(products))); 

    // } else if (request.url === '/laptops') {

    //     getProducts('Laptops').then(products => response.end(JSON.stringify(products)));

    // } else if (request.url === '/headphones') {
    //     getProducts('Headphones').then(products => response.end(JSON.stringify(products)));
    // };
       

});



server.listen(3001);

