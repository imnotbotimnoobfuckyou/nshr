const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('-ab3tbcall')){
message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
Giveaway For FIFA 2019 Origin Account Join Now ....        
                https://discord.gg/WJMMPSA
${member}
**`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
Giveaway For FIFA 2019 Origin Account Join Now ....        
                https://discord.gg/WJMMPSA
${member}
**`) 
}).catch(console.error)
})
client.login(process.env.BOT_TOKEN);
