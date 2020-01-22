const Helper = require('../HelperFunctions.js')

module.exports = {
	name: 'remove-roll',
	description: 'Removes any roll a user does not want',
	execute(message, args){
		const user = message.guild.member(message.author.id);
		if(args.length != 1){
			return message.channel.send(`**Please provide the role you wish to remove as an argument after the command!**\n`+
																	`Make sure the role you provide is spelled as it appears under your profile. Capitilization is unimportant.\n`+
																  `__For Example: !remove-role They/Them__`);
		}
		else{
			function returnSwitch(argument){
				switch(argument){

					// Pronouns Begin Here
					case "she/her":
					return message.guild.roles.find(role => role.name === 'She/Her');
					break;
					case "he/him":
					return message.guild.roles.find(role => role.name === 'He/Him');
					break;
					case "they/them":
					return message.guild.roles.find(role => role.name === 'They/Them');
					break;
					case "he/they":
					return message.guild.roles.find(role => role.name === 'He/They');
					break;
					case "she/they":
					return message.guild.roles.find(role => role.name === 'She/They');
					break;
					case "he/she":
					return message.guild.roles.find(role => role.name === 'He/She');
					break;
					case "any/all":
					return message.guild.roles.find(role => role.name === 'Any/All');
					break;
					case "questioning(gender)":
					return message.guild.roles.find(role => role.name === 'Questioning(Gender)');
					break;

					//Sexuality Begins Here
					case "gay":
					return message.guild.roles.find(role => role.name === 'Gay');
					break;
					case "lesbian":
					return message.guild.roles.find(role => role.name === 'Lesbian');
					break;
					case "bisexual":
					return message.guild.roles.find(role => role.name === 'Bisexual');
					break;
					case "pansexual":
					return message.guild.roles.find(role => role.name === 'Pansexual');
					break;
					case "asexual":
					return message.guild.roles.find(role => role.name === 'Asexual');
					break;
					case "demisexual":
					return message.guild.roles.find(role => role.name === 'Demisexual');
					break;
					case "queer":
					return message.guild.roles.find(role => role.name === 'Queer');
					break;
					case "questioning(sexuality)":
					return message.guild.roles.find(role => role.name === 'Questioning(Sexuality)');
					break;

					default:
					return Null;
				}
			}
			const role = returnSwitch(args[0]);

			if(role){
				Helper.GSARemoveRole(user,role,message);
			}
			else{
				return message.channel.send(`Sorry, I did not recognize that role, make sure you have formatted and spelled the role exactly as it appears under your profile.`);
			}
		}
	}
}
