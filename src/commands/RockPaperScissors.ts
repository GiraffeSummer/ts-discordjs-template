import { BaseCommandInteraction, Client } from "discord.js";
import { Command } from "../Command";

export default {
    name: "rpc",
    description: "Play rock paper scissors",
    type: "CHAT_INPUT",
    ephemeral: true,
    options: [{
        type: 'STRING',
        name: 'pick',
        required: true,
        description: 'rock paper or scissors',
        choices: [
            {
                name: 'rock',
                value: 'rock'
            },
            {
                name: 'paper',
                value: 'paper'
            },
            {
                name: 'scissors',
                value: 'scissors'
            }
        ],
    }],
    run: async (client: Client, interaction: BaseCommandInteraction) => {
        const rps = ["rock", "paper", "scissors"]
        const pick: string = interaction.options.get('pick').value as string;

        const playerPick = rps.findIndex(x => x == pick);
        const botPick = RandomNum(2);

        let result = 'tied';

        if (playerPick == botPick) result = "Tied";
        else if (playerPick == 0 && botPick == 2) result = "Win";
        else if ((playerPick - botPick) % 3 == 1) result = "Win";
        else result = "Lose";

        const content = `You picked **${pick}** and I picked **${rps[botPick]}**, You **${result}**`

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
} as Command;

function RandomNum(max: number, min: number = 0): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}