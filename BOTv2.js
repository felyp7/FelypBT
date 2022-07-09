require('dotenv').config();

const tmi = require('tmi.js');

const client = new tmi.Client({    

    options: { 
        joinInterval: 300,
        debug: true, 
        messagesLogLevel: "info"
    },
    connection: {
        reconnect: true,
        secure: true
    },
    identity: {
        username: "felyp8",
        password: "oauth:qhoywx8dtxmxbozm5mahovzc60ph0h"
    }, channels: ["elpws", "felypbt"]
});
    
const got = require('got');

const runTime = new Date().toString()

const humanizeDuration = require("humanize-duration");

const bot = 'felypbt'

const rafkList = new Set() //outside  client.on

const rgnList = new Set()

client.afk = new Map()
const afk = client.afk

client.brb = new Map()
const brb = client.brb

client.gn = new Map()
const gn = client.gn

client.food = new Map()
const food = client.food

client.shower = new Map()
const shower = client.shower

client.wc = new Map()
const wc = client.wc




client.connect(process.env.password).catch(console.error);

var block = false;


    client.on("message", async (channel, user, message, self) => {
        if(self) return;
    const args = message.slice(1).split(' ')
    const command = args.shift().toLowerCase();
    const size = args[1]
    const size2 = args[0]

    let isMod = user.mod || user['user-type'] === 'mod';
    let isBroadcaster = channel.slice(1) === user.username;
    let isModUp = isMod || isBroadcaster;
    let isBroadcasterUp = isBroadcaster;




if (channel === '#felypbt') {
    if(message.toLowerCase().startsWith("'a") && user['user-id'] === "162760707") {
      if (!block) {
        let channelTarget = channel.replace("#", "");
        if (args[0]) {
            channelTarget = args[0];
        }

    const got = require("got");

const data = await got(`https://emotes.adamcy.pl/v1/channel/${channelTarget}/emotes/7tv.bttv.ffz.twitch`);
let emotes = [];

JSON.parse(data.body).map((e) => {
  emotes.push(e.code);
});

client.say("elpws", `${emotes.join(" ")}`)
        block = true;
        setTimeout(() => {
            block = false;
        }, (5 * 1000));
    }
}
}



});