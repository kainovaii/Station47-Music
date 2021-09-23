module.exports = {
    name: 'dev',
    aliases: ['d'],
    category: 'Core',
    utilisation: '{prefix}dev',

    execute(client, message) {
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
    },
};