module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} -` + client.lang.message.queueend)
    //client.player.play(message, "https://www.youtube.com/watch?v=MR2gGnVKpfE&ab_channel=TanguyDufort", { firstResult: true });
};