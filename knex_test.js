"use strict";

const settings = require('./settings');

const knex = require('knex')(settings);

const Promise = require('bluebird');

knex.select('first_name', 'last_name', 'birthdate')
.from('famous_people')
.then(function(rows){
  print(rows);
})
.catch(function(err){
  console.log(err);
})

function addPerson(fn, ln, dob){
  knex.insert({first_name: fn, last_name: ln, birthdate: dob})
  .into('famous_people')
  .then(function(rows){
    console.log(rows[0]);
  })
  .catch(function(error){
    console.log(error)
  })
};

function print(rows){
  console.log('successfully called', rows);
}

const input = process.argv.slice(2);
if (input.length=3){
  addPerson(input[0], input[1], input[2]);
}
