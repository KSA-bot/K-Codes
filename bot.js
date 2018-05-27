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





// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
