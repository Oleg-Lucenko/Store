import mysql2 from 'mysql2';
import Sequelize from 'sequelize';
import http from "http";
import dotenv from "dotenv";
dotenv.config();


// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'river',
//     database: 'products',
//     password: '4782D3e4',
//     port: 3306
// });

const sequelize = new Sequelize(

    'products',
    'river',
    '4782D3e4',
    {
        host: 'localhost',
        dialect: 'mysql',
        dialectModule: mysql2
    }
);


sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });



const allSmartphones = await sequelize.query('SELECT * FROM `smartphones`', {
  type: Sequelize.SELECT,
});



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





            // connection.query(`select * from smartphones`, function(err, results) {
    
            //     if(err) console.log(err);    
                
                
            // });
            response.end(JSON.stringify(allSmartphones));

            

    // if (request.url === '/smartphones') {

    //     getProducts('Smartphones').then(products => response.end(JSON.stringify(products))); 

    // } else if (request.url === '/laptops') {

    //     getProducts('Laptops').then(products => response.end(JSON.stringify(products)));

    // } else if (request.url === '/headphones') {
    //     getProducts('Headphones').then(products => response.end(JSON.stringify(products)));
    // };
       

});



server.listen(3001);

