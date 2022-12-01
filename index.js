const { Client, Events, GatewayIntentBits, ActivityType } = require('discord.js');
const config = require("./config.js");

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages]});

client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);

    const activities = [
        `The FalkLands`,
        `Huguitis Nodes`,
        `Code`,
        `Dead`
    ]
    setInterval(() => {
        const status = activities[Math.floor(Math.random() * activities.length)];
        client.user.setPresence({activities: [{ name: `${status}`}], status: 'dnd' })
    }, 10000);
});
client.on("messageCreate", async (message) => {
	if (message.author.bot) return false;
	if (message.content.includes("hi")) {
		message.reply(`how do you send me messages when i get online\nyou are crazy`);
	}
    if (message.content.includes("gamer")) {
		message.reply(`i need to ban gamer\nfor invading malvinas\nputo ingles`);
	}
    if (message.content.includes("falklands")) {
		message.reply(`british people is weird\nRETURN THE FALKLANDS`);
	}
    if (message.content.includes(`${client.user.id}`)) {
		message.reply(`is russian?`);
	}
    if (message.content.includes("752699129683247154")) {
		message.reply(`is russian?`);
	}
    if (message.content.includes("darren")) {
		message.reply(`I am better than Darren`);
	}
    if (message.content.includes("doctor")) {
		message.reply(`go to the doctor`);
	}
    if (message.content.includes("ugo")) {
		message.reply(`Gracias ugo :D`);
	}
    if (message.content.includes("759796588842450944")) {
		message.reply(`<@75979658884245094> IM TOO LAZY FOR THIS, GET HERE NOW!\n*Gracias ugo :D*`);
	}
    if (message.content.includes("emergency")) {
		message.reply(`Gamer\nGamer\nGamer\nEmergency\nGamer\nGamer\nGamer\nGamer\nGamer\nYour favoutite words\nI'm with a writing machine`);
	}
    if (message.content.includes("plan")) {
		message.reply(`**Plan:**\nbfer steals huguitis' phone and transfers ownership to bfer\nbfer renames it to bfernodes\nbfer gives gamer co owner`);
	}
});
client.login(config.token);