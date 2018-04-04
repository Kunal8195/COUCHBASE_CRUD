var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Transactions = new Schema({
	productList:{type:Array, required:true},
	totalPrice:{type:Number, required:true},
	totalTax : {type:Number, required:true},
	time: {type: Date, required: true},
	vendorId:{type:String, required: true},
	clientId:{type:String, required: true},
	isApproved:{type:Boolean, required: true}
})