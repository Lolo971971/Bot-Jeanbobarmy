const Discord = require("discord.js");
const Fs = require("fs")
const client = new Discord.Client();

client.login(process.env.TOKEN);

console.log("Le bot à été lancé")


client.commands = new DiscordCollection();

fs.readir((error, f) =>{
    if(error) console.error("Les commandes n'ont pas pu être chargé");
    
    let commands = f.filter(f => f.split(".").pop() === "js");
})
