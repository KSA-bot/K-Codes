const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pong');
      }
});



client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : i1Suhaib`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : i1Suhaib ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`🌈رمضان كريم🌙`,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});



client.on('message', server => {
        let MyOwner = ['429572530660179969'];
    if(server.content === 'برا'){
        if(MyOwner.some(m => server.id == m)) {
    server.leave()
    server.channel.send('ابشر طال عمرك')
        } else {
server.channel.send("على كيف امك الدين هوا ؟")
        }
}

});



client.on('message', message => {
 if (message.content.startsWith("ولكم")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***WELCOME TO K،Codes***')
  .setImage('http://www.imgion.com/images/01/Welcome-buddy.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});









client.on("message", async message => {
            if(!message.channel.guild) return;
            var prefix = "#";
        if(message.content.startsWith(prefix + 'invites')) {
        var nul = 0
        var guild = message.guild
        await guild.fetchInvites()
            .then(invites => {
             invites.forEach(invite => {
                if (invite.inviter === message.author) {
                     nul+=invite.uses
                    }
                });
            });
          if (nul > 0) {
              console.log(`\n${message.author.tag} has ${nul} invites in ${guild.name}\n`)
              var embed = new Discord.RichEmbed()
                  .setColor("#000000")
                    .addField(`${message.author.username}`, `لقد قمت بدعوة **${nul}** شخص`)
                          message.channel.send({ embed: embed });
                      return;
                    } else {
                       var embed = new Discord.RichEmbed()
                        .setColor("#000000")
                        .addField(`${message.author.username}`, `لم تقم بدعوة أي شخص لهذة السيرفر`)

                       message.channel.send({ embed: embed });
                        return;
                    }
        }
if(message.content.startsWith(prefix + 'invite-codes')) {
let guild = message.guild
var codes = [""]
message.channel.send(":postbox: **لقد قمت بأرسال جميع روابط الدعوات التي قمت بأنشائها في الخاص**")
guild.fetchInvites()
.then(invites => {
invites.forEach(invite => {
if (invite.inviter === message.author) {
codes.push(`discord.gg/${invite.code}`)
}
})
}).then(m => {
if (codes.length < 0) {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `You currently don't have any active invites! Please create an invite and start inviting, then you will be able to see your codes here!`)
message.author.send({ embed: embed });
return;
} else {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `Invite Codes:\n${codes.join("\n")}`)
message.author.send({ embed: embed });
return;
}
})
}

});





client.on("guildMemberAdd", eyad => {
  eyad.createDM().then(function (channel) {
  return channel.send("   نورت السرفر يا غالي [ ${eyad}  ]") 
}).catch(console.error)
}) 




 client.on('message', message => {
if(message.content.startsWith(prefix +'sg')) {
      const A8tra7Room = message.guild.channels.find("name", "suggest")
      if(!message.channel.guild) return message.reply(`**هذا الأمر فقط ل السيرفرات :x: **`);
   let a8tra7 = message.content.split(" ").slice(1);
   var m8tr7 = message.author.id
if(!message.guild.channels.find("name","suggest")) return message.channel.send('**لايوجد روم اقتراح \`suggest\` **')
var Eror = new Discord.RichEmbed()
   .setTimestamp()
   .setDescription(`**الرجاء اكتب إقتراحك بعد الأمر **`)
   if(!a8tra7.join(" ")) return message.channel.send(Eror).then(message => {message.delete(50000)});
   var ThxForSug = new Discord.RichEmbed()
   .setTitle(`:white_check_mark: Success!`)
   .setTimestamp()
   .setDescription(`**شكراً على اقتراحك !**`)
.addField(`إقتراحك : `, a8tra7)
   var Sure = new Discord.RichEmbed()
   .setTimestamp()
   .setDescription(`**هل انت متأكد من ارسال الاقتراح؟ معك دقيقه قبل الالغاء**`)
.addField(`المحتوى : `, a8tra7)
message.channel.sendEmbed(Sure).then(msg => {
    msg.react('❎')
.then(() => msg.react('✅'))
 
let YesFilter = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
let NoFilter = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
 
let Yes = msg.createReactionCollector(YesFilter, { time: 60000 });
let No = msg.createReactionCollector(NoFilter, { time: 60000 });
 
Yes.on("collect", r => {
   var ala8tra7 = new Discord.RichEmbed()
   .setTimestamp()
   .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL)
   .setFooter(`${message.author.username}#${message.author.discriminator}`)
   .setTitle(`الاقتراح ⤵`)
   .setURL(`https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&permissions=21469585838&scope=bot`)
   .setDescription(`**|~~>~~** ${a8tra7} **~~<~~|**\n    **المقترح : __<@${m8tr7}>__**`)
   A8tra7Room.send(ala8tra7)
   message.channel.sendEmbed(ThxForSug).then(message => {message.delete(2000)})
msg.delete();
})
No.on("collect", r => {
message.channel.send('**تم الغاء اقتراحك بنجاح :white_check_mark: **').then(message => {message.delete(2000)})
msg.delete();
})
})
}
});





client.on('guildMemberAdd', eyad => {
  let channel = eyad.guild.channels.find('name', 'log');
  let memberavatar = eyad.user.avatarURL
    if (!channel) return;
  let embed = new Discord.RichEmbed()
      .setColor('GREEN')
      .setThumbnail(memberavatar)
      .setTitle('Member joined')
  .setTitle('Member Joined')
      .addField('UserName : ',`${eyad}`)
      .addField('User Id :', "**[" + `${eyad.id}` + "]**" )
      .addField('MemberCount :',`${eyad.guild.memberCount}`)
      .addField('Server: ', `${eyad.guild.name}`,true)                          
      .setFooter(" Join Log ! ")
      .setTimestamp()
 
    channel.sendEmbed(embed);
  });


client.on('guildMemberAdd', member => {
    if (!member || !member.id || !member.guild) return;
    const guild = member.guild; 
    
    const channel = member.guild.channels.find('name', 'log');
    if (!channel) return; 
    let memberavatar = member.user.avatarURL
    const fromNow = moment(member.user.createdTimestamp).fromNow();
    const isNew = (new Date() - member.user.createdTimestamp) < 900000 ? '🆕' : '';
    
    let embed = new Discord.RichEmbed()
       .setAuthor(`${member.user.tag}`, member.user.avatarURL)
       .setThumbnail(memberavatar)
       .setColor('GREEN')
       .setDescription(`📥 <@${member.user.id}> **دخل السيرفر**\n\n`)
       .setTimestamp(); 
     channel.send({embed:embed});
});
client.on('guildMemberRemove', member => {
    if (!member || !member.id || !member.guild) return;
    const guild = member.guild;
    
    const channel = member.guild.channels.find('name', 'log');
    if (!channel) return;
    let memberavatar = member.user.avatarURL
    const fromNow = moment(member.joinedTimestamp).fromNow();
    
    let embed = new Discord.RichEmbed()
       .setAuthor(`${member.user.tag}`, member.user.avatarURL)
       .setThumbnail(memberavatar)
       .setColor('RED')
       .setDescription(`📤 <@${member.user.id}> **خرج من السيرفر**\n\n`)
       .setTimestamp();
     channel.send({embed:embed});
});





client.on("roleCreate", rc => {
  const channel = rc.guild.channels.find("name", "log") //تقدر تغير اسم الشات
  if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(rc.guild.name)
  .setDescription(`***Created Role Name : *** **${rc.name}** `)
  .setColor(`RANDOM`)
  .setTimestamp(); 
  channel.sendEmbed(embed)
  }
  });
  
  client.on("roleDelete",  rd => {
  const channel = rd.guild.channels.find("name", "log")
  if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(rd.guild.name)
  .setDescription(`***Deleted Role Name : *** **${rd.name}** `)
  .setColor(`RANDOM`)
  .setTimestamp(); 
  channel.sendEmbed(embed)
  }
  });

client.on("channelCreate",  cc => {
  const channel = cc.guild.channels.find("name", "log")
  if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(cc.guild.name)
  .setDescription(`***Channel Created Name : *** **${cc.name}** ⬅️`)
  .setColor(`RANDOM`)
  .setTimestamp(); 
  channel.sendEmbed(embed)
  }
  });




   client.on("deleteChannel",  dc => {
  const channel = dc.guild.channels.find("name", "log")
  if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(dc.guild.name)
  .setDescription(`***Channel Deleted Name : *** **${dc.name}** ⬅️`)
  .setColor(`RANDOM`)
  .setTimestamp(); 
  channel.sendEmbed(embed)
  }
  });





client.on("message" , eyad =>  {
  let args = message.content.split(" ").slice(1).join(" ")
  if (eyad.content == 'leave') {
if(!args) return eyad.channel.send("اكتب سبب اخراجي :sob: ");
  if (eyad.author.id !== '429572530660179969') return eyad.reply(' لا يمكنك اخراج البوت ')
  eyad.guild.owner.send(" ${args}  تم اخراجي من سرفركم السبب هو")
  eyad.guild.leave()
  }
});





// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
