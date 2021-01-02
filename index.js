// (./commands/)
const fs = require('fs');
const Discord = require('discord.js');

const client = new Discord.Client();

// Do kolorowych logów
const logi = console.log
const chalk = require("chalk")
//////////////////////////////////////////////////

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}


//////////////////////////////////////////////////

// Require do configu
const { prefix, token } = require('./config.json');


/////////// RESZTA 

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    message.delete();

    if(command === 'ping') {
        client.commands.get('ping').execute(message, args);
    } else if(command == 'serverinfo') {
        client.commands.get('serverinfo').execute(message, args);
    } else if(command == 'ktz') {
        client.commands.get('ktz').execute(message, args);
    } else if(command == 'avatar') {
        client.commands.get('avatar').execute(message, args);
    } else if(command == 'ban') {
        client.commands.get('ban').execute(message, args);
    } else if(command == 'kick') {
        client.commands.get('kick').execute(message, args);
    } else {
        const brak_komendy = new Discord.MessageEmbed()
        .setTitle('© KTZ DISCORD BOT')
        .setColor('#990000')
        .setDescription(`${message.author}, This command does not exist`)
        .setFooter('© KTZ DISCORD BOT');
        message.channel.send(brak_komendy);
    }
});

/// LOGOWANIE

client.once('ready', () => {
    logi(chalk.blueBright(`====================================`))
    logi(chalk.green(`Logged as ${client.user.tag}!`))
    logi(chalk.blueBright(`====================================`));
});

client.login(token);