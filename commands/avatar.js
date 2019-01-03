const Command = require('./command')

module.exports = class Avatar extends Command {

  static match(message) {
    return message.content.startsWith('.avatar')
  }

  static action (message) {
    let args = message.content.split(' ')
    args.shift()
    message.delete()
    message.channel.send(message.author.avatarURL)
  }

}
