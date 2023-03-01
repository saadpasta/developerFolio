'use strict';

/**
 * Module dependencies
 */

const Collection = require('./collection');

class NodeCollection extends Collection {
  constructor(col) {
    super();

    this.collection = col;
    this.collectionName = col.collectionName;
  }

  /**
   * find(match, options, function(err, docs))
   */
  find(match, options, cb) {
    const cursor = this.collection.find(match, options);

    try {
      cursor.toArray(cb);
    } catch (error) {
      cb(error);
    }
  }

  /**
   * findOne(match, options, function(err, doc))
   */
  findOne(match, options, cb) {
    this.collection.findOne(match, options, cb);
  }

  /**
   * count(match, options, function(err, count))
   */
  count(match, options, cb) {
    this.collection.count(match, options, cb);
  }

  /**
   * distinct(prop, match, options, function(err, count))
   */
  distinct(prop, match, options, cb) {
    this.collection.distinct(prop, match, options, cb);
  }

  /**
   * update(match, update, options, function(err[, result]))
   */
  update(match, update, options, cb) {
    this.collection.update(match, update, options, cb);
  }

  /**
   * update(match, update, options, function(err[, result]))
   */
  updateMany(match, update, options, cb) {
    this.collection.updateMany(match, update, options, cb);
  }

  /**
   * update(match, update, options, function(err[, result]))
   */
  updateOne(match, update, options, cb) {
    this.collection.updateOne(match, update, options, cb);
  }

  /**
   * replaceOne(match, update, options, function(err[, result]))
   */
  replaceOne(match, update, options, cb) {
    this.collection.replaceOne(match, update, options, cb);
  }

  /**
   * deleteOne(match, options, function(err[, result])
   */
  deleteOne(match, options, cb) {
    this.collection.deleteOne(match, options, cb);
  }

  /**
   * deleteMany(match, options, function(err[, result])
   */
  deleteMany(match, options, cb) {
    this.collection.deleteMany(match, options, cb);
  }

  /**
   * remove(match, options, function(err[, result])
   */
  remove(match, options, cb) {
    this.collection.remove(match, options, cb);
  }

  /**
   * findOneAndDelete(match, options, function(err[, result])
   */
  findOneAndDelete(match, options, cb) {
    this.collection.findOneAndDelete(match, options, cb);
  }

  /**
   * findOneAndUpdate(match, update, options, function(err[, result])
   */
  findOneAndUpdate(match, update, options, cb) {
    this.collection.findOneAndUpdate(match, update, options, cb);
  }

  /**
   * var cursor = findCursor(match, options)
   */
  findCursor(match, options) {
    return this.collection.find(match, options);
  }

  /**
   * aggregation(operators..., function(err, doc))
   * TODO
   */
}


/**
 * Expose
 */

module.exports = exports = NodeCollection;
