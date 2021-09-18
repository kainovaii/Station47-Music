# Station47 Music

- For configuration

```js
discord: {
    token: 'TOKEN',
    prefix: 'PREFIX',
    activity: 'ACTIVITY',
}
```

- `token`, the token of the bot available on the [Discord Developers](https://discordapp.com/developers/applications) section.
- `prefix`, the prefix that will be set to use the bot.
- `activity`, the activity of the bot.

In the console, type `npm install` to install all dependencies.

- To start the bot :

```
#With Node
node index.js
npm start #Indicated in package.json
```

All you have to do is turn on your bot !

### 🎵 Music commands

```
play <name/URL>, play music in a voice channel.
search <name>, open a panel to choose a music and then play it.
pause, pause the current music.
resume, puts the current music back on.
queue, see the next songs.
clear-queue, remove music in the queue.
shuffle, to mix the queue.
nowplaying, see music in progress.
loop, to enable or disable the repeat function.
volume <1 - 100>, change the volume.
skip, skip to next music.
stop, stop all music.
filter <filter>, add / remove filter.
w-filters, see filters.
```

### 💡 General commands

```
ping, see the bot latency.
help, see the list of available commands.
debug, see number of voice connections.
