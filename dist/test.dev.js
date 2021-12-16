"use strict";

var Twitch = require('dank-twitch-irc');

var _require = require('./settings.json'),
    channel = _require.channel,
    username = _require.username,
    password = _require.password;

var client = new Twitch.ChatClient({
  username: username,
  password: password,
  channels: channel
});
client.use(new Twitch.AlternateMessageModifier(client));
client.use(new Twitch.SlowModeRateLimiter(client, 2));
var prefix = "'";
client.joinAll(channel);
client.connect();
client.on('ready', function _callee() {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log('Twitch client connected to chat');
          console.log(channel);
          spam = 0;

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
});
client.on("PRIVMSG", function _callee2(msg) {
  var vierercombos, args, trigger, _channel, anzahl, text, schritt, emote, currentTime, latency;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          vierercombos = ['', ''];
          vierercombos.forEach(function (combo) {
            if (msg.messageText.includes(combo)) {
              return; //client.say(msg.channelName, ''); 
            }
          });

          if (msg.messageText.startsWith(prefix)) {
            _context2.next = 4;
            break;
          }

          return _context2.abrupt("return");

        case 4:
          args = msg.messageText.replace(prefix, "").split(" ");
          trigger = args[0].toLowerCase();

          if (!(trigger === "spam")) {
            _context2.next = 18;
            break;
          }

          _context2.prev = 7;
          _channel = args[1].toLocaleLowerCase();
          anzahl = args[2];
          text = args;
          text.splice(0, 3);

          for (schritt = 0; schritt < anzahl; schritt++) {
            client.say(_channel, text.join(" "));
          }

          _context2.next = 18;
          break;

        case 15:
          _context2.prev = 15;
          _context2.t0 = _context2["catch"](7);
          return _context2.abrupt("return", client.say(msg.channelName, "Error: ".concat(_context2.t0)));

        case 18:
          if (!(trigger === "ping")) {
            _context2.next = 26;
            break;
          }

          console.log("[#".concat(msg.channelName, "] ").concat(msg.senderUsername, " used command: 'ping"));
          emote = args[1];
          currentTime = new Date();
          latency = msg.serverTimestamp - currentTime;

          if (emote) {
            _context2.next = 25;
            break;
          }

          return _context2.abrupt("return", client.say(msg.channelName, "@".concat(msg.senderUsername, " \uD83C\uDFD3 Ping: ").concat(Math.abs(latency), " ms")));

        case 25:
          return _context2.abrupt("return", client.say(msg.channelName, "@".concat(msg.senderUsername, " ").concat(emote, " \uD83C\uDFD3 Ping: ").concat(Math.abs(latency), " ms")));

        case 26:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[7, 15]]);
});
client.on("USERNOTICE", function (msg) {
  if (!msg.isSub() && !msg.isResub()) {
    return;
  }

  if (msg.isSub() || msg.isResub()) {//return client.say(msg.channelName, ``)   
  }
});