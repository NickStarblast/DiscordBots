const Discord = require('discord.js')
const client = new Discord.Client()
const fs = require('fs')
const ytdl = require('ytdl-core')

function getUserFromMention(mention) {
	if (!mention) return;

	if (mention.startsWith('<@') && mention.endsWith('>')) {
		mention = mention.slice(2, -1);

		if (mention.startsWith('!')) {
			mention = mention.slice(1);
		}

		return client.users.cache.get(mention);
	}
}

var parseJson = function(jsonString) {
  var converted = convertNl(jsonString);
  return JSON.parse(converted);
};

var convertNl = function(jsonString) {
  return jsonString
    .replace(/(\r\n)/g, '\n')
    .replace(/(\r)/g,   '\n')
    .replace(/(\n)/g,  '\\n');
};

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}.`)
  client.user.setPresence({
    status: "online",
    game: {
        name: "?help",
        type: "STREAMING"
    }
});
})

client.on('message', async msg => {
  args = msg.content.split(' ') ;
  var voiceChannel_;
  channel_announce_nor = "743859470047772684";
  channel_announce_staff = "744156516164173847"
  if (args[0] === '?hi' || args[0] === '?hello') {
    msg.channel.send('Hello <@' + msg.author.id + '>!') ;
  }
  if(msg.channel.id === '743859092333789255') {
    if(msg.content.indexOf('starblast.io') == -1) {
      msg.author.send("Oops, please post a game link.");
      msg.delete();
    }
  }
  if(msg.channel.id === '743859313851891879') {
    if(msg.content.indexOf('discord.gg') == -1) {
      msg.author.send("Oops, please post a discord invite link.");
      msg.delete();
    }
  }
  if(msg.channel.id === '743900640832389160') {
    if (args[0] === '?help') {
      msg.channel.send({
      embed: {
        color: 0xff9900,
        fields: [
          {
            name: "?help",
            value: "Type this for display this message."
          },
          {
            name: "?link",
            value: "Type this for display invite link of this server."
          },
          {
            name: "?rule",
            value: "Type this for display the rules. You need to read the rules."
          },
          {
            name: "?hello or ?hi",
            value: "Hello!"
          },
          {
            name: "?version or ?ver or ?v",
            value: "Type this for display bot's version."
          },
          {
            name: "?mod",
            value: "Type `?mod help` for help of this command."
          }
        ]
      }
    }) ;
    msg.channel.send("WARN: Please switch `Link Previews` to TRUE (User options)") ;
    } else if (args[0] === '?rule') {
      msg.channel.send('**Rule 1**\nNo spam unless in <#743858882492760124>\n\n**Rule 2**\nIf you want to whine about another player then do it in <#743857794544828506>' + 
      '\n\n**Rule 3**\nTry to keep the language somewhat clean. Ignored in <#743857794544828506>\nDon’t offend other members of this server either.\n\n' +
      '**Rule 4**\nStay on topic. There is an off topic channel!\n\n**Rule 5**\nNo piracy. This could be things such as sharing ECP codes or other personal paid for items.\n\n' +
      '**Rule 6**\nNo NSFW content. Because why, why would you do that?\n\nFailure to follow rules will result in a warning, being kicked, or even being banned, depending on how bad it is. Saying you didn’t read the rules will only make it worse.');
    } else if (args[0] === '?version' || args[0] === '?ver' || args[0] === '?v') {
      msg.reply("\n" + 'Bot Version: 2.21.11' + "\n" + 'Author: ℕ𝕚𝕔𝕜') ;
    } else if (args[0] === '?link') {
      msg.reply("Here you are.\n" + 'https://discord.gg/h7khXe8') ;
    } else if (args[0] === '?mod') {
      try {
        if(args[1])
        {        
          if(args[1] === 'list') {
            var mods = "";
            let data_str = fs.readFileSync('links.json');
            let data = JSON.parse(data_str);
            var mod_list = [];
            var mod_output = [];
            if(data.length == 0) {
              mods = "No";
            } else {
              mods = data.length;
              for(var i = 0; i < data.length; i++) {
                mod_list.push({
                  id: data[i].id,
                  title: data[i].title,
                  author: data[i].author,
                  mode: data[i].mode,
                  link: data[i].link
                });
                mod_output.push({
                  name: mod_list[i].title + " [" + mod_list[i].mode + "] by " + mod_list[i].author,
                  value: "[" + mod_list[i].link + "](" + mod_list[i].link + ")\n"
                });
              }
            }
            msg.channel.send({
              embed: {
                color: 0x00aaff,
                title: "━━━━━« Mods List »━━━━━",
                description: mods + " available mods\n",
                fields: mod_output
              }
            });
          } else if (args[1] === 'help') {
            msg.channel.send({
              embed: {
                color: 0x00aaff,
                title: "━━━━━« Commands & Arguments »━━━━━",
                fields: [
                  {
                    name: "?mod list",
                    value: "Type this for list of available mods."
                  },
                  {
                    name: "?mod help",
                    value: "Type this for help of this command."
                  }
                ]
              }
            });
          } else {
            msg.reply('Couldn\'t be processed because of Argument 1 wasn\'t set.\nType `?mod help` for help of this command.') ;
          }
        } else {
          msg.reply('Couldn\'t be processed because of Argument 1 wasn\'t set.\nType `?mod help` for help of this command.') ;
        }
      } catch(e) {
        msg.reply('An error occured while processing.') ;
      }
    }
  }
})

client.login('NzQzODkzMjU4ODUzNDE2OTgw.XzbSlQ.S4E8in9TklYS4YEquVMWcjsApgQ')