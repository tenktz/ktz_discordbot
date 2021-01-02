// BANOWANIE OSÓB

const Discord = require('discord.js');

// ========================================== \\

module.exports = {
    name: 'ban',
    description: 'Ban member from your discord server',
    execute(message, args) {
        const user = message.mentions.users.first();
        if (user) {
          const member = message.guild.members.resolve(user);

          if (member) {
            member
              .ban('You has been banned from this server')
              .then(() => {
                  const pomyslniezbanowano = new Discord.MessageEmbed()
                  .setAuthor(`KTZ DISCORD BOT - Ban`)
                  .setDescription(`${user.tag} successfuly has been banned by ${message.author}`)
                  .setFooter(`© KTZ DISCORD BOT`)
                  .setTimestamp();
                message.channel.send(pomyslniezbanowano);
              })
              .catch(err => {
                  const niemoge = new Discord.MessageEmbed()
                  .setTitle(`KTZ DISCORD BOT - Ban`)
                  .setDescription(`${user.tag} cannot be banned (I have too small permissions or user has the same or higher role)`)
                  .setFooter(`By: ${message.author.username}`)
                  .setTimestamp();
                message.channel.send(niemoge);
                // Wyświetl error w konsoli
                console.error(err);
              });
          } else {
              const niematakiegouzytkownika = new Discord.MessageEmbed()
              .setAuthor(`KTZ DISCORD BOT - Ban`)
              .setDescription(`There is no such user on the server as ${user.tag}`)
              .setFooter(`By: ${message.author}`)
              .setTimestamp();
            message.channel.send(niematakiegouzytkownika);
          }
        } else {
            const nikogonieoznaczyles = new Discord.MessageEmbed()
            .setAuthor(`KTZ DISCORD BOT - Ban`)
            .setDescription(`${message.author}, bad command usage, correct use:\n!ban @user`)
            .setFooter(`By: ${message.author.username}`)
            .setTimestamp();
          message.channel.send(nikogonieoznaczyles);
        }
    }
}