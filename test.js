const Twitch = require('dank-twitch-irc'); 
const { channel, username, password } = require('./settings.json');

const client = new Twitch.ChatClient({
    username: username,
    password: password, 
    channels: channel
});

client.use(new Twitch.AlternateMessageModifier(client)); 
client.use(new Twitch.SlowModeRateLimiter(client, 2)); 

const prefix = "'"; 

client.joinAll(["florian_2807"]); 
client.connect();

client.on('ready', async() => {
    console.log('Twitch client connected to chat');
    console.log(channel);
    spam = 0;
});

client.on("PRIVMSG", async(msg) => { 
 
    const vierercombos = ['','']; 
    vierercombos.forEach((combo) => {  
        if(msg.messageText.includes(combo)) {   
            return //client.say(msg.channelName, ''); 
        }
    }) 

    if(!msg.messageText.startsWith(prefix)) return;
    const args = msg.messageText.replace(prefix, "").split(" "); 
    const trigger = args[0].toLowerCase(); 
    
    if (trigger === "spam") {
        try {
        let channel = args[1].toLocaleLowerCase()
        let anzahl = args[2]
        let text = args
        text.splice(0, 3)
        
        for (let schritt = 0; schritt < anzahl; schritt++) {
           client.say(channel, text.join(" "))
        }
        } catch (e) {
            return client.say(msg.channelName, `Error: ${e}`)
        }
    }
    
    if(trigger === "ping") {
        console.log(`[#${msg.channelName}] ${msg.senderUsername} used command: 'ping`)
        const emote = args[1];
        let currentTime = new Date()
        let latency = msg.serverTimestamp - currentTime; 
        if(!emote) return client.say(msg.channelName, `@${msg.senderUsername} 🏓 Ping: ${Math.abs(latency)} ms`); 
        return client.say(msg.channelName, `@${msg.senderUsername} ${emote} 🏓 Ping: ${Math.abs(latency)} ms`); 
    }
})
client.on("USERNOTICE", (msg) => { 
    if (!msg.isSub() && !msg.isResub()) {
      return;
    }
    if (msg.isSub() || msg.isResub()) {   
     //return client.say(msg.channelName, ``)   
    }
  });