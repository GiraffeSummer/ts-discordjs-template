import { CommandInteraction, Client, ApplicationCommandType } from "discord.js";
import { ContextCommand } from "../Command";

//just copy and paste this commands, it has a few things pre made so it's easy as template
export default {
    name: "avatar",
    type: ApplicationCommandType.User,
    run: async (client: Client, interaction: CommandInteraction) => {
        const user = interaction.options.get('user')?.user || interaction.user;
        const avatarUrl = user.avatarURL()


        await interaction.followUp({
            embeds: [{
                title: user.username,
                image: { url: avatarUrl },
                color: 0x4169e1
            }]
        });
    }
} as ContextCommand;