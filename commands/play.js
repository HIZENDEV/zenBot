const Command = require('./command')
const YTStream = require('youtube-audio-stream')

module.exports = class Play extends Command {

  static match(message) {
    return message.content.startsWith('.play')
  }

  static action (message) {
    let args = message.content.split(' ')
    message.delete()
    let voiceChannel = message.guild.channels
      .filter( channel => { return channel.type === 'voice' })
      .first()
    voiceChannel
      .join()
      .then( connection => {
        let stream = YTStream(args[1])
        connection.playStream(stream).on('end', () => {
          connection.disconnect()
        })
      })
  }

}
