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



      client.on('message', message => {

  if (message.content.startsWith(prefix + "contact")) {
  if (!message.channel.guild) return;
  let args = message.content.split(" ").slice(1).join(' ');
  client.users.get("429572530660179969").send(
      "\n" + "**" + "● السيرفر :" + "**" +
      "\n" + "**" + "» " + message.guild.name + "**" +
      "\n" + "**" + " ● المرسل : " + "**" +
      "\n" + "**" + "» " + message.author.tag + "**" +
      "\n" + "**" + " ● الرسالة : " + "**" +
      "\n" + "**" + args + "**")
  }
  });


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
  .setDescription('***مرحبا بكل الضيوف يوم نادى غير عادي مرحبا فوق الألوف ***')
  .setImage('صوره لو تبي')
   message.channel.sendEmbed(EsTeKnAN);
  }
});



client.on("guildMemberAdd", eyad => {
  eyad.createDM().then(function (channel) {
  return channel.send("   نورت السرفر يا غالي [ ${eyad}  ]") 
}).catch(console.error)
}) 





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


  var prefix = "#";
client.on("message", message => {
              var args = message.content.substring(prefix.length).split(" ");
              if (message.content.startsWith(prefix + "clear")) {
                  if(!message.channel.guild) return message.reply('**:الامر للسيرفرات بس يا ذكي**');         
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**يلعن ام الذكاء ما عندك صلاحيات**');
          var msg;
          msg = parseInt();
        
        message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
        message.channel.sendMessage("", {embed: {
          title: "``تم مسح 100 رساله ``",
          color: RANDOM,
          footer: {
            
          }
        }}).then(msg => {msg.delete(3000)});
                            }
  
       
  });






var prefix = "#";
 
client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
// -say
  if (command === "say") {
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
 
 
 
if (command == "embed") {
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor(0x23b2d6)
    message.channel.sendEmbed(say);
    message.delete();
  }
 
 
});




const cuttweet = [
     'كت تويت ‏- تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
     'كت تويت ‏- أكثر شيء يُسكِت الطفل برأيك؟',
     'كت تويت ‏- الحرية لـ ... ؟',
     'كت تويت ‏- قناة الكرتون المفضلة في طفولتك؟',
     'كت تويت ‏- كلمة للصُداع؟',
     'كت تويت ‏- ما الشيء الذي يُفارقك؟',
     'كت تويت ‏- ما الشيء الذي يُفارقك؟',
     'كت تويت ‏- موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
     'كت تويت ‏- أيهما ينتصر، الكبرياء أم الحب؟',
     'كت تويت| بعد ١٠ سنين ايش بتكون ؟',
 
     'كت تويت ‏- مِن أغرب وأجمل الأسماء التي مرت عليك؟',
     '‏كت تويت| عمرك شلت مصيبة عن شخص برغبتك ؟',
'كت تويت ‏- أكثر سؤال وجِّه إليك مؤخرًا؟',
     '‏كت تويت|ما هو الشيء الذي يجعلك تشعر بالخوف؟',
     '‏كت تويت|وش يفسد الصداقة؟',
     '‏كت تويت|شخص لاترفض له طلبا ؟',
     '‏كت تويت|كم مره خسرت شخص تحبه؟.',
     '‏كت تويت|كيف تتعامل مع الاشخاص السلبيين ؟',
     '‏كت تويت|كلمة تشعر بالخجل اذا قيلت لك؟',
     '‏كت تويت|هل تُخفي نجاحك أو كت كت تويت | هل تخفي نجاحك أو أشيائك الجميلة خوفاً من العين والحسد؟',
     '‏كت تويت|جسمك اكبر من عٌمرك او العكسّ ؟!',
     '‏كت تويت|أقوى كذبة مشت عليك ؟',
     '‏كت تويت|تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
     'كت تويت|هل حدث وضحيت من أجل شخصٍ أحببت؟',
     '‏كت تويت|أكثر تطبيق تستخدمه مؤخرًا؟',
     '‏كت تويت|‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
     '‏كت تويت|وش محتاج عشان تكون مبسوط ؟',
     '‏كت تويت|مطلبك الوحيد الحين ؟',
     '‏كت تويت|- هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
]
 
client.on('message', message => {
  if (message.content === `#كت تويت`) {
message.channel.sendMessage({embed: {
  color: 3547003,
  description: `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`
}});
};
});


Client.on('message', message => {
if (message.content.split(' ')[0] == 'bc')
 message.guild.members.forEach( member => {
         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
member.send( `${member} ! ` + "**" + message.guild.name + " : ** " + message.content.substr(3));
                                                            message.delete();
});
});
Client.on("message", message => {
    var prefix = "#";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix - "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
 if (!args[1]) {
                                let embed3 = new Discord.RichEmbed()
                                .setDescription(":white_check_mark: | تم ارسال للكل رساله فارغه")
                                .setColor("#FF0000")
                                message.channel.sendEmbed(embed3);
                            } else {
 
                            let embed4 = new Discord.RichEmbed()
                                                            .setDescription(':white_check_mark: | تم ارسال للكل الرساله !')
                                                            .setColor("#008000")
                                message.channel.sendEmbed(embed4);
                                                      message.delete();
                            }
                          }
});







client.on('message', message => {
if (message.content === "#help") {
message.react("✅")
 
 
}
});
 
 
 
 
client.on('message', message => {
  if(message.content.startsWith ('#help')) {
      if(!message.channel.guild) return;
    let embed = new Discord.RichEmbed()
    .setColor('#044812')
          .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL)
 
    .setDescription(`**[ تــــــــم الارســــال بالخـــــــاص ]** `)
        message.channel.send()
 
message.channel.sendEmbed(embed)
}
});



client.on('message', message => {
         if (message.content === "#welcome") {
             if(!message.channel.guild) return;
                  if(!message.channel.guild) return message.reply('**sorry, This Command For Server **');        
     if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('**You do not have premisson    **');
                              if (!message.guild.member(client.user).hasPermission('ADMINISTRATOR')) return message.reply('**im Dont have premisson **');
                                            message.channel.send('__**Done ✅**__')            
message.guild.createChannel('welcome', 'text');
 
 
}
 
});






client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('#bc-serverat')){
 if(!message.author.id === '299606795888885763') return;
message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});




client.on('message', message => {
    if (message.content.startsWith("#avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
         
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});




client.on("message", message => {
     if (message.content === "#ban") {
         if(!message.channel.guild) return message.reply('** This command only for servers **');
        message.reply("bla bla")
     }
});



client.on("message", message => {
     if (message.content === "#kick") {
         if(!message.channel.guild) return message.reply('** This command only for servers **');
        message.reply("bla bla")
     }
});



client.on('message', message => {
var prefix = "#";
 
    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
    if (!args[1]) {
message.channel.send("```**-bc <message>**```");
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .addField('✍ المرسل : ', `${message.author.username}#${message.author.discriminator}`)
                        .addField('---------------------------')
            .addField('📩 الرسالة : ', args)
                                    .addField('---------------------------')
                        .addField('✨ السيرفر :', `${message.guild.name}`)
            .setColor('RANDOM')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
    }
    } else {
        return;
    }
});
 



const Client = new Discord.Client();
 
 
 
 
 
 
 
         client.on('message', message => {
            if (message.content === 'برب') {
              message.channel.sendFile("./tyt.png");
            }
         });
 
 
 
 
 
 
 
         client.on('message', message => {
            if (message.content === 'السلام عليكم') {
              message.channel.sendFile("./5bz.png");
            }
         });
 
 
 
 
 
 
 
 
         client.on('message', message => {
            if (message.content === 'حشيش') {
              message.channel.sendFile("./2.png");
            }
         });




    client.on('message', function(message) {
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        var iiMo = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTimestamp()
        .setTitle('``I have received a new DM !``')
        .setThumbnail(`${message.author.avatarURL}`)
        .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
        .setFooter(`From **${message.author.tag} (${message.author.id})**`)
    client.channels.get("383641139858767882").send({embed:iiMo});
    }
});




client.on('message', function(message) {
    if(message.content.startsWith(prefix + 'roll')) {
        let args = message.content.split(" ").slice(1);
        if (!args[0]) {
            message.channel.send('**Put a number**');
            return;
            }
    message.channel.send(Math.floor(Math.random() * args.join(' ')));
            if (!args[0]) {
          message.edit('1')
          return;
        }
    }
});





   var prefix = "#";
var cats = [
 
  "https://i.imgur.com/BZhCIrX.gif",
  "https://i.imgur.com/VkCWPV2.gif",
  "https://i.imgur.com/3X9dmME.gif",
  "https://i.imgur.com/Gd2pPvf.gif",
  "https://i.imgur.com/S8b93f1.gif",
  "https://i.imgur.com/K8IuaSM.gif",
  "https://i.imgur.com/YB3y4MT.gif",
  "http://i.imgur.com/OTAeXcf.jpg",
  "http://i.imgur.com/ZYn8zWH.jpg",
  "http://i.imgur.com/piDWdUz.jpg",
  "https://i.imgur.com/aZtGZHN.gif",
  "https://i.imgur.com/TBShA0f.gif",
  "https://i.imgur.com/1I5LTqm.gif",
  "https://i.imgur.com/KDOE0hn.gif",
  "https://i.imgur.com/1iVFb8H.gif",
  "https://i.imgur.com/N8ShK7X.gif",
  "https://i.imgur.com/OlNdzhV.gif",
  "https://i.imgur.com/4mBnmEy.gif",
  "https://i.imgur.com/TPinfUc.gif",
]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'cat')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});


client.on('message', message => {
     if (message.content === "#ping") {
      const embed = new Discord.RichEmbed()
 
  .setColor("#FF0000")
  .addField('Bot Ping is' , `${Date.now() - message.createdTimestamp}` + ' ms`')
 
  message.channel.sendEmbed(embed);
    }
});



   client.on("message", msg => {
           var prefix = "#";
  if(msg.content.startsWith (prefix + "id")) {
    if(!msg.channel.guild) return msg.reply('**:x: This command for servers **');        
      const embed = new Discord.RichEmbed();
  embed.addField(":cloud_tornado:  name", `__**[ ${msg.author.username}#${msg.author.discriminator} ]**__`, true)
          .addField(":id:  id", `__**[ ${msg.author.id} ]**__`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField(':spy:  status', `__**[ ${msg.author.presence.status.toUpperCase()} ]**__`, true)
          .addField(':satellite_orbital:   playing', `__**[ ${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name} ]**__`, true)
          .addField(':military_medal:  role', `__**[ ${msg.member.roles.filter(r => r.name).size} ]**__`, true)
          .addField(':robot:  bot?  ', `__**[ ${msg.author.bot.toString().toUpperCase()} ]**__`, true);
      msg.channel.send({embed: embed})
  }
});




  var prefix = "#";
    client.on('message', message => {
    if(message.content.startsWith(prefix + '2avatar')) {
         var men = message.mentions.users.first();
      var heg;
      if(men) {
          heg = men
      } else {
          heg = message.author
      }
  var avatar = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle(heg.username)
.setImage(heg.avatarURL)
 
message.channel.sendEmbed(avatar)
    }
});



  client.on('message', message => {
      if (message.content.startsWith(prefix + 'cl')) {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(`ماعندك هذا البرمشن[*MANAGE_MESSAGES*] `).catch(console.error);
    message.delete()
    if(!message.channel.guild) return;
let args = message.content.split(" ").slice(1);
 
  const messagecount = parseInt(args.join(' '));
 
  message.channel.fetchMessages({
 
    limit: messagecount
 
}).then(messages => message.channel.bulkDelete(messages));
};
 
});




client.on('message', function(msg) {
         var prefix = "#"
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:** Server Type **',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** Roles**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':pencil:**Text Channel**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**Voice Channel **',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**owner**',`**${msg.guild.owner}**`,true)
      .addField(':id:**Server ID**',`**${msg.guild.id}**`,true)
      msg.channel.send({embed:embed});
    }
  });





         client.on("guildMemberAdd", member => {
    var moment = require("moment");
 
                    let modlog2 = client.channels.find('name', 'welcome');
 
         moment.locale('ar-ly');
         var h = member.user;
        let heroo = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(h.avatarURL)
        .setAuthor(h.username,h.avatarURL)
        .addField(': تاريخ دخولك الدسكورد',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)            
         .addField(': تاريخ دخولك السيرفر',`${moment(member.joinedAt).format('D/M/YYYY h:mm a ')} \n\`\`${moment(member.joinedAt).startOf(' ').fromNow()}\`\``, true)      
         .setFooter(`${h.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     modlog2.send({embed:heroo});
 
 
 
 
 
});
 


 client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'welcome');
  if (!channel) return;
  let memberavatar = member.user.avatarURL
  let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(memberavatar)
    .addField('**Welcome**',`**[${member}]**`)
    .addField('**u r member number**',`**[${member.guild.memberCount}]**`)
 
    channel.send({embed:embed});
}
);
 
 client.on('guildMemberRemove', member => {
  const channel = member.guild.channels.find('name', 'welcome_1');
  if (!channel) return;
  let memberavatar = member.user.avatarURL
  let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(memberavatar)
    .addField('**✋ |Good bye| ✋**',`**[${member}]**`)
    .addField('**👇 |Number of members now| 👇**',`**[${member.guild.memberCount}]**`)
 
    channel.send({embed:embed});
}
);





    var prefix = "#";
             client.on('message', message => {
                if(message.content === prefix + "invite") {
                    let embed = new Discord.RichEmbed ()
                    embed.setTitle("**:arrow_right: للدخول لسيرفر الدعم الفني**")
                    .setURL("https://discord.gg/HwMVt4J");

                   message.channel.sendEmbed(embed);
                  }
});


 client.on('message', message => {
    if (message.content.startsWith("-link")) {
 
        message.channel.createInvite({
        thing: true,
        maxUses: 1,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("Done  🔗|🔗  on DM")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("This link will stay with you 24 hours 🔗")
      message.author.sendEmbed(Embed11)
    }
});






client.on("message", message => {
  let command = message.content.split(" ")[0];
  if (command === "#mute") {
          if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');
                  if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **");
  let user = message.mentions.users.first();
  let modlog1 = client.channels.find('name', 'logs');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!modlog1) return message.reply("** يوجد الروم المراد ارسال المعلومات له 'Mute-Log'**");
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **');
  const embed = new Discord.RichEmbed()
    .setColor(720505)
    .addField('Mute', ' | :white_check_mark: |')
    .addField('Muted', `${user.username}#${user.discriminator} `)
    .addField('By:', `${message.author.username}#${message.author.discriminator}`)
   message.channel.send({embed: embed});
 
  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);
 
  if (message.guild.member(user).roles.has(muteRole.id)) {
      client.channels.get(modlog1.id).send({embed}).catch(console.error);
  } else {
    message.guild.member(user).addRole(muteRole).then(() => {
      client.channels.get(modlog1.id).send({embed}).catch(console.error);
    });
  }
 
};




  if (command === "#unmute") {
          if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');        
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **");
  let user = message.mentions.users.first();
  let modlog2 = client.channels.find('name', 'logs');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **");
  if (!modlog2) return message.reply("**لا يوجد الروم المراد ارسال المعلومات له 'Mute-Log'**");
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **');
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .addField('UnMute ', ' | :white_check_mark: |')
    .addField('Unmuted', `${user.username}#${user.discriminator} `)
    .addField('By:', `${message.author.username}#${message.author.discriminator}`)
   message.channel.send({embed: embed});
 
  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **');
 
  if (message.guild.member(user).removeRole(muteRole.id)) {
      client.channels.get(modlog2.id).send({embed});
  } else {
    message.guild.member(user).removeRole(muteRole).then(() => {
      client.channels.get(modlog2.id).send({embed});
    });
  }
 
};
 
});



   client.on('message', message => {
     if (message.content === "#help") {
message.author.send(`  **
__ ● ▬▬▬▬▬▬▬▬▬#General#▬▬▬▬▬▬▬▬▬ ● __
📋-=#inv#=--=#رابط البوت#=-
📋-=#server#=--=#معلومات السيرفر#=-
📋-=#avatar#=--=#صوره عرضك او صوره عرض اي شخص#=-
📋-=#id#=--=#معلوماتك#=-
**`);
    }
});




   client.on('message', message => {
     if (message.content === "#help") {
message.author.send(`  **
__ ● ▬▬▬▬▬▬▬▬▬#Games#▬▬▬▬▬▬▬▬▬ ● __
🎲-=#cat#=--=#قطط#=-
🎲-=#لو خيروك#=--=#لو خيروك#=-
🎲-=#كت تويت#=--=#كت تويت#=-
**`);
    }
});












      client.on('message', message => {
        if (message.content === "#inv") {
            if(!message.channel.guild) return;
        let embed = new Discord.RichEmbed()
        .setAuthor(`-#| ${message.author.username} |#-`, message.author.avatarURL)      
        .setTitle(`:small_orange_diamond:Click Here.. !`)
        .setURL(`https://discordapp.com/api/oauth2/authorize?client_id=450216040983691266&permissions=8&scope=bot`)
        .setThumbnail(" https://cdn.discordapp.com/avatars/377904849783750667/6c76e412f18c142dfd711d05fb363869.png?size=2048")
        .addField(':small_blue_diamond:Byـ:', "<@" + message.author.id + ">")        
     message.channel.sendEmbed(embed);
       }
   });


client.on('message', message => {
    if(message.content == '#server') {
    const embed = new Discord.RichEmbed()
    .setDescription(`
**   📗  online:  **__${message.guild.members.filter(m=>m.presence.status == 'online').size}__
 
**   📕  dnd:      **__${message.guild.members.filter(m=>m.presence.status == 'dnd').size}__
 
**   📙  idle:     **__${message.guild.members.filter(m=>m.presence.status == 'idle').size} __  
 
**   📓   offline:  **__${message.guild.members.filter(m=>m.presence.status == 'offline').size}__
 
**   🔖   all: **__${message.guild.memberCount}__`)      
 
         message.channel.send({embed});
 
    }
  });
 


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
