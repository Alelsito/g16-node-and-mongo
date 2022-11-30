const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const PurchaseReasonSchema = Schema({
  name: String
}, {
  timestamps: {
    createdAt: 'created_at', 
    updatedAt: 'updated_at'
  }
})

module.exports = mongoose.model('PurchaseReason',PurchaseReasonSchema)