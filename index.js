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
  }
});

client.login(process.env.TOKEN);

// console.log(config.BOT_TOKEN);
