const Discord = require('discord.js')

const token = 'NTMwNDA1MDY0NTMyMDMzNTU4.Dw-57g.qTEUimVfSny9jr7l7lretALDUnQ'
const BOT = new Discord.Client()

const Google = require('./commands/google')
const Avatar = require('./commands/avatar')
const Play = require('./commands/play')

BOT.on('ready', () => {
  console.log(`Logged in as ${BOT.user.tag}!`);
  BOT.user.setActivity('nodeJS server', { type: 'LISTENING' }).catch(console.error)
});

BOT.on('guildMemberAdd', member => {
  member.createDM().them(function(channel) {
    return channel.send(`Welcome on this channel ${member.displayName}!`)
  }).catch(console.error)
})

BOT.on('message', msg => {

  let commandUsed = Google.parse(msg) || Avatar.parse(msg) || Play.parse(msg)

});

BOT.login(token);
