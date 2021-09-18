module.exports = {
    name: 'play',
    aliases: ['p'],
    category: 'Music',
    utilisation: '{prefix}play [name/URL]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - ` + client.lang.message.novocalchannel);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - ` + client.lang.message.diferentchannel);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Merci d'indiquer le titre d'une chanson !`);

        client.player.play(message, args.join(" "), { firstResult: true });
    },
};