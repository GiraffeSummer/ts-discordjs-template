import 'dotenv/config'
import { Client, ClientOptions, GatewayIntentBits as Intents } from "discord.js";

import EventSubscriber from "./lib/EventSubscriber";

import { LoadCommands, LoadContextMenuCommands } from './Commands'

console.log("Bot is starting...");

//GUILD_MESSAGES
const client = new Client({
    intents: [Intents.Guilds, Intents.GuildMessages]
});


LoadCommands().then((commands) => {
    //@ts-ignore
    console.log('Commands (' + commands.length + '): ' + commands.map(x => x.name).join(', '))
});

LoadContextMenuCommands().then((commands) => {
    //@ts-ignore
    if (commands)
        console.log('Context Commands (' + commands.length + '): ' + commands.map(x => x.name).join(', '))
});




EventSubscriber(client)
client.login(process.env.TOKEN);