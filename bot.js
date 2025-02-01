// IMPORTS
const { Client, Events, GatewayIntentBits } = require ('discord.js')
require("dotenv").config()


// INTENTS
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
})


// LOGIN
client.login(process.env.BOTKEY)


client.on('ready', (c) => {
    console.log("Astolfo!")
})
