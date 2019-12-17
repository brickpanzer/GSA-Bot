/*
 Written By: Johnathan Gossett
 12-16-19

 Discord Bot for University of Colorado - Boulder Gender & Sexuality Alliance server

 Using: Discord API & Discord.js
*/

const fs = require('fs');
const Discord = require('discord.js');
const config = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
	if(!message.content.startsWith(config.prefix) || message.author.bot) return;

	else{
		console.log('command detected');
		const args = message.content.slice(config.prefix.length).split(/ +/);
		const command = args.shift().toLowerCase();
		args[0] = args[0].toLowerCase();

		if(!client.commands.has(command)) return;

		try{
			client.commands.get(command).execute(message, args);
		} catch (error) {
			console.error(error);
			message.reply('Whoops! Something went wrong... Please message Brick with the command you were trying to use and hopefully it will be fixed soon!');
		}

	}
});

client.login(config.token);