const mongoose = require('mongoose');
const { Schema, model, models } = mongoose;

const serverSchema = new Schema({
    pteroServerId: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },

    name: { type: String },
    status: { type: String, enum: ['active', 'paused', 'stopped', 'deleted'], default: 'active' },

    last_billed_at: { type: Date },
    price: { type: Number },
    cpu: { type: Number },
    ram: { type: Number },
    storage: { type: Number }
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

module.exports = models.Server || model('Server', serverSchema);
