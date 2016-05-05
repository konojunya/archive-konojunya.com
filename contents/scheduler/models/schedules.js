var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SchedulesSchema   = new Schema({
	timetable: [
		{
			wday: String,
			subject: String,
			roomNum: String
		}
	],
	createUser: String
});

module.exports = mongoose.model('Schedules', SchedulesSchema);