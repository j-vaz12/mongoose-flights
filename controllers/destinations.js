const Flight = require('../models/flight');

// You Do - Require the yet to be created reviews controller 
module.exports = {
    create,
}

async function create(req, res) {
    const flight = await Flight.findById(req.params.id);
    flight.destinations.push(req.body);
    try {
        await flight.save();
    } catch (err) {
        console.log(err)
    }
    res.redirect(`/flights/${flight._id}`)
}
// You Do - Define the Route below


