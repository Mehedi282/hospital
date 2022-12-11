const mongoose = require('mongoose')

const servicesSchema = new mongoose.Schema({
    serviceId: String,
    serviceName: String,
    charge: String,
    duration: String,
    notes: String,
    
}, {
    timestamps: true
})

module.exports = mongoose.model('MedicalServices', servicesSchema)