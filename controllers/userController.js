const db = require('../bd/bd');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registration = (request, response) => {
    const { username,name, second_name,email, password } = request.body;

    console.log(request.body);

    bcrypt.hash(request.body.password, 10, function(error, hash){
        if(error){
            response.status(400).send(error);
        }
        else{
            console.log(hash)
            db.pool.query("INSERT INTO users (username, name, second_name, email, password) VALUES($1, $2, $3, $4, $5)", [ username,name, second_name,email, hash], (error, results) => {
                if (error) {
                  response.status(401).send(error.stack);
                }
                else{
                  response.status(201).send(results);
                }
            });
        }
    });    
}

module.exports = {
    registration
}