const { default: mongoose } = require("mongoose");
require('dotenv').config();


const gamesSchema = new mongoose.Schema({
    id:{type:String, required:true},
    name: {type:String, required:true},
    coverImage: {type:String,required:true},
    platforms: { type: String, required: true},
    startingPrice: { type: Number, required:true},
    playerCount: {type: Number, required:true},
    specs: {
        cpu: { type: String, required:true},
        ram: { type: String, required:true},
        storage: { type: String, required:true}
    },
    features: { type: [String], default: [] },
    status: {type: String, required: true},
    href: {type: String, required:true}
});

const tariffPlanSchema = new mongoose.Schema({
    id:{type:String, required:true},
    name: {type:String, required:true},
    image: {type:String,required:true},
    status: { type: String, required: true},
    cpu: { type: String, required:true},
    price: { type: Number, required:true},
    specs: {
        ram: { type: String, required:true},
        storage: { type: String, required:true},
        network: { type: String, required:true},
        databases: { type: Number, required:true},
        allocations: { type: Number, required:true},
        backups: { type: Number, required:true},
        additionalServers: { type: Number, required:true},
    },
    features: { type: [String], default: [] },
    playerCount: {type: Number, required:true},
});

const GamesListing = mongoose.model('User', gamesSchema);
const TariffPlan = mongoose.model('User', tariffPlanSchema);

module.exports = {
    connectToDb: async () => {
        await mongoose.connect(process.env.MONGODB_URI)
    },
    GamesListing,
    TariffPlan
};

