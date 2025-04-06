const mongoose = require('mongoose');
const { Schema, model, models } = mongoose;

const userSchema = new Schema({
    user_id: { type: String, unique: true }, // ID из Pterodactyl
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    balance: { type: mongoose.Schema.Types.Decimal128, default: 0 },

    servers: [{ type: Schema.Types.ObjectId, ref: 'Server' }]
}, {
    timestamps: true
});

module.exports = models.User || model('User', userSchema);
