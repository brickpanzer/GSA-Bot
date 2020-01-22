exports.GSAAddRole = function(user, role, message){
	var new_member = false;
	user.addRole(role);
	if(!user.roles.find(role => role.name === 'Members')){
		user.addRole(message.guild.roles.find(role => role.name === 'Members'));
		new_member = true;
	}
	message.channel.send(`Added ${role} to user ${user}`);
	if(new_member){message.channel.send(`Welcome to GSA, ${user}!`);}
	message.delete();
}

exports.GSARemoveRole = function(user, role, message){
	user.removeRole(role).catch(console.error);
	message.delete();
}
