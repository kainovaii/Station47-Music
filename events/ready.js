const TestModel = require("../model/Test")

module.exports = async (client) => {
    console.log(`Connecté en tant que ${client.user.username}. Sur ${client.guilds.cache.size} serveurs, pour un total de ${client.users.cache.size} utilisateurs`);
    console.log(`Activity : ` + client.config.discord.activity)

    client.user.setActivity(client.config.discord.activity)
        .then(user => console.log(`Activity has been set !`))
        .catch(console.error);

    //    TestModel.getService(client.con, function(err, rows) {
    //         rows.forEach(function (data) {
    //             console.log(data.content)
    //         });
    //     })

	//    client.user.setPresence({ status: 'dnd' })
    //          .then(user => console.log(`Status has been set !`))
    //          .catch(console.error);

    //    client.user.setAvatar(client.config.discord.avatar)
    //         .then(user => console.log(`Avatar has been set !`))
    //         .catch(console.error);

    //     client.user.setUsername(client.config.discord.username)
    //         .then(user => console.log(`Username has been set !`))
    //                 .catch(console.error);
};