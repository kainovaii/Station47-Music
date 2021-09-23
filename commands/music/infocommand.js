module.exports = {
    name: 'infocommand',
    aliases: ['ic'],
    category: 'Core',
    utilisation: '{prefix}infocommand',

    execute(client, message) {
        message.channel.send({
            embed: {
                color: 'GREEN',
                title: 'Commande',
                fields: [
                    {name: 'play <nom/URL>', value: 'Jouer de la musique dans un canal vocal.'},
                    {name: 'search  <nom>', value: 'Ouvrez un panneau pour choisir une musique, puis jouez-la.'},
                    {name: 'pause', value: 'Mettre en pause la musique en cours.'},
                    {name: 'queue', value: 'Voir les prochaine musiques.'},
                    {name: 'clear-queue', value: 'Supprimer les musiques dans la file d\'attente.'},
                    {name: 'nowplaying', value: 'Voir la musique en cours.'},
                    {name: 'loop', value: 'Pour activer ou désactiver la fonction de répétition.'},
                    {name: 'volume <1 - 100>', value: 'Changer le son.'},
                    {name: 'skip', value: 'Passer à la musique suivante.'},
                    {name: 'stop', value: 'Arrêter la musique.'},
                ],
                thumbnail: { url: 'https://i.imgur.com/yYb2Cqp.png' }
            },
        });
    },
};