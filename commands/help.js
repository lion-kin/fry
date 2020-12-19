const pagination = require('discord.js-pagination');
const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports = {
    name: "help",
    description: "The help command, what do you expect?",

    async run (client, message, args){
        const subReddits = ["dankmemes", "meme", "memes"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]

        //Sort your commands into categories, and make seperate embeds for each category

        const moderation = new Discord.MessageEmbed()
        .setTitle('مدیریتی')
        .setColor("RANDOM")
        .addField('`H! kick`', 'یک نفر رو کیک کن')
        .addField('`H! ban`', 'یک نفر رو بن کن')
        .addField('`H! clear`', 'تا سی مسیج رو پاک کن')
        .addField('`H! createchannel`', 'یک چنل بساز')
        .addField('`H! createvchannel`', 'یک چنل صوتی بساز')
        .addField('`H! warn`', 'به یک نفر وارن بده')
        .addField('`H! warnings`', 'وارن های یک نفر رو ببین')
        .addField('`H! deletewarns`', 'وارن های یک نفر رو دیلیت کن')
        .addField('`H! setprefix`', 'پریفیکس بات رو برای سرورت عوض کن')
        .setTimestamp()

        const fun = new Discord.MessageEmbed()
        .setTitle('فان')
        .setColor("RANDOM")
        .addField('`H! meme`', 'یک میم ببین')
        .addField('`H! ascii`', 'متنت رو خطی کن')
        .addField('`H! say`', 'یه چیزی بگو تا بات برات بگه')
        .setTimestamp()

        const utility = new Discord.MessageEmbed()
        .setTitle('کاربردی')
        .setColor("RANDOM")
        .addField('`H! calculate`', 'یک ماشین حساب خوشگل' )
        .addField('`H! ping`', 'پینگ بات رو ببین')
        .addField('`H! weather`', 'اب و هوای شهر یا کشورتو ببین')
        .addField('`H! covid`', 'وضعیت کرونا تو کشورتو ببین')
        .addField('`H! level`', 'لولت رو ببین')
        .addField('`H! avatar`', 'عکس پروفایل هر کسی که میخوای رو بگیر')
        .addField('`H! user-info`', 'اطلاعات هر کسی که میخوای رو ببین')
        .setTimestamp()
        
        const Bazar = new Discord.MessageEmbed()
        .setTitle('بازار')
        .setColor("RANDOM")
        .addField('`H! store`', 'فروشگاه امروز رو ببین' )
        .addField('`H! buy`', 'یک چیزی بخر')
        .addField('`H! work`', 'کار کن')
        .addField('`H! inventory`', 'دارایی هات رو ببین')
        .addField('`H! bal`', 'عسل بفروش')
        .addField('`H! daily`', 'جایزه روزانت رو بگیر')
        .setTimestamp()


        const pages = [
                moderation,
                fun,
                utility,
                Bazar
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }
}