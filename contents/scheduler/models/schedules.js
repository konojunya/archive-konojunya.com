var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SchedulesSchema   = new Schema({
	g: [
		{
			wday: String,
			subject: String,
			roomNum: String
		}
	],
	k: [
		{
			wday: String,
			subject: String,
			roomNum: String
		}
	],
	s: [
		{
			wday: String,
			subject: String,
			roomNum: String
		}
	],
	m: [
		{
			wday: String,
			subject: String,
			roomNum: String
		}
	],
	f: [
		{
			wday: String,
			subject: String,
			roomNum: String
		}
	],
	createUser: String
});

module.exports = mongoose.model('Schedules', SchedulesSchema);