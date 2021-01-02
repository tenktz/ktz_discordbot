// WYRZUCANIE OSÓB

const Discord = require('discord.js');

// ========================================== \\

module.exports = {
    name: 'kick',
    description: 'Kick user from your discord server',
    execute(message, args) {
        const user = message.mentions.users.first();
        if (user) {
          const member = message.guild.members.resolve(user);

          if (member) {
            member
              .kick('You has been kicked from this server')
              .then(() => {
                  const pomyslniewyrzucono = new Discord.MessageEmbed()
                  .setAuthor(`KTZ DISCORD BOT - Kick`)
                  .setDescription(`${user.tag} successfuly has been kicked by ${message.author}`)
                  .setFooter(`© KTZ DISCORD BOT`)
                  .setTimestamp();
                message.channel.send(pomyslniewyrzucono);
              })
              .catch(err => {
                  const niemoge = new Discord.MessageEmbed()
                  .setTitle(`KTZ DISCORD BOT - Kick`)
                  .setDescription(`${user.tag} cannot be kicked (I have too small permissions or user has the same or higher role)`)
                  .setFooter(`By: ${message.author.username}`)
                  .setTimestamp();
                message.channel.send(niemoge);
                // Wyświetl error w konsoli
                console.error(err);
              });
          } else {
              const niematakiegouzytkownika = new Discord.MessageEmbed()
              .setAuthor(`KTZ DISCORD BOT - Kick`)
              .setDescription(`There is no such user on the server as ${user.tag}`)
              .setFooter(`By: ${message.author}`)
              .setTimestamp();
            message.channel.send(niematakiegouzytkownika);
          }
        } else {
            const nikogonieoznaczyles = new Discord.MessageEmbed()
            .setAuthor(`KTZ DISCORD BOT - Kick`)
            .setDescription(`${message.author}, bad command usage, correct use:\n!kick @user`)
            .setFooter(`By: ${message.author.username}`)
            .setTimestamp();
          message.channel.send(nikogonieoznaczyles);
        }
    }
}