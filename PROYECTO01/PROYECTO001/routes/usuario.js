const { render } = require('ejs');
const express = require('express');
const fs = require('fs');
const { json } = require('body-parser');
const router = express.Router();
const request = require('request');
const cliend = require('../libs/dbconnect');


router.get('/', (req, res) => {
    console.log("Funcionado correctamente");
    cliend.connect(
        async(err) => {
            if (err) {
                console.log("error al conectar");
            }else {
            const collection = cliend.db("colegio").collection("alumnos");
            collection.find()
            .toArray(function(err, result){
                if(result.length == 0)
                   console.log("coleccion sin datos")
                else {
                    res.render('././views/usuario/principal.ejs', {x:result});
                }
                    
            });
        }
        }
    );
    router.get("/formulario", (rep, res) =>{
        res.send("././views/usuario/formulario.ejs");
    });
    router.post("./grabarAlumno", (rep, res) =>{
        cliend.connect(
            async(err) => {
                if (err) {
                    console.log("error al conectar");
                }else {
                const collection = cliend.db("colegio").collection("alumnos");
                collection.insertOne(req.body)

        console.log(req.body);
        }
    });

    });
});


module.exports = router;
