'use strict';

const assert = require('assert');
const mongo = require('mongodb');

const uri = process.env.MQUERY_URI || 'mongodb://localhost/mquery';
let client;
let db;

exports.getCollection = function(cb) {
  mongo.MongoClient.connect(uri, function(err, _client) {
    assert.ifError(err);
    client = _client;
    db = client.db();

    const collection = db.collection('stuff');

    // clean test db before starting
    db.dropDatabase(function() {
      cb(null, collection);
    });
  });
};

exports.dropCollection = function(cb) {
  db.dropDatabase(function() {
    client.close(cb);
  });
};
