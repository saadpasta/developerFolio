'use strict';

const utils = require('../lib/utils');
const assert = require('assert');
const debug = require('debug');

let mongo;
try {
  mongo = new require('mongodb');
} catch (e) {
  debug('mongo', 'cannot construct mongodb instance');
}

describe('lib/utils', function() {
  describe('clone', function() {
    it('clones constructors named ObjectId', function(done) {
      function ObjectId(id) {
        this.id = id;
      }

      const o1 = new ObjectId('1234');
      const o2 = utils.clone(o1);
      assert.ok(o2 instanceof ObjectId);

      done();
    });

    it('clones constructors named ObjectID', function(done) {
      function ObjectID(id) {
        this.id = id;
      }

      const o1 = new ObjectID('1234');
      const o2 = utils.clone(o1);

      assert.ok(o2 instanceof ObjectID);
      done();
    });

    it('clones RegExp', function(done) {
      const sampleRE = /a/giy;

      const clonedRE = utils.clone(sampleRE);

      assert.ok(clonedRE !== sampleRE);
      assert.ok(clonedRE instanceof RegExp);
      assert.ok(clonedRE.source === 'a');
      assert.ok(clonedRE.flags === 'giy');
      done();
    });

    it('clones Buffer', function(done) {
      const buf1 = Buffer.alloc(10);

      const buf2 = utils.clone(buf1);

      assert.ok(buf2 instanceof Buffer);
      done();
    });

    it('does not clone constructors named ObjectIdd', function(done) {
      function ObjectIdd(id) {
        this.id = id;
      }

      const o1 = new ObjectIdd('1234');
      const o2 = utils.clone(o1);
      assert.ok(!(o2 instanceof ObjectIdd));

      done();
    });

    it('optionally clones ObjectId constructors using its clone method', function(done) {
      function ObjectID(id) {
        this.id = id;
        this.cloned = false;
      }

      ObjectID.prototype.clone = function() {
        const ret = new ObjectID(this.id);
        ret.cloned = true;
        return ret;
      };

      const id = 1234;
      const o1 = new ObjectID(id);
      assert.equal(id, o1.id);
      assert.equal(false, o1.cloned);

      const o2 = utils.clone(o1);
      assert.ok(o2 instanceof ObjectID);
      assert.equal(id, o2.id);
      assert.ok(o2.cloned);
      done();
    });

    it('clones mongodb.ReadPreferences', function(done) {
      if (!mongo) return done();

      const tags = [
        { dc: 'tag1' }
      ];
      const prefs = [
        new mongo.ReadPreference('primary'),
        new mongo.ReadPreference(mongo.ReadPreference.PRIMARY_PREFERRED),
        new mongo.ReadPreference('secondary', tags)
      ];

      const prefsCloned = utils.clone(prefs);

      for (let i = 0; i < prefsCloned.length; i++) {
        assert.notEqual(prefs[i], prefsCloned[i]);
        if (prefs[i].tags) {
          assert.ok(prefsCloned[i].tags);
          assert.notEqual(prefs[i].tags, prefsCloned[i].tags);
          assert.notEqual(prefs[i].tags[0], prefsCloned[i].tags[0]);
        } else {
          assert.equal(prefsCloned[i].tags, null);
        }
      }

      done();
    });

    it('clones mongodb.Binary', function(done) {
      if (!mongo) return done();
      const buf = Buffer.from('hi');
      const binary = new mongo.Binary(buf, 2);
      const clone = utils.clone(binary);
      assert.equal(binary.sub_type, clone.sub_type);
      assert.equal(String(binary.buffer), String(buf));
      assert.ok(binary !== clone);
      done();
    });

    it('handles objects with no constructor', function(done) {
      const name = '335';

      const o = Object.create(null);
      o.name = name;

      let clone;
      assert.doesNotThrow(function() {
        clone = utils.clone(o);
      });

      assert.equal(name, clone.name);
      assert.ok(o != clone);
      done();
    });

    it('handles buffers', function(done) {
      const buff = Buffer.alloc(10);
      buff.fill(1);
      const clone = utils.clone(buff);

      for (let i = 0; i < buff.length; i++) {
        assert.equal(buff[i], clone[i]);
      }

      done();
    });

    it('skips __proto__', function() {
      const payload = JSON.parse('{"__proto__": {"polluted": "vulnerable"}}');
      const res = utils.clone(payload);

      assert.strictEqual({}.polluted, void 0);
      assert.strictEqual(res.__proto__, Object.prototype);
    });
  });

  describe('merge', function() {
    it('avoids prototype pollution', function() {
      const payload = JSON.parse('{"__proto__": {"polluted": "vulnerable"}}');
      const obj = {};
      utils.merge(obj, payload);

      assert.strictEqual({}.polluted, void 0);
    });
  });
});
