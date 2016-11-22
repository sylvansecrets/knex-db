"user strict";

const promise = require('bluebird');

const options = {
  promiseLab: promise
};

const pgp = require('pg-promise')(options);
const connectionString = 'postgres://localhost:5432/puppies';
const db = pgp(connectionString);

// add query functions

module.exports = {
  getAllPuppies: getAllPuppies,
  getSinglePuppy: getSinglePuppy,
  createPuppy: createPuppy,
  updatePuppy: updatePuppy,
  removePuppy: removePuppy
};

