import 'dotenv/config'
import { Client, ClientOptions, Intents } from "discord.js";

import EventSubscriber from "./lib/EventSubscriber";

import { LoadCommands, LoadContextMenuCommands } from './Commands'

console.log("Bot is starting...");

//GUILD_MESSAGES
const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});


LoadCommands().then((commands) => {
    //@ts-ignore
    console.log('Commands (' + commands.length + '): ' + commands.map(x => x.name).join(', '))
});

LoadContextMenuCommands().then((commands) => {
    //@ts-ignore
    console.log('Context Commands (' + commands.length + '): ' + commands.map(x => x.name).join(', '))
});




EventSubscriber(client)
client.login(process.env.TOKEN);