module.exports = server => {

    const connection = require('../database/connection');
    
    server.get('/', (require, response) => {
        response.json({message: 'Bem vindo ao catálogo de séries e filmes'})
    })

    server.get('/movies', (__, response) => {
        try {
            var mysql_npm = require('mysql2');
        } catch (err) {
            console.log("Essa desgraca nao ta instalada", err);
        }

        const sql = 'SELECT * FROM movies';
        console.log("Entrou aqui 1")
        connection.query(sql, (error, res) => {
            console.log("Entrou aqui")
            if (error) {
                console.log("Entrou em erro", error)
                return error;
            } console.log("movies: ", res);
            response.json(res)
        })
    })
};
