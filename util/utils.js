const got = require('got');

exports.IDByLogin = async (userID) => {
    if (!userID) return null
    userData = await got(`https://api.ivr.fi/twitch/resolve/${encodeURIComponent(userID)}`, { responseType: 'json', throwHttpErrors: false })
    if (!userData.body.id) return null
    return userData.body.id
};