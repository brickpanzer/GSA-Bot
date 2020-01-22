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
			var role_tmp;
			switch(args[0]){

				// Pronouns Begin Here
				case "she/her":
				role_tmp = message.guild.roles.find(role => role.name === 'She/Her');
				break;
				case "he/him":
				role_tmp = message.guild.roles.find(role => role.name === 'He/Him');
				break;
				case "they/them":
				role_tmp = message.guild.roles.find(role => role.name === 'They/Them');
				break;
				case "he/they":
				role_tmp = message.guild.roles.find(role => role.name === 'He/They');
				break;
				case "she/they":
				role_tmp = message.guild.roles.find(role => role.name === 'She/They');
				break;
				case "he/she":
				role_tmp = message.guild.roles.find(role => role.name === 'He/She');
				break;
				case "any/all":
				role_tmp = message.guild.roles.find(role => role.name === 'Any/All');
				break;
				case "questioning(gender)":
				role_tmp = message.guild.roles.find(role => role.name === 'Questioning(Gender)');
				break;

				//Sexuality Begins Here
				case "gay":
				role_tmp = message.guild.roles.find(role => role.name === 'Gay');
				break;
				case "lesbian":
				role_tmp = message.guild.roles.find(role => role.name === 'Lesbian');
				break;
				case "bisexual":
				role_tmp = message.guild.roles.find(role => role.name === 'Bisexual');
				break;
				case "pansexual":
				role_tmp = message.guild.roles.find(role => role.name === 'Pansexual');
				break;
				case "asexual":
				role_tmp = message.guild.roles.find(role => role.name === 'Asexual');
				break;
				case "demisexual":
				role_tmp = message.guild.roles.find(role => role.name === 'Demisexual');
				break;
				case "queer":
				role_tmp = message.guild.roles.find(role => role.name === 'Queer');
				break;
				case "questioning(sexuality)":
				role_tmp = message.guild.roles.find(role => role.name === 'Questioning(Sexuality)');
				break;

				default:
				return message.channel.send(`Sorry, I did not recognize that role, make sure you have formatted and spelled the role exactly as it appears under your profile.`);
			}

			if(role_tmp){
				const role = role_tmp;
				HelperFunctions.GSARemoveRole(user,role,message);
			}
		}
	}
}
