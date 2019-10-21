'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const PORT = 8000;
const HOST = '0.0.0.0';
const app = express();

const { connectPG } = require('./handlers/handlingPG');
const { connectREDIS } = require('./handlers/handlingREDIS');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', connectPG);
app.get('/status', connectREDIS);

// app.get('/', async (req, res) => {
//   /*
//      Donc c'est ici je dois me co à ma BD postgres, et retourner la data dedans, la base de données s'appelle postgres_db, la table data_postgres et la colonne s'appelle message.
//   Normalement ma requête SQL est celle la select message from data_postgres;
//   */
//   res.send({
//     message: "Hello World"
//   });
// });

//app.get('/status', async (req, res) => { }); ici je dois faire une connexion vers la base de données redis et retourner un autre json


app.listen(PORT, () => {
	console.log(`[+] Node server running on http://${HOST}:${PORT}`);
});
