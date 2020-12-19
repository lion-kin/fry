const leveling = require('discord-leveling');
const Discord = require('discord.js');


module.exports = {
  name: "level",
  description: "Bleh",

  async run (client, message, args) {

  let user = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.author
 
  let output = await leveling.Fetch(user.id)
  message.channel.send({embed: {
    color: "RANDOM",
    description: `هی ${user}, تو در لول ${output.level} با ${output.xp} xp! هستی`
  }});   
  //(`هی ${user}, تو در لول ${output.level} با ${output.xp} xp! هستی`);
  }
 }