const DB = require("mongoose");

DB.connect(`mongodb://127.0.0.1:27017/felypbt`, {});

DB.connection.on("connected", () => {
    console.log(`Connected to database!`);
});

DB.connection.on("disconnected", () => {
    console.error("Disconnected from database");
});

//Emote Schema
const ChannelsSchema = new DB.Schema({
    username: String,
    id: String,
    joinedAt: Date,
});

const UserSchema = new DB.Schema({
    id: String,
    username: String,
    firstSeen: Date,
    level: String,
});

exports.users = DB.model("users", UserSchema);
exports.channels = DB.model("channels", ChannelsSchema);