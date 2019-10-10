'use strict';

const express = require('express');
const postgres_db = require('./db');
const pool = require('./db').Pool;
const bodyParser = require('body-parser');

// Constants
const PORT = 8000;
const HOST = '0.0.0.0';

// App
const app = express();
//const postgres_url = process.env.DATABASE_URL.toString();
//console.log("Type of url : " + typeof postgres_url);
const { Client } = require('pg');
const client = new Client({
	password: "password",
	user: "postgres",
	host: "db_postgres"
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.get('/', async (req, res) => {
  res.send({
    message: "Hello World"
  });
});

  //await client.connect();
//  await pool.connect((err, client, done) => {
//	if (err) {
//	  return res.status(400).json({error});
//	}
//	const query = 'SELECT * FROM data_sample';
//	client.query(query, (err, res) => {
//	  if (err) {
//	    return res.status(404).send({
//	      status: 'Failed',
//            message: 'No Data found',
//	    });
//	  } else {
//	      return res.status(200).send(res.rows[0]);
//	  }
//	});
//   });
//});


//	const query = 'SELECT * FROM data_sample';
//	try{
//	  const { rows } = await db.query(text, [req.params.id]);
//	  if (!rows[0]) {
//            return res.status(404).send({
//	      status: 'Failed',
//              message: 'No Data found',
//	    });
//	  }
//	  return res.status(200).send(row[0]);
//	} catch(error) {
//	   return res.status(400).send(error);  	
//	}
//        client.query(query, (error, result) => {
//         done();
//          if (error) {
//            res.status(400).json({error});
//	  }
//	  if (result.rows < '1') {
//	    res.sJe petatus(404).send({
//	       status: 'Failed',
//             message: 'No Data found',
//	    });
//	  } else {
//	    res.status(200).send({
//	      status: 'Succesful',
//            message: result.rows,
//            });
//          }
//	});
//  });
//  res.send({
//	message: "Hello World"
//  });
//});

app.listen(PORT, () => {
console.log(`[+] Node server running on http://${HOST}:${PORT}`);
});
