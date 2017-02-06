const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('The bot is online!');
});

client.on('message', message => {
    if(message.content === '!help'){
        message.reply('How may I help you, ' +  message.author.username);
    }
});

client.login('Mjc4MTQ5MjQ5MDg0OTQ4NDgx.C3ooOA.cx2W8p39253cRbavRUVTUGLzJNU');