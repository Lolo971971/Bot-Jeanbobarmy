const Discord = require("discord.js");
const fs = require("fs")
const client = new Discord.Client();

client.login(process.env.TOKEN);

console.log("Le bot à été lancé");


client.commands = new Discord.Collection();

fs.readdir((error, f) =>{
    if(error) console.error("Les commandes n'ont pas pu être chargé");
    
    let commandes = f.filter(f => f.split(".").pop() === "js");

    commandes.forEach((f) =>{

        let commande = require('${f}');
        
        console.log('${f.lenght} en chargement');
        client.set(commands.help.name, commande)
    });
});

fs.readdir((error, f) =>{

})
