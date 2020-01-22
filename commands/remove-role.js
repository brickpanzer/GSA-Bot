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
			switch(args[0]){

				// Pronouns Begin Here
				case "she/her":
				const role = message.guild.roles.find(role => role.name === 'She/Her');
				HelperFunctions.GSARemoveRole(user,role,message);
				break;
				case "he/him":
				const role = message.guild.roles.find(role => role.name === 'He/Him');
				HelperFunctions.GSARemoveRole(user,role,message);
				break;
				case "they/them":
				const role = message.guild.roles.find(role => role.name === 'They/Them');
				HelperFunctions.GSARemoveRole(user,role,message);
				break;
				case "he/they":
				const role = message.guild.roles.find(role => role.name === 'He/They');
				HelperFunctions.GSARemoveRole(user,role,message);
				break;
				case "she/they":
				const role = message.guild.roles.find(role => role.name === 'She/They');
				HelperFunctions.GSARemoveRole(user,role,message);
				break;
				case "he/she":
				const role = message.guild.roles.find(role => role.name === 'He/She');
				HelperFunctions.GSARemoveRole(user,role,message);
				break;
				case "any/all":
				const role = message.guild.roles.find(role => role.name === 'Any/All');
				HelperFunctions.GSARemoveRole(user,role,message);
				break;
				case "questioning(gender)":
				const role = message.guild.roles.find(role => role.name === 'Questioning(Gender)');
				HelperFunctions.GSARemoveRole(user,role,message);
				break;

				//Sexuality Begins Here
				case "gay":
				const role = message.guild.roles.find(role => role.name === 'Gay');
				HelperFunctions.GSARemoveRole(user,role,message);
				break;
				case "lesbian":
				const role = message.guild.roles.find(role => role.name === 'Lesbian');
				HelperFunctions.GSARemoveRole(user,role,message);
				break;
				case "bisexual":
				const role = message.guild.roles.find(role => role.name === 'Bisexual');
				HelperFunctions.GSARemoveRole(user,role,message);
				break;
				case "pansexual":
				const role = message.guild.roles.find(role => role.name === 'Pansexual');
				HelperFunctions.GSARemoveRole(user,role,message);
				break;
				case "asexual":
				const role = message.guild.roles.find(role => role.name === 'Asexual');
				HelperFunctions.GSARemoveRole(user,role,message);
				break;
				case "demisexual":
				const role = message.guild.roles.find(role => role.name === 'Demisexual');
				HelperFunctions.GSARemoveRole(user,role,message);
				break;
				case "queer":
				const role = message.guild.roles.find(role => role.name === 'Queer');
				HelperFunctions.GSARemoveRole(user,role,message);
				break;
				case "questioning(sexuality)":
				const role = message.guild.roles.find(role => role.name === 'Questioning(Sexuality)');
				HelperFunctions.GSARemoveRole(user,role,message);
				break;

				default:
				return message.channel.send(`Sorry, I did not recognize that role, make sure you have formatted and spelled the role exactly as it appears under your profile.`);
			}
		}
	}
}
