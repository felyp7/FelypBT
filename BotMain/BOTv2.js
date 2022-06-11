require('dotenv').config();

const { ChatClient } = require("dank-twitch-irc"),

{ channel} = require('./settings.json');

let client = new ChatClient({
    username: "mldsbt", 
    password: "oauth:lbdqs19etp8ytexgoz8se0bhzoy4up", 

    rateLimits: "verifiedBot",
    connection: {
        type: "websocket",
        secure: true,
    },
    rateLimits: {
      highPrivmsgLimits: 100,
      lowPrivmsgLimits: 20,
    },
    maxChannelCountPerConnection: 100, 
    connectionRateLimits: {
      parallelConnections: 50, 
      releaseTime: 1000, 
    },
    requestMembershipCapability: false, 
    installDefaultMixins: false,
    ignoreUnhandledPromiseRejections: true, 
  });


  client.connect()
 
client.on('ready', () => {
    client.joinAll(channel)
    console.log(channel)
    console.log("connected")
    console.log()
})

const runTime = new Date().toString()
 
 
let counter = 0;

 
client.on("PRIVMSG", async (msg, self) => {
 
    const prefix = "~";
    const args = msg.messageText.slice(1).split(' ')
    const command = args.shift().toLowerCase();
    const size = args[1]
    const size2 = args[0]
    let isMod = msg.isMod;
    let isBroadcaster = msg.channelName === msg.senderUsername;


    if (msg.messageText.startsWith(prefix)) { 
 
           
        

    if (command === "xd") {
        client.say(msg.channelName, `forsen`)
    }






    }
});