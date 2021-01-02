// AWATAR

const Discord = require('discord.js');

// ========================================== \\

module.exports = {
    name: 'avatar',
    description: 'Show user discord avatar by command',
    execute(message, args) {
        let awatar = new Discord.MessageEmbed()
        if(!message.mentions.users.first()) {
            awatar.setDescription(`Avatar ${message.author.tag}`)
            awatar.setImage(message.author.displayAvatarURL())
            awatar.setColor(`RANDOM`)
            awatar.setTimestamp()
            awatar.setFooter(`By ${message.author.username}`)
            return message.channel.send(awatar);
        } else {
            let User = message.mentions.users.first()
            awatar.setDescription(`Avatar ${User.tag}`)
            awatar.setImage(User.displayAvatarURL())
            awatar.setColor(`RANDOM`)
            awatar.setTimestamp()
            awatar.setFooter(`By ${message.author.username}`)
            return message.channel.send(awatar)
        }
    }
}