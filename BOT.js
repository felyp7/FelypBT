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
        username: process.env.username,
        password: process.env.password
    },
    channels: ["opat04", "meiiodaas", "xpatrck", "yamatosdeath1", "sneeeze_", "fookstee", "carltincan", "turtoise", "anniiikaa", "bobthebuilder_98", "pajlada", "masenka12", "scarder_", "lukyjuk", "godfelyp1", "lordevid", "kawanpls", "speedster05", "feelsdonkman", "lul85xd__"]
});
const got = require('got');

const runTime = new Date().toString()

const humanizeDuration = require("humanize-duration");

const bot = 'mldsbt'

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

    const args = message.slice(1).split(' ')
    const command = args.shift().toLowerCase();
    const size = args[1]
    const size2 = args[0]

    let isMod = user.mod || user['user-type'] === 'mod';
    let isBroadcaster = channel.slice(1) === user.username;
    let isModUp = isMod || isBroadcaster;
    let isBroadcasterUp = isBroadcaster;

if(message.toLowerCase().startsWith("'commands") && command === 'commands') {
        if (!block) {
            client.say(channel, `FeelsOkayMan 👉 forsen.ga `);
            block = true;
            setTimeout(() => {
                block = false;
            }, (5 * 1000));
        }
    }

    
    if(message.toLowerCase().startsWith("'god") && command === 'god' && channel === '#meiiodaas') {      
        if (!block) {
        client.action(channel, 'https://www.youtube.com/shorts/tFnWj2S1xQU GodIsGoodGodIsGreat')
        block = true;
        setTimeout(() => {
            block = false;
        }, (5 * 1000));
    }
}




    if (message.startsWith("(cookie reminder) mldsbt, eat cookie please :) 🍪") && user['user-id'] === "229225576") {
        client.say(channel, '!cookie')
    }


if (message.toLowerCase().startsWith("'restart") && user.username === 'meiiodaas' ) {
    process.exit()
}

    if (message.toLowerCase().startsWith("'vanish")) {
        if (isModUp) {
            client.action(channel, "Can't timeout broadcaster/moderator.")
            ;return;
        }
        client.say(channel, `/timeout @${user.username} 1`)

    }

    if (user['user-id'] == '713320280' || user['user-id'] == '162760707') {
        if (message.toLowerCase().startsWith("'echo")) {
            client.say(channel, `${args.join(" ")}`)
        }
    }
    
    if (user['user-id'] == '713320280' || user['user-id'] == '162760707') {
        if (message.toLowerCase().startsWith("'say")) {
            
            const [channelTarget, ...restArgs] = args;
            const text = restArgs.join(' ');

            client.say(`${channelTarget}`, `${restArgs.join(" ")}`)
        }
    }

    if (isModUp || user["user-id"] == "162760707") {
        if (message.toLowerCase().startsWith("'pyramid") && command === "pyramid") {
            if (!block) {
                if (!args[1] || isNaN(parseInt(args[0]))) {
                    return client.say(channel, `Usage: 'pyramid 1-100 message`);
                }
                if (parseInt(args[0]) < 1 || parseInt(args[0]) > 100) {
                    return client.say(channel, `Height needs to be between 1 and 100`);
                }
                if (parseInt(args[0]) > parseInt(500 / (args.slice(1).join(" ").length + 1))) {
                    return client.say(channel, `Max possible height for message is ${parseInt(498 / (args.slice(1).join(" ").length + 1))}`);
                }
                let msg = "";
                let phrase = args.slice(1).join(" ");
                block = true;
                setTimeout(() => {
                    block = false;
                }, 5 * 1000);
                for (let i = 1; i < parseInt(args[0]) * 2; i++) {
                    (function (ind) {
                        setTimeout(function () {
                            if (i < parseInt(args[0]) + 1) msg += `${phrase} `;
                            else msg = msg.substring(phrase.length + 1);
                            client.say(channel, `${msg}`);
                        }, 70 * (ind + 1));
                    })(i);
                }
            }
        }
    }


if(isModUp || user['user-id'] == '162760707') { 
    if (message.toLowerCase().startsWith("'spam")) {
        if (!block) {
            if (size2 > 300) {
                client.say(channel, 'the maximum size is 300')
                 ;return;}
            for (var i = 0; i < args[0]; i++) {
                client.say(channel, args.slice(1).join(" "))

                if (i > args[0]) break;
            }
            
            block = true;
            setTimeout(() => {
                block = false;
            }, (5 * 1000));
        }
    }
}

    

    if (message == "'xqcl") {
        if (!block) {
            client.action(channel, `⣿⣿⣿⣿⠿⠛⣛⣛⠛⠿⣿⣿⡿⠿⠿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⠋⢁⣾⣿⣿⣿⣿⣷⣦⣭⣶⣿⣿⣿⣷⣄⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⡿⠁⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣜⢿⣿⣿⣿⣿⣿⣿⣿⣿ ⢀⣤⣤⠉⠄⣀⣀⣀⠈⠉⢙⣿⣿⣿⣿⠛⠋⠉⠉⠉⠄⠙⣿⣿⣿⣿⣿⣿⣿ ⢸⡿⠛⠁⠄⠄⠄⠄⠄⠄⠄⢹⣿⣿⠋⠄⡄⠈⠉⠙⠻⡆⢹⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣶⣦⣤⡤⠄⣀⣠⣼⣿⣿⣦⣀⣤⣤⣤⣴⠖⣠⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⢉⡙⣿⣿⣿⣿⣿⣿⣿⡇⢿⣿⣿⣿⣿⣿⣿⣿⣿ ⠙⣿⡿⠛⠿⠿⠿⠿⠿⣧⠉⣹⣿⣿⣿⣿⣿⣿⣿⣿⡌⢿⣿⣿⣿⣿⣿⣿⣿ ⠄⠘⠿⠷⠤⢄⣀⡀⠄⢀⣀⣀⣉⣁⣈⣉⣉⣉⣉⡛⢁⣾⣿⣿⣿⣿⣿⣿⣿ ⣀⣤⣤⣤⣤⣤⣀⠉⠻⢿⣿⣿⡿⠿⠿⠿⠿⠿⢋⣥⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣦⡀⠉⢁⣤⣴⣶⣶⣦⣄⡀⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⡿⠿⢿⣿⣿⣿⣿⣿⣷⡄⠈⣿⣿⣿⣿⣿⣿⣷⠄⠄⣿⣿⣿⣿⣿⣿⣿⣿ ⢀⣤⣶⣤⡈⠹⣿⣿⣿⣿⣿⠟⠉⣉⠙⠻⣿⣿⣿⠁⠄⣾⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⡿⠛⢁⣰⣿⣿⣿⣿⣿⠄⢻⣿⣿⡆⠈⢻⠇⠄⢰⣿⣿⣿⣿⣿⣿⣿⣿ `)
            block = true;
            setTimeout(() => {
                block = false;
            }, (5 * 1000));
        }
    }


    

    if (message == "'thejungle") {
        if (!block) {
            client.action(channel, `The Jungle isnt just a place; its a sanctuary where we put our problems aside and enjoy watching the gaming warlord juicer. Youve changed more lives than you think Mr. Cow, xqcL   `)
            block = true;
            setTimeout(() => {
                block = false;
            }, (5 * 1000));
        }
    }



   
    if (message == "'tf") {
        if (!block) {
            client.action(channel, `⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⡿⠛⠛⠛⠛⢛⡛⠛⠛⠛⠛⠛⠛⠛⠛⠿⠿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⡿⠋⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣶⣤⣉⠛⢿⣿⣿ ⣿⣿⣿⢁⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡄⣿⣿ ⣿⠟⢁⣚⣻⣿⣿⣿⡟⢁⣀⣀⡲⢦⡝⢿⣿⣿⠿⠛⠉⠉⣙⣻⣿⣿⣷⣌⠻ ⢁⣴⡿⣩⣶⠶⣭⣝⣛⣛⣭⣿⣿⣷⣶⣿⣿⣿⡆⢾⣿⣿⠿⠟⣻⣟⣿⣿⡆ ⠈⣿⣇⣿⣭⠰⣮⣍⡛⠿⢿⣿⣿⡏⣼⢿⢿⣿⣿⡶⣉⣻⣿⣿⠏⢻⣿⣿⠃ ⣦⡈⢻⣿⣿⣧⡈⣝⡉⠻⢷⣶⡌⣩⣛⣛⠻⠿⠥⠾⠿⡛⢋⣁⣄⢸⣿⠃⣼ ⣿⣿⣆⢹⣿⣿⣷⣍⠳⣶⣶⣤⢀⣙⠛⠛⠉⠛⠛⠘⠛⠛⠉⠁⠄⢸⣿⠄⣿ ⣿⣿⣿⣦⡙⢿⣿⣿⣷⣮⣙⠛⢼⣿⣿⡇⣶⣶⡆⣤⣤⣠⠄⡤⠄⣼⣿⠄⣿ ⣿⣿⣿⣿⣿⣦⣈⠛⠿⣿⣿⣿⣷⣶⣮⣥⣬⣭⣥⣭⣤⣤⣶⣶⣿⣿⣿⡄⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⣌⡙⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⣬⣍⣉⡛⠛⠿⠿⠿⠿⠿⠿⠛⣁⣼⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣶⣶⣶⣶⣿⣿⣿⣿

        `)
            block = true;
            setTimeout(() => {
                block = false;
            }, (5 * 1000));
        }
    }




    if (message == "'okayeg") {
        if (!block) {
            client.action(channel, `⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠉⠉⠉⣩⡏⡘⣯⡈⠙⢿⣿⣛⣩⣤⣤⣭⣽⣿⣿ ⣿⣿⣿⣿⣿⣿⡿⠛⠉⠄⠄⠄⠄⠄⢿⡇⢡⣿⣿⣦⠈⠑⣿⣿⣿⠉⣿⣿⣿⣿ ⣿⣿⣿⡿⠿⠋⠄⠄⠄⠄⠄⠄⠄⠄⠄⠉⠚⠿⢿⡿⠄⠄⠉⢿⣟⠄⣿⣿⣿⣿ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠹⠾⠿⠋⠄⣿ ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢸ ⢠⣶⣶⠢⣄⣀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢸ ⠘⢿⣿⣷⣮⡹⣷⣦⡀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠘ ⠄⠄⠈⢿⣿⣿⣎⡛⠿⣷⣦⣀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄ ⣦⣤⣀⠄⠈⠛⠿⣿⣷⣮⣍⣛⠿⢿⣶⣶⣦⣄⣀⡀⠄⠄⠄⠄⠄⠄⠄⠄⠄⣠ ⣿⣿⣿⣿⣶⣦⣄⡀⠉⠉⠉⠛⠻⢷⣦⣭⣭⣙⣛⣛⠷⠶⠤⠤⠤⠤⠤⠤⠤⢎ ⣿⡟⣩⣶⣶⣦⡙⢿⣷⣦⣄⡀⠄⠄⠈⠉⠉⠉⠛⠛⠛⠛⠛⠿⠿⢿⣿⡿⢿⣿ ⡟⣸⣿⣿⣿⣿⣿⡄⣿⣿⣿⣿⣷⣶⣤⣤⣀⡀⠄⠄⠄⠄⠄⠄⢀⣀⣰⣾⣿⣿ ⡇⣿⣿⣿⣿⣿⣿⣿⢸⣿⠋⣭⡙⢿⠋⣩⡝⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣷⡘⢿⣿⣿⣿⠿⣃⣿⣿⡀⠶⠒⣾⡀⠻⠏⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣶⣮⣭⣶⣾⣿⣿⣿⣿⣿⣿⣿⣍⣉⣁⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿`)
            block = true;
            setTimeout(() => {
                block = false;
            }, (5 * 1000));
        }
    }

    if (message == "'lule") {
        if (!block) {
            client.action(channel, `⠋⣁⣀⣀⡈⠙⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇ ⣿⣿⢟⣛⣿⣿⡲⣾⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠿⠛⠛⠛⠛⠛⠻⣿⣿⣿⡇ ⣿⡇⠾⠛⠛⠛⠛⠄⢻⣿⣿⣿⣿⡍⠉⠉⠄⠄⠄⢀⣤⢤⣄⣀⠄⠄⠈⠉⠄ ⣿⣥⣤⣄⣀⣠⣶⣀⣠⣿⣿⣿⡿⠁⠄⠄⣀⣐⠊⠛⠛⠻⠖⠄⠉⢀⡀⢀⡀ ⣿⣿⣿⣿⣿⣛⣉⣵⣿⣿⣿⡿⠁⠄⠄⢲⣿⣿⣿⣳⠂⠒⠄⠄⠄⠄⠠⠾⠿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡦⠄⠄⠈⠙⠻⣿⣿⣿⣶⣶⣶⣶⣾⣿⣿⣿ ⣿⣿⣿⣿⣿⡿⢻⣿⣿⣿⡿⠋⠄⠄⠄⠄⠄⠄⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⠏⣰⡿⠛⠛⠃⠄⢠⠄⠄⠄⠄⠄⠄⠄⠄⠘⢿⣿⣿⣿⣿⣿⣿⣿ ⠙⣿⣿⣿⣴⡿⠄⠄⠄⠄⠘⠛⠒⠄⠄⠐⠂⠄⠄⠄⠄⠈⢻⣿⣿⣿⣿⢿⣿ ⠠⣿⣿⣿⣿⣷⡀⢠⣶⣾⣿⣿⣿⠿⡿⢿⡧⣶⢤⠄⠄⠄⠄⣻⣿⣿⣿⣿⣿ ⣶⣿⣿⣿⡟⢨⠙⠄⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⣰⣿⡀⣿⣿⣿⣿⣿⣿ ⢿⣿⢟⠹⡁⣼⡀⣄⢀⣀⠐⠠⢄⣀⣀⣴⣶⣷⣶⣿⣿⣿⣿⡿⠻⣿⣿⣿⣿ ⠈⠂⠄⠄⠠⢿⣿⡘⣺⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠄⠄⠻⠾⡛ ⠄⠄⠄⠄⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⠄⠄⠄⠄⠄⠂`)
            block = true;
            setTimeout(() => {
                block = false;
            }, (5 * 1000));
        }
    }


if (message.toLowerCase().startsWith("'ping") && command === 'ping') {  
    if (!block) {
    const getUptime = new Date().getTime() - Date.parse(runTime)
    const botUptime = humanizeDuration(getUptime, { round: true })
    

    

    let channelTarget = channel.replace("#", "");

    const got = require("got")

        client.ping(channel).then(function (data) {
            console.log(data);
        
        
            client.action(channel, `FeelsDankMan 🏓 Pong! Latency is ${Math.floor(Math.round(data * 1000))}ms | Bot Uptime: ${botUptime} | RAM: ${Math.round(process.memoryUsage().rss / 1024 / 1024)}mb | Channels: ${client.getChannels().length}`)
        
            block = true;
            setTimeout(() => {
                block = false;
                }, (5 * 1000));
            })
        }
    }

   

    if (message == "'pingpong") {
        if (!block) {
            client.action(channel, `ppPing ppPong 🏓 PingPong `)
            block = true;
            setTimeout(() => {
                block = false;
            }, (5 * 1000));
        }
    }

    

    if (message == "'copetix") {
        if (!block) {
            client.action(channel, `⠈⠀⠐⠠⠐⡀⡂⡢⡂⢆⠪⡘⠤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⢀⢂⢅⢎⢢⢊⢔⢕⡎⣗⡵⣕⣵⡱⡠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⢰⢱⢕⣗⢷⣽⣾⣯⣿⣿⣿⣿⡿⣿⡄⠋⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⢜⢜⢵⢝⣽⢯⣿⣿⣟⣿⣾⣿⣿⣿⣿⠌⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠌⢆⢇⢟⣞⣿⣻⣽⣿⣿⣿⣿⣿⣿⣿⣷⡀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⡘⠔⢅⢣⢳⣯⣿⣿⣿⣿⣿⣿⣿⡿⡾⡿⠵⢀⠨⡀⠀⠀⠀⠀⠀⠀⠀���⠀ ⣈⠪⠨⡂⠫⡪⡓⣝⢽⢙⠿⣽⡺⣺⣽⣞⡾⡢⡢⠅⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠹⣎⢌⡢⡑⣝⣟⣿⣽⡎⢜⣿⣝⣿⣽⣯⢯⠂⠈⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠂⠝⣷⡹⢮⣻⣽⡿⡾⣹⢮⣻⣿⣾⣽⣽⢧⠃⠀⠀⠀⠀⡀⠀⠀⡀⠀⠀⠀ ⠀⠡⢊⢫⢷⡽⣾⢾⣟⠝⡾⠽⣿⢿⣻⡽⡕⣠⣶⢿⣻⡷⡾⠺⠠⠀⠀⠀⠀ ⠐⡈⠀⠕⡍⢯⢟⡿⡽⣻⢽⣻⡽⡿⣽⢧⣓⡟⡥⡧⡶⡴⣲⢽⡲⣲⣲⢤⡂ ⢸⢶⡈⡐⠨⢊⢗⡵⣟⣞⣷⣟⣿⢿⡯⢃⡽⡇⢯⣻⢮⣣⡵⡶⡮⣵⣲⣺⡂ ⠀⠍⢷⣔⠈⡀⠂⡝⣵⣳⣳⣏⣟⣿⡃⣾⡏⠀⣟⢾⢽⣺⢽⢽⢽⣺⣺⣺⡂ ⠀⠡⡡⢙⠷⢶⣦⣤⣁⢓⠵⡻⣺⡵⣟⠏⠂⡀⠹⠽⠵⠼⠭⠭⠽⠾⠵⠗⠇ `)
            block = true;
            setTimeout(() => {
                block = false;
            }, (5 * 1000));
        }
    }

    if (message == "'trihard") {
        if (!block) {
            client.action(channel, `⣿⣿⣿⣿⣿⣿⡿⢫⣍⣭⣥⣶⣶⡶⠶⣭⣴⣬⣩⣍⣛⢻⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⠟⣥⣿⣭⡿⠿⠿⠟⠿⠁⠉⢻⣿⣿⣿⣿⣷⣬⠹⣿⣿⣿⣿⣿ ⣿⣿⣿⡿⢃⣾⡿⠟⠉⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⠛⠻⢿⣷⠸⣿⣿⣿⣿ ⣿⣿⣿⡲⣿⣯⠁⠄⠄⠄⣀⣀⠄⠄⢀⣀⣀⠄⠄⠄⠄⠄⠄⠈⠃⠹⣿⣿⣿ ⣿⣿⣿⠃⠼⠄⠄⠄⠄⠾⢿⣿⣿⣿⣿⣿⣿⣿⣿⣦⠤⠄⠄⠄⠄⠄⣿⣿⣿ ⣿⣿⣿⠄⠄⠄⠄⠄⠄⠄⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠄⠄⠄⠄⠄⣿⣿⣿ ⣿⣿⣿⣿⣇⣤⣄⠄⠄⣠⣬⣽⣿⣿⣿⣿⣿⣿⣿⣿⣧⡀⠄⠄⢠⣾⣿⣿⣿ ⣿⣿⣿⣿⣇⢿⣿⠄⢀⣿⣿⣴⣅⣼⣿⣿⣿⡿⣟⠉⡒⠄⢀⣠⣾⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣶⠄⠄⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣴⠄⣾⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⡄⠄⠈⠛⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢠⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣷⡀⠄⠛⣰⣾⣾⣿⣿⣿⣤⠉⣉⠉⣠⣾⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣷⡀⠄⢻⣿⣿⣿⣿⣿⣿⠟⢁⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠸⣿⣿⣟⣛⣛⠁⣠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡉⠛⠛⠛⣫⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿  `)
            block = true;
            setTimeout(() => {
                block = false;
            }, (5 * 1000));
        }
    }

    
    
    
    if (message == "'poki") {
        if (!block) {
            client.action(channel, `Simping for Pokimane isn't just a moment, it’s a lifestyle 💫 a reason to breathe 🤲 an escape from this evil world filled with thieves 🌏 It’s art 🖼 the first gift you open on Xmas 🎁 a hug from a loved one 🤗 everything you’ve ever wanted love 💗 everything you need 💕🥺`)
            block = true;
            setTimeout(() => {
                block = false;
            }, (5 * 1000));
        }
    }



    if (message.toLowerCase().startsWith("'pick") && command === 'pick') {
        if (!block) {
            let array = ["Yes Okayge", "No Okayge", "Maybe Okayge"]
            client.action(channel, ` @${user.username} ${array[Math.floor(Math.random() * array.length)]}`)
            block = true;
            setTimeout(() => {
                block = false;
            }, (5 * 1000));
        }
    }

    if (message.toLowerCase().startsWith("'8ball") && command === '8ball') {
        if (!block) {
            let array = ["Yes Okayge", "No Okayge", "Maybe Okayge", "Surely Clueless", "Fuck You Bruh", "NOIDONTTHINKSO", "Copege I believe so", "YESIDOTHINKSO", "Clueless TeaTime", "Basedding no", "NOIDONTTHINKSO Never Doubt"]
            client.action(channel, ` @${user.username} ${array[Math.floor(Math.random() * array.length)]}`)
            block = true;
            setTimeout(() => {
                block = false;
            }, (5 * 1000));
        }
    }

   if(message.toLowerCase().startsWith("'roll") && command === 'roll') {
        if (!block) {
            client.action(channel, `@${user.username} :tf: 👉   ${Math.floor(Math.random() * 2) + 1}!`)
            block = true;
            setTimeout(() => {
                block = false;
            }, (5 * 1000));
        }
    }

    if (message.toLowerCase().startsWith("'gaytest") && command === 'gaytest') {
        if (!block) {
            client.action(channel, `@${user.username} ${args.join(" ")} is  ${Math.floor(Math.random() * 100) + 1}% gay Okayge`)
            block = true;
            setTimeout(() => {
                block = false;
            }, (5 * 1000));
        }
    }

    if (message.toLowerCase().startsWith("'lesbiantest") && command === 'lesbiantest') {
        if (!block) {
            client.action(channel, `@${user.username} ${args.join(" ")} is  ${Math.floor(Math.random() * 100) + 1}% lesbian Okayge`)
            block = true;
            setTimeout(() => {
                block = false;
            }, (5 * 1000));
        }
    }

    if (message.toLowerCase().startsWith("'cock") && command === 'cock') {
        if (!block) {
            client.action(channel, `@${user.username} ${args.join(" ")} has ${Math.floor(Math.random() * 30) + 1}cm cock Okayge`)
            block = true;
            setTimeout(() => {
                block = false;
            }, (5 * 1000));
        }
    }

    if (message.toLowerCase().startsWith("'vagina") && command === 'vagina') {
        if (!block) {
            client.action(channel, `@${user.username} ${args.join(" ")} 's vagina is ${Math.floor(Math.random() * 17) + 1}cm deep Okayge`)
            block = true;
            setTimeout(() => {
                block = false;
            }, (5 * 1000));
        }
    }

    if (message.toLowerCase().startsWith("'iq") && command === 'iq') {
        if (!block) {
            client.action(channel, `@${user.username} ${args.join(" ")} has ${Math.floor(Math.random() * 269) + 1}iq FeelsDankMan`)
            block = true;
            setTimeout(() => {
                block = false;
            }, (5 * 1000));
        }
    }

    if (message.toLowerCase().startsWith("'wedding") && command === 'wedding') {
        if (!block) {
            client.action(channel, `@${user.username} and ${args.join(" ")} will have wedding in ${Math.floor(Math.random() * 20) + 1} Years ${Math.floor(Math.random() * 11) + 1} Months ${Math.floor(Math.random() * 30) + 1} Days ${Math.floor(Math.random() * 59) + 1} Minutes 💒 ❤ 💍  Pag`)
            block = true;
            setTimeout(() => {
                block = false;
            }, (5 * 1000));
        }
    }

    if (message.toLowerCase().startsWith("'swag") && command === 'swag') {
        if (!block) {
            client.action(channel, `@${user.username} ${args.join(" ")} has ${Math.floor(Math.random() * 100) + 1} % swag 😎 `)
            block = true;
            setTimeout(() => {
                block = false;
            }, (5 * 1000));
        }
    }

    if (message.toLowerCase().startsWith("'love") && command === 'love') {
        if (!block) {
            client.action(channel, `Love between ${user.username} and ${args.join(" ")} is ${Math.floor(Math.random() * 100) + 1}% PogChamp ❤  `)
            block = true;
            setTimeout(() => {
                block = false;
            }, (5 * 1000));
        }
    }

    if (message.toLowerCase().startsWith("'depression") && command === 'depression') {
        if (!block) {
            client.action(channel, `@${user.username} ${args.join(" ")} is ${Math.floor(Math.random() * 100) + 1}% Depressed PoroSad 💔  `)
            block = true;
            setTimeout(() => {
                block = false;
            }, (5 * 1000));
        }
    }

    if (message.startsWith("ppBounce") && user['user-id'] === "654447790") {
        client.action(channel, "ppJump")
    }

    if (message.startsWith("ppCircle") && user['user-id'] === "625016038") {
        client.action(channel, "ppCircle")
    }

    if (message === "'mods" && user['user-id'] === "162760707") {
        if (!block) {
            client.mods(channel).then(function (data) {
                client.action(channel, "MODS are: " + data)
                block = true;
                setTimeout(() => {
                    block = false;
                }, (5 * 1000));
            })
        }
    }
    

    if (message === "'vips" && user['user-id'] === "162760707") {
        if (!block) {
            client.vips(channel).then(function (data) {
                client.action(channel, `VIPS are: ` + data)
                block = true;
                setTimeout(() => {
                    block = false;
                }, (5 * 1000));
            })
        }
    }

    if (message.toLowerCase().startsWith("'7tvsearch") && command === '7tvsearch') {
        if (!block) {
            if (args.join(" ") == []) {
                client.action(channel, 'No emote provided')
                ; return;
            }
            block = true;
            setTimeout(() => {
                block = false;
            }, (5 * 1000));
            client.action(channel, `@${user.username} https://7tv.app/emotes?sortBy=popularity&page=0&query=${args.join(" ")} `)
            block = true;
            setTimeout(() => {
                block = false;
            }, (5 * 1000));
        }

    }

    if (message.toLowerCase().startsWith("'bttvsearch") && command === 'bttvsearch') {
        if (!block) {
            if (args.join(" ") == []) {
                client.action(channel, 'No emote provided')
                ; return;
            }
            client.action(channel, `@${user.username} https://betterttv.com/emotes/shared/search?query=${args.join(" ")} `)
            block = true;
            setTimeout(() => {
                block = false;
            }, (5 * 1000));
        }
    }

    if (message.toLowerCase().startsWith("'ffzsearch") && command === 'ffzsearch') {
        if (!block) {
            if (args.join(" ") == []) {
                client.action(channel, 'No emote provided')
                ; return;
            }
            client.action(channel, `@${user.username} https://www.frankerfacez.com/emoticons/?q=${args.join(" ")} `)
            block = true;
            setTimeout(() => {
                block = false;
            }, (5 * 1000));
        }
    }

    if (message.toLowerCase().startsWith("'emotes") && command === 'emotes') {
        if (!block) {
            let userTarget = user.username;
                if (args[0]) {
                    if (args[0].startsWith("@")) {
                        args[0] = args[0].substring(1);
                    }
                    userTarget = args[0];
                }
        
                let channelTarget = channel.replace("#", "");
                if (args[1]) {
                    channelTarget = args[1];
                }

                if (args[0] == []) {
                    client.action(channel, `@${user.username} https://e.wrnv.xyz/list/${channelTarget} RaccAttack : https://emotes.raccatta.cc/twitch/${channelTarget}`)
                } else {
                    client.action(channel, `@${user.username} https://e.wrnv.xyz/list/${userTarget} RaccAttack : https://emotes.raccatta.cc/twitch/${userTarget}`)
                }

                
            block = true;
            setTimeout(() => {
                block = false;
            }, (5 * 1000));
        }
    }


    if (message.toLowerCase().startsWith("'color") && command === 'color') {
        if (!block) {
            let username = user.username;

            if(args[0]) {
                if(args[0].startsWith("@")) {
                    args[0] = args[0].substring(1);
                }
                username = args[0];
            }
                const userCheck = await got(`https://api.ivr.fi/twitch/resolve/${username}`,{
                    responseType: 'json',
                    throwHttpErrors: false
                })
                if(!userCheck.body.id) {
                    client.action(channel, `This user does not exist.`) 
                ;return;
                }

                const userData = userCheck.body
                const userColor = userData.chatColor
                
                if(userColor === null) return { reply: 'Default. (never set)' }

                const colorName = await got(`https://www.thecolorapi.com/id?hex=${userColor.replace('#', '')}`).json();

                client.action(channel, `${userColor} (${colorName.name.value}) `) 
            block = true;
            setTimeout(() => {
                block = false;
            }, (5 * 1000));
        }
    }


    if (message.toLowerCase().startsWith("'logs") && command === 'logs') {
        if (!block) {
            let userTarget = user.username;
                if (args[0]) {
                    if (args[0].startsWith("@")) {
                        args[0] = args[0].substring(1);
                    }
                    userTarget = args[0];
                }
        
                let channelTarget = channel.replace("#", "");
                if (args[1]) {
                    channelTarget = args[1];
                }
            client.action(channel, `@${user.username} https://logs.apulxd.ga/?channel=${channelTarget}&username=${userTarget} or https://logs.ivr.fi/?channel=${channelTarget}&username=${userTarget}`)
            block = true;
            setTimeout(() => {
                block = false;
            }, (5 * 1000));
        }
    }
  

    if(isModUp || user['user-id'] == '162760707') { 
        if (message.toLowerCase().startsWith("'massping") && command === 'massping') {
 
        const tChannel = channel.replace("#", "")
            let request = await got(`https://tmi.twitch.tv/group/user/${tChannel}/chatters`, { responseType: 'json' })
            if (!block) {
            let all = request.body.chatters
            let arr = [...all.viewers, ...all.vips, ...all.moderators]
            let msping = arr.values()
            for (let letter of msping) {
                client.action(channel, `${letter} ${args.join(" ") ?? 'TriHard'}`) 
                block = true;
                setTimeout(() => {
                    block = false;
                }, (5 * 1000));
            }
        }
    }
}


    if (message.toLowerCase().startsWith("'isbanned")) {
        if (!block) {
    
            let userTarget = user.username;
            if (args[0]) {
                if (args[0].startsWith("@")) {
                    args[0] = args[0].substring(1);
                }
                userTarget = args[0];
            }
    
            let channelTarget = channel.replace("#", "");
            if (args[1]) {
                channelTarget = args[1];
            }

            let username = user.username;

            if(args[0]) {
                if(args[0].startsWith("@")) {
                    args[0] = args[0].substring(1);
                }
                username = args[0];
            }
                const userCheck = await got(`https://api.ivr.fi/v2/twitch/user/${userTarget}`,{
                    responseType: 'json',
                    throwHttpErrors: false
                })
                if(!userCheck.body.id) {
                    client.action(channel, `This user does not exist.`) 
                ;return;
                }

                const userData = userCheck.body

            const userBanned = userData.banned
            const isbanned = userBanned
             
             if(isbanned == true) {
                client.action(channel, `${userTarget} Banned: ${isbanned} Reason: ${userData.banReason} MODS`)
                ;return;
                }

                client.action(channel, `${userTarget} Banned: ${isbanned} MODS`)
    
            block = true;
            setTimeout(() => {
                block = false;
            }, (5 * 1000));
        }
    }

    if (message.toLowerCase().startsWith("'isbot")) {
        if (!block) {
    
            let userTarget = user.username;
            if (args[0]) {
                if (args[0].startsWith("@")) {
                    args[0] = args[0].substring(1);
                }
                userTarget = args[0];
            }
    
            let channelTarget = channel.replace("#", "");
            if (args[1]) {
                channelTarget = args[1];
            }

            let username = user.username;

            if(args[0]) {
                if(args[0].startsWith("@")) {
                    args[0] = args[0].substring(1);
                }
                username = args[0];
            }
                const userCheck = await got(`https://api.ivr.fi/twitch/resolve/${username}`,{
                    responseType: 'json',
                    throwHttpErrors: false
                })
                if(!userCheck.body.id) {
                    client.action(channel, `This user does not exist.`) 
                ;return;
                }

                const userData = userCheck.body

            const userBot = userData.bot
            const isBot = userBot

                client.action(channel, `${userTarget} Bot: ${isBot} ;p `)
    
            block = true;
            setTimeout(() => {
                block = false;
            }, (5 * 1000));
        }
    }

    if (message.toLowerCase().startsWith("'ispartner")) {
        if (!block) {
    
            let userTarget = user.username;
            if (args[0]) {
                if (args[0].startsWith("@")) {
                    args[0] = args[0].substring(1);
                }
                userTarget = args[0];
            }
    
            let channelTarget = channel.replace("#", "");
            if (args[1]) {
                channelTarget = args[1];
            }

            let username = user.username;

            if(args[0]) {
                if(args[0].startsWith("@")) {
                    args[0] = args[0].substring(1);
                }
                username = args[0];
            }
                const userCheck = await got(`https://api.ivr.fi/twitch/resolve/${username}`,{
                    responseType: 'json',
                    throwHttpErrors: false
                })
                if(!userCheck.body.id) {
                    client.action(channel, `This user does not exist.`) 
                ;return;
                }

                const userData = userCheck.body

            const userpartner = userData.partner
            const isPartner = userpartner

                client.action(channel, `${userTarget} Partner: ${isPartner} ;p `)
    
            block = true;
            setTimeout(() => {
                block = false;
            }, (5 * 1000));
        }
    }

    if (message.toLowerCase().startsWith("'isaffiliate")) {
        if (!block) {
    
            let userTarget = user.username;
            if (args[0]) {
                if (args[0].startsWith("@")) {
                    args[0] = args[0].substring(1);
                }
                userTarget = args[0];
            }
    
            let channelTarget = channel.replace("#", "");
            if (args[1]) {
                channelTarget = args[1];
            }

            let username = user.username;

            if(args[0]) {
                if(args[0].startsWith("@")) {
                    args[0] = args[0].substring(1);
                }
                username = args[0];
            }
                const userCheck = await got(`https://api.ivr.fi/twitch/resolve/${username}`,{
                    responseType: 'json',
                    throwHttpErrors: false
                })
                if(!userCheck.body.id) {
                    client.action(channel, `This user does not exist.`) 
                ;return;
                }

                const userData = userCheck.body

            const useraffiliate = userData.affiliate
            const isAffiliate = useraffiliate

                client.action(channel, `${userTarget} Affiliate: ${isAffiliate} ;p `)
    
            block = true;
            setTimeout(() => {
                block = false;
            }, (5 * 1000));
        }
    }

    if (message.toLowerCase().startsWith("'whois")) {
        if (!block) {
    
            let userTarget = user.username;
            if (args[0]) {
                if (args[0].startsWith("@")) {
                    args[0] = args[0].substring(1);
                }
                userTarget = args[0];
            }
    
            let channelTarget = channel.replace("#", "");
            if (args[1]) {
                channelTarget = args[1];
            }

            let username = user.username;

            if(args[0]) {
                if(args[0].startsWith("@")) {
                    args[0] = args[0].substring(1);
                }
                username = args[0];
            }
                const userCheck = await got(`https://api.ivr.fi/twitch/resolve/${username}`,{
                    responseType: 'json',
                    throwHttpErrors: false
                })
                
                
                if(!userCheck.body.id) {
                    client.action(channel, `This user does not exist.`) 
                ;return;
                
            
    }
                const userData = userCheck.body
                const userColor = userData.chatColor
                
            
            
            const userId = userData.id
            const userAvatar = userData.logo
            const userBio = userData.bio
            const userBanned = userData.banned
            const userPartner = userData.partner
            const userAffiliate = userData.affiliate
            const userBot = userData.bot

            const uid = userId
            const avatar = userAvatar
            const bio = userBio
            const isbanned = userBanned
            const isPartner = userPartner
            const isAffiliate = userAffiliate
            const isBot = userBot
            
            const creation = await got(`https://decapi.me/twitch/creation/${userTarget}`);
                let creationDate = creation.body

                if (userColor == null) {
                    if (userData.badge[0] == undefined){
                        client.say(channel, `@${user.username} ${userTarget}, Banned: ${isbanned}, Partner: ${isPartner}, Affiliate: ${isAffiliate}, Bot: ${isBot}, Badge: No badge, Avatar: ${avatar} , Color: Default color (Never set), Account created at ${creationDate}, id: ${uid}, bio: ${bio}`)
                    ;return;
                    } else {
                        let userBadge = userData.badge[0].title
                        let badge = userBadge
                    client.say(channel, `@${user.username} ${userTarget}, Banned: ${isbanned}, Partner: ${isPartner}, Affiliate: ${isAffiliate}, Bot: ${isBot}, Badge: ${badge}, Avatar: ${avatar} , Color: Default color (Never set), Account created at ${creationDate}, id: ${uid}, bio: ${bio}`)
                    ;return;
                    }
                }

            const colorName = await got(`https://www.thecolorapi.com/id?hex=${userColor.replace('#', '')}`).json();



                    if (userData.badge[0] == undefined){
                        client.say(channel, `@${user.username} ${userTarget}, Banned: ${isbanned}, Partner: ${isPartner}, Affiliate: ${isAffiliate}, Bot: ${isBot}, Badge: No badge, Avatar: ${avatar} , Color: ${userColor} (${colorName.name.value}), Account created at ${creationDate}, id: ${uid}, bio: ${bio}`)
                    ;return;
                    } else {

                    let userBadge = userData.badge[0].title
                    let badge = userBadge

                    client.say(channel, `@${user.username} ${userTarget}, Banned: ${isbanned}, Partner: ${isPartner}, Affiliate: ${isAffiliate}, Bot: ${isBot}, Badge: ${badge}, Avatar: ${avatar} , Color: ${userColor} (${colorName.name.value}), Account created at ${creationDate}, id: ${uid}, bio: ${bio}`)
                
                
            block = true;
            setTimeout(() => {
                block = false;
            }, (5 * 1000));
        }
    }
}

    if (message.toLowerCase().startsWith("'firstmessage") || message.toLowerCase().startsWith("'fm")) {
        if (!block) {
    
            let userTarget = user.username;
            if (args[0]) {
                if (args[0].startsWith("@")) {
                    args[0] = args[0].substring(1);
                }
                userTarget = args[0];
            }
    
            let channelTarget = channel.replace("#", "");
            
            

            let username = user.username;

            if(args[0]) {
                if(args[0].startsWith("@")) {
                    args[0] = args[0].substring(1);
                }
                username = args[0];
            }
            const firstMessage = await got(`https://api.ivr.fi/logs/firstmessage/${channelTarget}/${userTarget}` ,{
                responseType: 'json',
                throwHttpErrors: false
            })
            const userData = firstMessage.body

            const userFirstMessage = userData.message
            const userFirstMessageTime = userData.time
            const error = userData.status
            
            if(!userFirstMessage) {
                const firstMessage1 = await got(`https://api.paauulli.me/logs/firstmessage/${channelTarget}/${userTarget}`,{
                responseType: 'json',
                throwHttpErrors: false
            })
            const userData1 = firstMessage1.body

            const userFirstMessage1 = userData1.text
            const userFirstMessageTime1 = userData1.timestamp

                if(!userFirstMessage1){
                    client.action(channel, 'Channel is not tracked FeelsBadMan')
                    ;return;
                }

                client.action(channel, `${channelTarget}, ${userFirstMessage1} (${userFirstMessageTime1}) `)
                ;return;
            }

                client.action(channel, `${channelTarget}, ${userFirstMessage} (${userFirstMessageTime}) `)
            block = true;
            setTimeout(() => {
                block = false;
            }, (5 * 1000));
        }
    }


        if (message.toLowerCase().startsWith("'followage")  || message.toLowerCase().startsWith("'fa")) {
            if (!block) {
        
                let userTarget = user.username;
                if (args[0]) {
                    if (args[0].startsWith("@")) {
                        args[0] = args[0].substring(1);
                    }
                    userTarget = args[0];
                }
        
                let channelTarget = channel.replace("#", "");
                if (args[1]) {
                    channelTarget = args[1];
                }
        
                const followage = await got(`https://decapi.me/twitch/followage/${channelTarget}/${userTarget}?precision=3`); // will return the days too
                let data = followage.body
                
                    if (data === `User not found: ${userTarget}`) {
                        client.action(channel, `${data}`)
                        ;return;
                    }

                client.action(channel, `${userTarget} is following ${channelTarget} for: ${data}`)  
        
                block = true;
                setTimeout(() => {
                    block = false;
                }, (5 * 1000));
            }
        }

        


        if (message.toLowerCase().startsWith("'accage")) {
            if (!block) {
        
                let userTarget = user.username;
                if (args[0]) {
                    if (args[0].startsWith("@")) {
                        args[0] = args[0].substring(1);
                    }
                    userTarget = args[0];
                }
        
                let channelTarget = channel.replace("#", "");
                if (args[1]) {
                    channelTarget = args[1];
                }
        
                const accage = await got(`https://decapi.me/twitch/accountage/${userTarget}?precision=4`)
                let data = accage.body
        
                client.action(channel, `${userTarget}'s account is ${data} old`)  
        
                block = true;
                setTimeout(() => {
                    block = false;
                }, (5 * 1000));
            }
        }

        if (message.toLowerCase().startsWith("'avatar")) {
            if (!block) {
        
                let userTarget = user.username;
                if (args[0]) {
                    if (args[0].startsWith("@")) {
                        args[0] = args[0].substring(1);
                    }
                    userTarget = args[0];
                }
        
                let channelTarget = channel.replace("#", "");
                if (args[1]) {
                    channelTarget = args[1];
                }
        
                const avatar = await got(`https://decapi.me/twitch/avatar/${userTarget}`)
                let data = avatar.body
        
                client.action(channel, `${data}`)  
        
                block = true;
                setTimeout(() => {
                    block = false;
                }, (5 * 1000));
            }
        }


        if (message.toLowerCase().startsWith("'subs")) {
            if (!block) {
        
                let userTarget = user.username;
                if (args[0]) {
                    if (args[0].startsWith("@")) {
                        args[0] = args[0].substring(1);
                    }
                    userTarget = args[0];
                }
        
                let channelTarget = channel.replace("#", "");
                if (args[1]) {
                    channelTarget = args[1];
                }
        
                const subs = await got(`https://decapi.me/twitch/subcount/${channelTarget}?`); 
                let data = subs.body
                client.action(channel, `Channel ${channelTarget} has  ${data} subscribers`)  
        
                block = true;
                setTimeout(() => {
                    block = false;
                }, (5 * 1000));
            }
        }

        if (message.toLowerCase().startsWith("'subemotes")) {
            if (!block) {
        
                let userTarget = user.username;
                if (args[0]) {
                    if (args[0].startsWith("@")) {
                        args[0] = args[0].substring(1);
                    }
                    userTarget = args[0];
                }
        
                let channelTarget = channel.replace("#", "");
                if (args[1]) {
                    channelTarget = args[1];
                }
        
                const subemotes = await got(`https://decapi.me/twitch/subscriber_emotes/${channelTarget}?precision=4`); 
                let data = subemotes.body
                    if (data === 'This channel does not have any subscriber emotes. ') {
                        client.action(channel, `This channel does not have any subscriber emotes.`)
                ;return;
                }
                client.action(channel, `${data}`)  
                block = true;
                setTimeout(() => {
                    block = false;
                }, (5 * 1000));
            }
        }


        if (message.toLowerCase().startsWith("'uptime")) {
            if (!block) {
        
                let userTarget = user.username;
                if (args[0]) {
                    if (args[0].startsWith("@")) {
                        args[0] = args[0].substring(1);
                    }
                    userTarget = args[0];
                }
        
                let channelTarget = channel.replace("#", "");
                if (args[1]) {
                    channelTarget = args[1];
                }
                
                const uptime = await got(`https://decapi.me/twitch/uptime/${channelTarget}`); 
                let data = uptime.body
                client.action(channel, data)  
        
                block = true;
                setTimeout(() => {
                    block = false;
                }, (5 * 1000));
            }
        }



        if (message.toLowerCase().startsWith("'viewers") && command === 'viewers') {
            if (!block) {
        
                let userTarget = user.username;
                if (args[0]) {
                    if (args[0].startsWith("@")) {
                        args[0] = args[0].substring(1);
                    }
                    userTarget = args[0];
                }
        
                let channelTarget = channel.replace("#", "");
                if (args[1]) {
                    channelTarget = args[1];
                }

                    if (args[0] == []) {
                        let viewers = (`https://decapi.me/twitch/viewercount/${channelTarget}?`)
                        let data = viewers.body
                        
                        client.action(channel, data)
                    } else {
                        let viewers = await got(`https://decapi.me/twitch/viewercount/${userTarget}?`); 
                        let data = viewers.body
                        
                        client.action(channel, data)
                    }
        
                block = true;
                setTimeout(() => {
                    block = false;
                }, (5 * 1000));
            }
        }
        
        if (message.toLowerCase().startsWith("'followers") && command === 'followers') {
            if (!block) {
        
                let userTarget = user.username;
                if (args[0]) {
                    if (args[0].startsWith("@")) {
                        args[0] = args[0].substring(1);
                    }
                    userTarget = args[0];
                }
        
                let channelTarget = channel.replace("#", "");
                if (args[1]) {
                    channelTarget = args[1];
                }
                const followers = await got(`https://decapi.me/twitch/followcount/${channelTarget}`); 
                let data = followers.body
                client.action(channel, `${channelTarget} has ${data} followers`)  
        
                block = true;
                setTimeout(() => {
                    block = false;
                }, (5 * 1000));
            }
        }
        

        if (message.toLowerCase().startsWith("'modlookup")  || message.toLowerCase().startsWith("'ml")) {
            if (!block) {
        
                let userTarget = user.username;
                if (args[0]) {
                    if (args[0].startsWith("@")) {
                        args[0] = args[0].substring(1);
                    }
                    userTarget = args[0];
                }
        
                let channelTarget = channel.replace("#", "");
                if (args[1]) {
                    channelTarget = args[1];
                }
                client.action(channel, `${userTarget} is MOD/VIP in these channels: https://www.twitchdatabase.com/roles/${userTarget}`)
        }
    }

        if (message.toLowerCase().startsWith("'title")) {
            if (!block) {
        
                let userTarget = user.username;
                if (args[0]) {
                    if (args[0].startsWith("@")) {
                        args[0] = args[0].substring(1);
                    }
                    userTarget = args[0];
                }
        
                let channelTarget = channel.replace("#", "");
                if (args[1]) {
                    channelTarget = args[1];
                }
        
                    if (args[0] == []) {
                        let title = await got(`https://decapi.me/twitch/title/${channelTarget}?`); 
                        let data = title.body

                        client.action(channel, `Title is: ${data}`)  
                    } else {
                        let title = await got(`https://decapi.me/twitch/title/${userTarget}?`); 
                        let data = title.body
                        
                        client.action(channel, `Title is: ${data}`)
                    }

        
                block = true;
                setTimeout(() => {
                    block = false;
                }, (5 * 1000));
            }
        }

        if (message.toLowerCase().startsWith("'uid")) {
            if (!block) {
        
                let userTarget = user.username;
                if (args[0]) {
                    if (args[0].startsWith("@")) {
                        args[0] = args[0].substring(1);
                    }
                    userTarget = args[0];
                }
        
                let channelTarget = channel.replace("#", "");
                if (args[1]) {
                    channelTarget = args[1];
                }
        
                const uid = await got(`https://decapi.me/twitch/id/${userTarget}?`); 
                let data = uid.body
                client.action(channel, `${user.username} ${data}`)  
        
                block = true;
                setTimeout(() => {
                    block = false;
                }, (5 * 1000));
            }
        }

        if (message.toLowerCase().startsWith("'game")) {
            if (!block) {
        
        
                let userTarget = user.username;
                if (args[0]) {
                    if (args[0].startsWith("@")) {
                        args[0] = args[0].substring(1);
                    }
                    userTarget = args[0];
                }

                let channelTarget = channel.replace("#", "");
                if (args[0]) {
                    channelTarget = args[0];
                }
        
                    if (args[0] == []) {
                        let game = await got(`https://decapi.me/twitch/game/${channelTarget}?`); 
                        let data = game.body
                        
                        client.action(channel, `${channelTarget} is currently playing  ${data}`)
                    }  else {
                        let game = await got(`https://decapi.me/twitch/game/${userTarget}?`); 
                        let data = game.body
                        
                        client.action(channel, `${userTarget} is currently playing  ${data}`)
                    }
        
                block = true;
                setTimeout(() => {
                    block = false;
                }, (5 * 1000));
            }
        }

        

        if (message.toLowerCase().startsWith("'subage")  || message =="'sa") {
            if (!block) {
        
                let userTarget = user.username;
                if (args[0]) {
                    if (args[0].startsWith("@")) {
                        args[0] = args[0].substring(1);
                    }
                    userTarget = args[0];
                }
        
                let channelTarget = channel.replace("#", "");
                if (args[1]) {
                    channelTarget = args[1];
                }
        
                const bCheck = await got(`https://api.ivr.fi/twitch/resolve/${userTarget}`,{
                    responseType: 'json',
                    throwHttpErrors: false
                })

                const cCheck = await got(`https://api.ivr.fi/twitch/resolve/${channelTarget}`,{
                    responseType: 'json',
                    throwHttpErrors: false
                })

                let channelCheck = cCheck.body
                let banCheck = bCheck.body

            const channelid = channelCheck.id
            const ban = banCheck.banned

            if (!channelid){
                client.action(channel, 'Channel was not found.')
            ;return;
            }

            if (ban == true){
                client.action(channel, 'No data found. User is probably banned.')
            ;return;
            }



                const subage = await got(`https://api.ivr.fi/twitch/subage/${userTarget}/${channelTarget}`);
                let data = JSON.parse(subage.body)

                console.log(data)

                const tier = data.meta.tier
                const type = data.meta.type
                const months = data.cumulative.months
                const anniversary = data.cumulative.remaining
                const endsin = data.streak.remaining
                const streak = data.streak.months

                const userCheck = await got(`https://api.ivr.fi/twitch/resolve/${userTarget}`,{
                    responseType: 'json',
                    throwHttpErrors: false
                })

                const userData = userCheck.body

            const userBanned = userData.banned
            const isbanned = userBanned


                if (months == undefined || months == 0){
                    client.action(channel, `${userTarget} isn't subscribed to ${channelTarget}.`)
                ;return;
                }

                if (data.subscribed == false){
                    client.action(channel, `${userTarget} isn't subscribed to ${channelTarget}, but used to be subscribed for ${months} months.`)
                ;return;
                }

            
               if (type == 'gift'){
                    const giftedby = data.meta.gift.name
                    const banned = data.error
                
                    client.action(channel, `User ${userTarget} is subscribed to ${channelTarget} for ${months} cumulative months with tier ${tier} gifted by ${giftedby} and is on ${streak} months streak. Ends in ${endsin} days and next anniversary is in ${anniversary} days.`)
                ;return;
                }

                if (type == 'paid'){
                    const banned = data.error
                    
                    client.action(channel, `User ${userTarget} is subscribed to ${channelTarget} for ${months} cumulative months with tier ${tier} and is on ${streak} months streak. Ends in ${endsin} days and next anniversary is in ${anniversary} days.`)
                ;return;
                }

                if (type == 'prime'){
                    const banned = data.error
  
                    client.action(channel, `User ${userTarget} is subscribed to ${channelTarget} for ${months} cumulative months with tier ${tier} and is on ${streak} months streak. Ends in ${endsin} days and next anniversary is in ${anniversary} days.`)
                ;return;
                }
                block = true;
                setTimeout(() => {
                    block = false;
                }, (5 * 1000));
            }
        }

let foodcheck = client.food.get(user['user-id']); 
if (foodcheck) { 
    client.food.delete(user['user-id']); 
    client.action(channel, `${user['display-name']} finished eating 🍔: ${foodcheck.reason} (${humanizeDuration(new Date().getTime() - Date.parse(foodcheck.time), { round: true })})`)
}
 
if (message.toLowerCase().startsWith("'food")) {
    if (!block) {

        let foodMessage = args.join(' ') ? args.join(' ') : 'no message';
        let foodlist = client.food.get(user['user-id']);
        if (!foodlist) {
            let construct = {
                id: user['user-id'],
                reason: foodMessage,
                time: new Date().toString()
            };
            client.food.set(user['user-id'], construct);

            client.action(channel, `@${user.username} is now eating 🍔: ${foodMessage}`)
        }

        block = true;
        setTimeout(() => {
            block = false;
        }, (5 * 1000));
    }
}

let wccheck = client.wc.get(user['user-id']); 
if (wccheck) { 
    client.wc.delete(user['user-id']); 
    client.action(channel, `${user['display-name']} came back from toilet 🚽: ${wccheck.reason} (${humanizeDuration(new Date().getTime() - Date.parse(wccheck.time), { round: true })})`)
}
 
if (message.toLowerCase().startsWith("'wc")) {
    if (!block) {

        let wcMessage = args.join(' ') ? args.join(' ') : 'no message';
        let wclist = client.wc.get(user['user-id']);
        if (!wclist) {
            let construct = {
                id: user['user-id'],
                reason: wcMessage,
                time: new Date().toString()
            };
            client.wc.set(user['user-id'], construct);

            client.action(channel, `@${user.username} went to a toilet 🚽: ${wcMessage}`)
        }

        block = true;
        setTimeout(() => {
            block = false;
        }, (5 * 1000));
    }
}

let brbcheck = client.brb.get(user['user-id']); 
if (brbcheck) { 
    client.brb.delete(user['user-id']); 
    client.action(channel, `${user['display-name']} is back: ${brbcheck.reason} (${humanizeDuration(new Date().getTime() - Date.parse(brbcheck.time), { round: true })})`)
}

if (message.toLowerCase().startsWith("'brb")) {
    if (!block) {

        let brbMessage = args.join(' ') ? args.join(' ') : 'ppHop';
        let brblist = client.brb.get(user['user-id']);
        if (!brblist) {
            let construct = {
                id: user['user-id'],
                reason: brbMessage,
                time: new Date().toString()
            };
            client.brb.set(user['user-id'], construct);

            client.action(channel, `@${user.username} is going to be right back: ${brbMessage}`)
        }

        block = true;
        setTimeout(() => {
            block = false;
        }, (5 * 1000));
    }
}

let gncheck = client.gn.get(user['user-id']); 
if (gncheck) { 
    client.gn.delete(user['user-id']); 
    client.action(channel, `${user['display-name']} just woke up: ${gncheck.reason} (${humanizeDuration(new Date().getTime() - Date.parse(gncheck.time), { round: true })})`)
}

if (message.toLowerCase().startsWith("'gn")) {
    if (!block) {

        let gnMessage = args.join(' ') ? args.join(' ') : '🛏 💤 ';
        let gnlist = client.gn.get(user['user-id']);
        if (!gnlist) {
            let construct = {
                id: user['user-id'],
                reason: gnMessage,
                time: new Date().toString()
            };
            client.gn.set(user['user-id'], construct);

            client.action(channel, `@${user.username} is now sleeping : ${gnMessage}`)
        }

        block = true;
        setTimeout(() => {
            block = false;
        }, (5 * 1000));
    }
}

let showercheck = client.shower.get(user['user-id']); 
if (showercheck) { 
    client.shower.delete(user['user-id']); 
    client.action(channel, `${user['display-name']} finished showering 🚿 : ${showercheck.reason} (${humanizeDuration(new Date().getTime() - Date.parse(showercheck.time), { round: true })})`)
}

if (message.toLowerCase().startsWith("'shower")) {
    if (!block) {

        let showerMessage = args.join(' ') ? args.join(' ') : 'no message';
        let showerlist = client.shower.get(user['user-id']);
        if (!showerlist) {
            let construct = {
                id: user['user-id'],
                reason: showerMessage,
                time: new Date().toString()
            };
            client.shower.set(user['user-id'], construct);

            client.action(channel, `@${user.username} is now showering 🚿 : ${showerMessage}`)
        }

        block = true;
        setTimeout(() => {
            block = false;
        }, (5 * 1000));
    }
}

if(message == "'bruh"){
    if (!block) {
    client.action(channel, 'Bruh')
    block = true;
    setTimeout(() => {
        block = false;
    }, (5 * 1000));
}
}

let afkcheck = client.afk.get(user['user-id']); 
if (afkcheck) { 
    client.afk.delete(user['user-id']); 
    client.action(channel, `${user['display-name']} is no longer afk: ${afkcheck.reason} (${humanizeDuration(new Date().getTime() - Date.parse(afkcheck.time), { round: true })})`)
}



if (message.toLowerCase().startsWith("'afk")) {
    if (!block) {

        let afkMessage = args.join(' ') ? args.join(' ') : 'no message';
        let afklist = client.afk.get(user['user-id']);
        if (!afklist) {
            let construct = {
                id: user['user-id'],
                reason: afkMessage,
                time: new Date().toString()
            };
            client.afk.set(user['user-id'], construct);

            client.action(channel, `@${user.username} is afk: ${afkMessage}`)
        }

        block = true;
        setTimeout(() => {
            block = false;
        }, (5 * 1000));
    }
}







if (message.toLowerCase().startsWith("'tuck")) {

    let channelTarget = channel.replace("#", "");

    const got = require("got");

    const data = await got(`https://emotes.adamcy.pl/v1/channel/${channelTarget}/emotes/7tv.bttv.ffz.twitch`);
    
    let emotes = [];
    
    JSON.parse(data.body).map((e) => {
      emotes.push(e.code);
    });
    
    

    let userTarget = user.username;
    if (args[0]) {
        if (args[0].startsWith("@")) {
            args[0] = args[0].substring(1);
        }
        userTarget = args[0];
    }

    if (emotes.includes(args[1])) {
        client.action(channel, `@${user.username} tucked ${userTarget} to bed ${args[1]} 👉 🛏`)
    }  else {

       if (userTarget == user.username){
            client.say(channel, `@${user.username} tucked himself to bed Sadge 👉 🛏 `)
        ;return; 
        }
 
        client.action(channel, `@${user.username} tucked ${userTarget} to bed FeelsOkayMan 👉 🛏 `)
    }
}

if (isModUp || user['user-id'] == '162760707') {
if (message.toLowerCase().startsWith("'allemotes")) {
    if (!block) {
    let channelTarget = channel.replace("#", "");

    const got = require("got");

const data = await got(`https://emotes.adamcy.pl/v1/channel/${channelTarget}/emotes/7tv.bttv.ffz.twitch`);
let emotes = [];

JSON.parse(data.body).map((e) => {
  emotes.push(e.code);
});

client.say(channel, `${emotes.join(" ")}`)
        block = true;
        setTimeout(() => {
        block = false;
    }, (5 * 1000));
}   
}
}


if(message.toLowerCase().startsWith("'rcolor") && command === 'rcolor') {
    if (!block) {
        var color = "";
    for(var i = 0; i < 3; i++) {
        var sub = Math.floor(Math.random() * 256).toString(16);
        color += (sub.length == 1 ? "0" + sub : sub);
    }
    const colorName = await got(`https://www.thecolorapi.com/id?hex=${color.replace('#', '')}`).json();

    client.action(channel, `${colorName.name.value} #${color}`);
    block = true;
    setTimeout(() => {
        block = false;
    }, (5 * 1000));
}
};

if(message.startsWith(`'math`)){
    if(message.split(" ")[1] !== undefined){
        let excersise = message.substring(message.split(" ")[0].split("").length +1, message.split("").length)
      excersise = excersise.replace(/\s/g, "")
      let validnums = 0
      let invalidnums = 0
      for(w = 0; w < excersise.length; w++){
        let numchar = excersise.split("")[i]
        if(!isNaN(numchar)){
          validnums = +validnums+1
        } else {
          invalidnums = +invalidnums+1
        }
      }
        let excersisesolved = eval(excersise)
        if(excersisesolved !== isNaN){
            client.action(channel, `${user.username} ${excersisesolved} FeelsOkayMan`)
        }
        else {
            client.action(channel, `${user.username} Not mathematical! FeelsDankMan`)
            
        } 
    }  
}

if (channel === '#pajlada') {
    if (!block) {
    if(message == "monkaStop ALARM" && user['user-id'] === "670591988") {
        client.action(channel, 'pajaGIGA 🚨 ALERT')
        block = true;
        setTimeout(() => {
            block = false;
        }, (5 * 1000));
    }
}
}

  if(message.toLowerCase().startsWith("'broadcaster") && command === 'broadcaster') {
        if (!block) {
            let channelTarget = channel.replace("#", "");
                if (args[1]) {
                    channelTarget = args[1];
                }    
            
                client.action(channel, `${channelTarget}`)
                block = true;
                setTimeout(() => {
                    block = false;
                }, (5 * 1000));
            }
        }

        if (isModUp) {
            if (message.toLocaleLowerCase().startsWith("'settitle") && channel === '#meiiodaas') {
                
                let channelTarget = channel.replace("#", "");

                const userCheck = await got(`https://api.ivr.fi/twitch/resolve/${channelTarget}`,{
                    responseType: 'json',
                    throwHttpErrors: false
                })

                let id = userCheck.body.id


        let patch = await got.patch(`https://api.twitch.tv/helix/channels?broadcaster_id=162760707`, {
            headers: { "Authorization": `Bearer ${process.env.app_oauth}`, "Client-ID": `${process.env.client_id}`, "Content-type": 'application/json' },
            body: JSON.stringify({ "title": `${args.join(" ")}` })
        });
        
        client.action(channel, `title changed to "${args.join(" ")}"`)
    }
}

if (isModUp) {
    if (message.toLocaleLowerCase().startsWith("'setgame") && channel === '#meiiodaas') {
const game = args.join(" ")

let channelTarget = channel.replace("#", "");

const userCheck = await got(`https://api.ivr.fi/twitch/resolve/${channelTarget}`,{
                    responseType: 'json',
                    throwHttpErrors: false
                })

let id = userCheck.body.id

const getID = await got(`https://api.twitch.tv/helix/games?name=${game}`, {
  headers: { "Authorization": `Bearer ${process.env.app_oauth}`, "Client-ID": `${process.env.client_id}` },
  responseType: "json"
});
const gameID = getID.body

if (gameID.data.length == 0) {
    client.action(channel, `I couldn't find this game...`) 
;return;
}

let patch = await got.patch(`https://api.twitch.tv/helix/channels?broadcaster_id=162760707`, { headers: { "Authorization": `Bearer ${process.env.app_oauth}`, "Client-ID": `${process.env.client_id}`, "Content-type": 'application/json' }, body: JSON.stringify({ "game_id": `${gameID.data[0].id}` }) })

client.action(channel, `game changed to "${gameID.data[0].name}"`)
}
}



if (message.toLowerCase().startsWith("'song")) {
    if (!block) {
const SpotifyWebApi = require('spotify-web-api-node');
const spotify = require('spotify-token');
 
const Updater = require("spotify-oauth-refresher");
const api = new Updater({ clientId: `${process.env.clientId}`, clientSecret: `${process.env.clientSecret}` });

api.setAccessToken(`${process.env.accessToken}`);
api.setRefreshToken(`${process.env.refreshToken}`);


const me = await api.request({
      url: "https://api.spotify.com/v1/me/player/currently-playing",
      method: "get",
      authType: "bearer",
    });
    
    console.log(me.config.headers.Authorization);
        
    
        let spotify_song = {
            method: "GET",
              headers: {
              "Accept" : "application/json",
              "Content-Type" : "application/json",
              "Authorization" : `${me.config.headers.Authorization} `
              }
            }
        
            const request = require('request')
          request(`https://api.spotify.com/v1/me/player/currently-playing`, spotify_song, function(e, r){
            if(e){
              client.say(channel, `monkaS error`)
              console.log(`>> ERROR ${e}`)
            } else {
              if(r.body.length < 60){
                client.action(channel, "Nothing is playing on MeIiodaas's spotify")
              } else {
                let dat = JSON.parse(r.body)
                let data = r

                const format = require('format-duration')

                let test = (data.body)

                console.log(dat)

                const progress_ms = format(dat.progress_ms)
                const duration_ms = format(dat.item.duration_ms)
            const paused = dat.is_playing

            if (dat.is_playing ==  false) {
                client.action(channel, "Nothing is playing on MeIiodaas's spotify")
                ;return;
            }

            client.action(channel, `MeIiodaas is currently playing ${dat.item.name} by ${dat.item.album.artists[0].name} ▶ [${progress_ms}/${duration_ms}] ${dat.item.external_urls.spotify}`)
                block = true;
                setTimeout(() => {
                    block = false;
                }, (5 * 1000));  
           }
        }
     })
  }
}
    


if (message.toLowerCase().startsWith("'weather") && command === 'weather'){
    if (!block) {
    const weather = require('openweather-apis');
    const Compass = require("cardinal-direction");
    const hdate = require('human-date');
    const moment = require('moment');
    const kelvinToCelsius = require('kelvin-to-celsius');

    weather.setLang('en');
	
	weather.setCity(`${args.join(" ")}`);

    weather.setUnits('metric');

 	weather.setAPPID(process.env.weather_api_token);



     const data = await got(`https://api.openweathermap.org/data/2.5/weather?q=${args.join(" ")}&APPID=${process.env.weather_api_token}`,{
        responseType: 'json',
        throwHttpErrors: false
    })

    let JSONObj = data.body
        console.log(JSONObj)
        
        if(JSONObj.cod == 400) {
            client.action(channel, 'No city found :)')
        ;return;
        }

        if(JSONObj.cod == 429) {
            client.action(channel, 'No city found :)')
        ;return;
        }

        if(JSONObj.cod == 500) {
            client.action(channel, 'No city found :)')
        ;return;
        }

        if(JSONObj.cod == 502) {
            client.action(channel, 'No city found :)')
        ;return;
        }

        if(JSONObj.cod == 503) {
            client.action(channel, 'No city found :)')
        ;return;
        }

        if(JSONObj.cod == 504) {
            client.action(channel, 'No city found :)')
        ;return;
        }

        if(JSONObj.cod == 404) {
            client.action(channel, 'No city found :)')
        ;return;
        }

        const direction = Compass.cardinalFromDegree(JSONObj.wind.deg)

        let unix_timestamp = JSONObj.sys.sunrise

        var locationTime = new Date(unix_timestamp * 1000);
        var currentTime = Date.now() 
        var SunRiseTime = locationTime - currentTime

        var date = new Date(SunRiseTime);
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();
        var seconds = "0" + date.getSeconds();
        
        var SunRise = hours + 'h' + minutes.substr(-2) + 'm';
        
   

        let unix_timestamp2 = JSONObj.sys.sunset

        var locationTime2 = new Date(unix_timestamp2 * 1000);
        var currentTime2 = Date.now() 
        var SunSetTime = locationTime2 - currentTime2

        var date2 = new Date(SunSetTime);
        var hours2 = date2.getHours();
        var minutes2 = "0" + date2.getMinutes();
        var seconds2 = "0" + date2.getSeconds();
        
        var SunSet = hours2 + 'h' + minutes2.substr(-2) + 'm';

            if(JSONObj.wind.gust == null){
                client.action(channel, `${JSONObj.name}, ${JSONObj.sys.country}: ${kelvinToCelsius(JSONObj.main.temp)}°C, feels like ${kelvinToCelsius(JSONObj.main.feels_like)}°C. Weather: ${JSONObj.weather[0].description}. ${direction} Wind speed: ${JSONObj.wind.speed} m/s. Humadity: ${JSONObj.main.humidity}%. Air pressure: ${JSONObj.main.pressure} hPa. Sun rises in ${SunRise}, sunset in ${SunSet}.  `)
            ;return;
            }

        client.action(channel, `${JSONObj.name}, ${JSONObj.sys.country}: ${kelvinToCelsius(JSONObj.main.temp)}°C, feels like ${kelvinToCelsius(JSONObj.main.feels_like)}°C. Weather: ${JSONObj.weather[0].description}. ${direction} Wind speed: ${JSONObj.wind.speed} m/s. Wind gusts up to ${JSONObj.wind.gust} m/s. Humadity: ${JSONObj.main.humidity}%. Air pressure: ${JSONObj.main.pressure} hPa. Sun rises in ${SunRise}, sunset in ${SunSet}.  `)
                block = true;
                setTimeout(() => {
                    block = false;
                }, (5 * 1000)); 
   } 
}
	


 if (message.toLowerCase().startsWith("'eval") && command === 'eval'){ 
    const evalueted = await eval('(async () => {' + args.join(" ") + '})()')
    const ev = String(evalueted) || ''
      client.say(channel, ev)
}



});

