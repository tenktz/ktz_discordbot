// Informacje o serwerze

const Discord = require('discord.js');

// ========================================== \\

module.exports = {
    name: 'serverinfo',
    description: 'Informations about discord where bot is on',
    execute(message, args) {
        const { guild } = message

        const { name, region, memberCount, owner, joinedAt, createdAt } = guild
        const ikona = guild.iconURL()

        const informacjeOSerwerze = new Discord.MessageEmbed()
        .setColor('#0043gg')
        .setTitle(`Informations about ${name}`)
        .setThumbnail(ikona)
        .setTimestamp()
        .addFields(
            {
            name: 'Region',
            value: region,
            },
            {
                name: 'Created At',
                value: createdAt,
            },
            {
            name: 'Member Count',
            value: memberCount,
            },
            {
            name: 'Joined At',
            value: joinedAt,
            },
            {
            name: 'Discord Owner',
            value: owner.user.tag,
            });
        message.reply(informacjeOSerwerze);
    }
}