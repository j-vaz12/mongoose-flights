const Flight = require('../models/flight');

// You Do - Require the yet to be created reviews controller 
module.exports = {
    create,
}

async function create(req, res) {
    try {
        const flight = await Flight.findById(req.params.id);
        flight.destinations.push(req.body);
        console.log(req.body)
        await flight.save();
        res.redirect(`/flights/${flight._id}`)
    } catch (err) {
        console.log(err)
    }
}
// You Do - Define the Route below


