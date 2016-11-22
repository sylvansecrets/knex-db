const pg = require("pg");
const settings = require("./settings");

const client = new pg.Client(settings.connection);

function findPerson(queryString){
  client.connect(function (err) {
    if (err) console.log('the connection could not be established');
    client.query("SELECT first_name, last_name, birthdate FROM famous_people WHERE first_name LIKE $1::text or last_name LIKE $1::text", ['%'+queryString+'%'], function (err, result) {
      if (err) console.log('selection from database failed');
      let output = result.rows;
      console.log(`Found ${output.length} persons`);
      output.forEach((row) =>{
        console.log(row.first_name + " " + row.last_name, row.birthdate);
      })
      client.end(function (err) {
        if (err) console.log('the connection could not be closed');
      });
    });
  });
}

// see knex for promises, which is so much cleaner

const input = process.argv[2];
if (input){
  findPerson(input);
}