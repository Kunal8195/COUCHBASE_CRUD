
/*bucket.manager().createPrimaryIndex(function() {
  bucket.upsert('user:king_arthur', {
    'email': 'kingarthur@couchbase.com', 'interests': ['Holy Grail', 'African Swallows']
  },
  function (err, result) {
  });
});*/

/*bucket.get('user:king_arthur', function (err, result) {
      console.log('Got result: %j', result.value);
});

bucket.query(
      N1qlQuery.fromString('SELECT name FROM sample'),
      ['African Swallows'],
      function (err, rows) {
        console.log("Got rows: %j", rows);
});*/
///  get , replace, insert, remove, lookupin

var ottoman = require('ottoman');
var couchbase = require('couchbase');
var cluster = new couchbase.Cluster('couchbase://127.0.0.1');
cluster.authenticate('kunal','kunal@123')
ottoman.bucket = cluster.openBucket('sample');

var Furniture = ottoman.model('Furniture', {
  name: 'string'
});

var couch = new Furniture({name:'Couch'});
console.log(couch.name); // 'Couch'

var table = new Furniture({name:'Table'});

table.save(function(err) {
  if (err) return console.error(err);
  table.dance();
});