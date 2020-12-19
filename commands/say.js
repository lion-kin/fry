const { MessageFlags } = require("discord.js");
const Discord = require('discord.js')
const randomPuppy = require('random-puppy');

module.exports = {
    name: "say",
    desciption: "say command",

    async run (client, message, args) {
        const subReddits = ["dankmemes", "meme", "memes"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]
        let msg;
        let textChannel = message.mentions.channels.first()
        message.delete()

        if(textChannel) {
            msg = args.slice(1).join(" ");
            const pingg = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription(msg);
    
            textChannel.send(pingg)
        } else {
            msg = args.join(" ");
            const pinggg = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription(msg);
    
            message.channel.send(pinggg)
        }
    }
}