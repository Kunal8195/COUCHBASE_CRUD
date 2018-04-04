var Couchbase = require('couchbase')
var Ottoman = require('ottoman')
//var ottoman = require('ottoman');
//var operationTimeout = 120 * 10000;
/*var cluster = new couchbase.Cluster('couchbase://localhost/');
cluster.authenticate('kunal', 'kunal@123');
var bucket = cluster.openBucket('beer-sample');

var N1qlQuery = couchbase.N1qlQuery;

//ottoman.bucket = cluster.openBucket('sample');
//var bucket = ottoman.bucket;*/

var cluster = new Couchbase.Cluster('couchbase://localhost');
cluster.authenticate('kunal','kunal@123');
var bucket = cluster.openBucket('sample');
Ottoman.store = new Ottoman.CbStoreAdapter(bucket, Couchbase);

module.exports = {
	bucket
}