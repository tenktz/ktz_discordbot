module.exports = {
    name: 'test',
    description: 'Test command',
    execute(message, args) {
        // Wysłanie testowej wiadomości na kanał gdzie została wyexecutowana komenda (test)
        message.channel.send('Commmmmmand work lololo');
    }
}