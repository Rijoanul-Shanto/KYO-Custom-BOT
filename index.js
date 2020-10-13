const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();

const prefix = ">";

client.on("ready", () => {
  console.log("Knocked You Out!");
});

client.on("message", function (message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(" ");
  const command = args.shift().toLowerCase();

  if (command === "hi") {
    message.reply("Hello!");
  } else if (command == "avatar") {
    message.reply(message.author.displayAvatarURL());
  } else if (command == "server") {
    client.guilds.cache.forEach((guild) => {
      // console.log(guild.emojis);
      const embed = new Discord.MessageEmbed()
        .setColor("#0099ff")
        .setTitle(guild.name)
        .addField("Total Members:", guild.memberCount)
        .addField("Server Created On:", guild.createdAt)
        .addField("Verification Level", guild.verificationLevel)
        .setThumbnail(
          "https://cdn.discordapp.com/icons/505848168668332052/d6fe436dc8e4b175e3884e5a42959327"
        )
        .addFields(
          { name: "Server Owner:", value: guild.owner, inline: true },
          {
            name: "Server Superuser:",
            value: client.users.cache.get("498513765608849408"),
            inline: true,
          }
        )
        .setFooter(
          message.author.username + " requested server info",
          message.author.avatarURL()
        )
        .setTimestamp();
      message.channel.send(embed);
    });
  }
});

client.login(process.env.TOKEN);
