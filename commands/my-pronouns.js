const Helper = require('../HelperFunctions.js')

module.exports = {
	name: 'my-pronouns',
	description: 'Sets User\'s pronouns',
	execute(message,args){
		const user = message.guild.member(message.author.id);
		if(args.length != 1){
			return message.channel.send('**Please provide your pronouns after the command!**\n'+
																	'For example: !my-pronouns They/Them\n'+
																	'Currently Available Pronouns:\n'+
																	'She/Her | He/Him | They/Them | He/They | She/They | He/She | Any/All | Questioning(Gender)\n'+
																	'__If you don\'t see your pronouns on this list, message my creator @Brick and they will be added ASAP!__');
		}
		else if(args[0] === "she/her"){
			const role = message.guild.roles.find(role => role.name === 'She/Her');
			Helper.GSAAddRole(user,role,message);
		}
		else if(args[0] === "he/him"){
			const role = message.guild.roles.find(role => role.name === 'He/Him');
			Helper.GSAAddRole(user,role,message);
		}
		else if(args[0] === "they/them"){
			const role = message.guild.roles.find(role => role.name === 'They/Them');
			Helper.GSAAddRole(user,role,message);
		}
		else if(args[0] === "he/they"){
			const role = message.guild.roles.find(role => role.name === 'He/They');
			Helper.GSAAddRole(user,role,message);
		}
		else if(args[0] === "she/they"){
			const role = message.guild.roles.find(role => role.name === 'She/They');
			Helper.GSAAddRole(user,role,message);
		}
		else if(args[0] === "he/she"){
			const role = message.guild.roles.find(role => role.name === 'He/She');
			Helper.GSAAddRole(user,role,message);
		}
		else if(args[0] === "any/all"){
			const role = message.guild.roles.find(role => role.name === 'Any/All');
			Helper.GSAAddRole(user,role,message);
		}
		else if(args[0] === "questioning(gender)"){
			const role = message.guild.roles.find(role => role.name === 'Questioning(Gender)');
			Helper.GSAAddRole(user,role,message);
		}
		else{
			message.channel.send('Sorry, I didn\'t recognize those pronouns! Message my creator, Brick, if you think this is wrong.\n'+
													'Currently Available Pronouns:\n'+
													'She/Her | He/Him | They/Them | He/They | She/They | He/She | Any/All | Questioning(Gender)\n'+
													'__If you don\'t see your pronouns on this list, message my creator @Brick and they will be added ASAP!__');
		}
	}
}
