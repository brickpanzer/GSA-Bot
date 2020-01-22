const Helper = require('../HelperFunctions.js')

module.exports = {
	name: 'my-sexuality',
	description: 'Sets user\'sexuality',
	execute(message,args){
		const user = message.guild.member(message.author.id);
		console.log(`Sexuality:`+args[0]);
		if(args[0]){args[0] = args[0].toLowerCase();}
		if(args.length != 1){
			return message.channel.send('**Please provide your sexuality after the command!**\n'+
																	'For example: !my-sexuality Asexual\n'+
																	'Currently Available Arguments:\n'+
																	'Gay | Lesbian | Bisexual | Pansexual | Asexual | Demisexual | Queer | Questioning(Sexuality)\n'+
																	'__If you don\'t see your sexuality on this list, message my creator @Brick and it will be added ASAP!__');
		}
		else if(args[0] === "gay"){
			const role = message.guild.roles.find(role => role.name === 'Gay');
			Helper.GSAAddRole(user,role,message);
		}
		else if(args[0] === "lesbian"){
			const role = message.guild.roles.find(role => role.name === 'Lesbian');
			Helper.GSAAddRole(user,role,message);
		}
		else if(args[0] === "bisexual"){
			const role = message.guild.roles.find(role => role.name === 'Bisexual');
			Helper.GSAAddRole(user,role,message);
		}
		else if(args[0] === "pansexual"){
			const role = message.guild.roles.find(role => role.name === 'Pansexual');
			Helper.GSAAddRole(user,role,message);
		}
		else if(args[0] === "asexual"){
			const role = message.guild.roles.find(role => role.name === 'Asexual');
			Helper.GSAAddRole(user,role,message);
		}
		else if(args[0] === "demisexual"){
			const role = message.guild.roles.find(role => role.name === 'Demisexual');
			Helper.GSAAddRole(user,role,message);
		}
		else if(args[0] === "queer"){
			const role = message.guild.roles.find(role => role.name === 'Queer');
			Helper.GSAAddRole(user,role,message);
		}
		else if(args[0] === "questioning(sexuality)"){
			const role = message.guild.roles.find(role => role.name === 'Questioning(Sexuality)');
			Helper.GSAAddRole(user,role,message);
		}
		else{
			message.channel.send('Sorry, I didn\'t recognize that sexuality! Message my creator, Brick, if you think this is wrong.\n'+
													'Currently Available Arguments:\n'+
													'Gay | Lesbian | Bisexual | Pansexual | Asexual | Demisexual | Queer | Questioning(Sexuality)\n'+
													'__If you don\'t see your sexuality on this list, message my creator @Brick and it will be added ASAP!__');
		}
	}
}
