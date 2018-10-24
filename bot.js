const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
Giveaway For FIFA 2019 Origin Account Join Now ....        
                
${member}
**`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
Giveaway For FIFA 2019 Origin Account Join Now ....        
                
${member}
**`) 
}).catch(console.error)
})
client.login(process.env.BOT_TOKEN);
