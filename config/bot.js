require('dotenv').config()
module.exports = {
    emojis: {
        off: ':x:',
        error: ':warning:',
        queue: ':bar_chart:',
        music: ':musical_note:',
        success: ':white_check_mark:',
    },

    discord: {
        token: process.env.DISCORD_TOKEN,
        prefix: '*',
        activity: 'beta.itomori.eu',
        username: 'Itomori',
        avatar: 'https://i0.hdslb.com/bfs/article/8f0c462b954e607014be312736e4e1dd91b0e4ae.jpg@942w_942h_progressive.webp',

    },

    filters: ['8D', 'gate', 'haas', 'phaser', 'treble', 'tremolo', 'vibrato', 'reverse', 'karaoke', 'flanger', 'mcompand', 'pulsator', 'subboost', 'bassboost', 'vaporwave', 'nightcore', 'normalizer', 'surrounding'],
};