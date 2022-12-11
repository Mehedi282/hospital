const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    username: String,
    password: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('admin', adminSchema)