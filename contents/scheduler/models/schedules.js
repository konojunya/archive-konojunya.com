var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SchedulesSchema   = new Schema({
	timetable: [
		{
			wday: String,
			subject: String,
			roomNumber: Number
		}
	]
});

module.exports = mongoose.model('Schedules', SchedulesSchema);