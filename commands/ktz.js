// AUTOR

const Discord = require('discord.js');

// ========================================== \\

module.exports = {
    name: 'ktz',
    description: 'Bot made by ktz#6155',
    execute(message, args) {
        const { guild } = message
        const name = guild
        
        const autor = new Discord.MessageEmbed()
        .setColor('#6645xx')
        .setTitle(`DISCORD BOT`)
        .setDescription(`${name} autor is ktz#6155, You can find me on github: https://github.com/tenktz`)
        .setFooter(`By: ${message.author.username}`)
        .setTimestamp();
        message.channel.send(autor);
    }
}