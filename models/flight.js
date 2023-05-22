const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    airport: {
        type: String, 
        defualt: 'DEN', 
        enum:['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        defualt: addOneYear(Date.now())
    }
}, {
    timestamps: true
});

function addOneYear(date) {
    const currDate = new Date(date);
    currDate.setFullYear(currDate.getFullYear() + 1);
    return currDate;
  }
  

// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);