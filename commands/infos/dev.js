module.exports = {
    name: 'dev',
    aliases: ['d'],
    category: 'Core',
    utilisation: '{prefix}help <command name>',

    execute(client, message, args) {
        if (!args[0]) {
            message.channel.send({
                embed: {
                    color: 'RED',
                    author: { name: `` },
                    footer: { text: '' },
                    fields: [
                        { name: `Développeur`, value: 'KainoVaii, Dokxym'},
                    ],
                },
            });
        }
    },
};