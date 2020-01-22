module.exports = {
	name: 'commands',
	description: 'Shows all available commands',
	execute(message, args){
		return message.channel.send("__**Updated As Of 1/21/2020**__\n\n"+
																"!help - basic information on how Discord works, especially in relation to the club\n"+
																"!commands - You are here :)\n"+
																"!my-pronouns [ARGUMENT] - gives you a role indicating your pronouns to other club members\n"+
																"!my-sexuality [ARGUMENT] - gives you a role indicating your sexuality to other club members\n");
	}
}
