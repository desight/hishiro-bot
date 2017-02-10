const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json");

bot.on('ready', () => {
    console.log("Logged in.");
    bot.user.setGame("osu! | Use h!commands");
});

bot.on("guildMemberAdd", member => {
    let guild = member.guild;
    guild.defaultChannel.sendMessage(`Welcome, ${member.user.username}. Enjoy your stay here.`);
})
var chatemoji = ":speech_balloon:";
bot.on('message', message => {
if (message.isMentioned(bot.user)){
    probability = Math.floor(Math.random() * 7) + 1;
    if (probability === 1) {
        message.channel.sendMessage(`${chatemoji} Why would you say that to me? Would you like to die?`);
    }
    else if (probability === 2) {
        message.channel.sendMessage(`${chatemoji} Don't speak to me.`);
    }
    else if (probability === 3) {
        message.channel.sendMessage(`${chatemoji} I'm blocking you.`);
    }
    else if (probability === 4) {
        message.channel.sendMessage(`${chatemoji} But I want to be with you!`);
    }
    else if (probability === 5) {
        message.channel.sendMessage(`${chatemoji} Love me, daddy!`);
    }
    else if (probability === 6) {
        message.channel.sendMessage(`${chatemoji} Ahhhhh, ahigao!!!!`);
    }
    else if (probability === 7) {
        message.channel.sendFile('http://static.fjcdn.com/gifs/Spongebob+gif+dump+in+comments+krusty+krab+pizza+is+the_0a4b19_5426931.gif');
    }
} 

    if (message.author.bot) return;
    if (!message.content.startsWith(config.prefix)) return;
    let command = message.content.split(" ")[0];
    command = command.slice(config.prefix.length);
    console.log(command);

    let args = message.content.split(" ").slice(1);

// START OF COMMANDS

    if (command === "commands") {
        message.channel.sendMessage("A list of commands has been sent to you. Check your direct messages!");
        message.author.sendMessage("The prefix is h!. All commands:" + "```" + "\ncheck\ncalculator\nadd\nsubtract\nmultiply\ndivide\ncreator\ninvite\n8ball\nfml\nnoticemesenpai"+ "```");
    };

    if (command === "invite") {
        message.channel.sendMessage("The bot's link has been messaged to you. Check your direct messages!");
        message.author.sendMessage("Invite Link: https://discordapp.com/oauth2/authorize?client_id=279079307245256714&scope=bot&permissions=8");
        message.author.sendMessage("I appericiate you adding this bot to your/someone's server. Arigato!")
        message.author.sendFile("http://68.media.tumblr.com/6930c2285e4c7b778ba49b09ad9de0c4/tumblr_oan7vfY1yR1rd6sdio2_500.gif");
    }


    if (command === "calculator") {
        message.channel.sendMessage("Use the following commands for the calculator:" + "```" + "\nAddition: h!add\nSubtraction: h!subtract\nMultiplication: h!multiply\nDivision: h!divide" + "```");
    };

    if (command === "add") {
        let num1 = parseInt(args[0]);
        let num2 = parseInt(args[1]);
        var total = num1 + num2
        message.reply("The answer is " + total + ".");
    };

    if (command === "subtract") {
        let num1 = parseInt(args[0]);
        let num2 = parseInt(args[1]);
        var total = num1 - num2
        message.reply("The answer is " + total + ".");
    };

    if (command === "multiply") {
        let num1 = parseInt(args[0]);
        let num2 = parseInt(args[1]);
        var total = num1 * num2
        message.reply("The answer is " + total + ".");
    };

    if (command === "divide") {
        let num1 = parseInt(args[0]);
        let num2 = parseInt(args[1]);
        var total = num1 / num2
        message.reply("The answer is " + total + ".");
    };

    if (command === "creator") {
        message.channel.sendMessage("My creator is Desight. If you want to contact him, his discord is desight#2584.");     
    };

    if (command === "roll") {
        var roll = Math.floor(Math.random() * 6) + 1;
        message.channel.sendMessage("You rolled a " + roll + ". " + ":game_die:" )
    }



    if (command === "check") {
        message.channel.sendMessage("I'm active. Thank you for checking.");
    };

    if (command === "8ball") {
        var probability = Math.floor(Math.random() * 10) + 1;
        if (probability === 1) {
            message.channel.sendMessage("Not likely.");
        }
        else if (probability === 2) {
            message.channel.sendMessage("Perhaps.");
        }
        else if (probability === 3) {
            message.channel.sendMessage("Of course, for sure!");
        }
        else if (probability === 4) {
            message.channel.sendMessage("Most definetly.");
        }
        else if (probability === 5) {
            message.channel.sendMessage("Pardon me. Hell no.");
        }
        else if (probability === 6) {
            message.channel.sendMessage("I wouldn't say yes.");
        }
        else if (probability === 7) {
            message.channel.sendMessage("I don't think so.");
        }
        else if (probability === 8) {
            message.channel.sendMessage("Oh, for sure!");
        }
        else if (probability === 9) {
            message.channel.sendMessage("Possibly. I don't even know, that's how stupid your question is.");
        }
        else if (probability === 10) {
            message.channel.sendMessage("Dunno.");
        }
    }

if (command === "fml") {
        var probability = Math.floor(Math.random() * 5) + 1;
        if (probability === 1) {
            message.channel.sendMessage("Today at school I lost my portable charger. And it wasn't just a $5, replaceable one. This charger cost me $40, which isn't very cheap imo. I wish I could just go to school tomorrow to it being in the lost and found, but that's not how my school works. Students in my school will steal ANYTHING of value, even if they have no use for it. So I'm not just assuming, I know it will be stolen. I fucking hate thieves, I hope whoever steals it has such a shitty life.");
        }
        else if (probability === 2) {
            message.channel.sendMessage("Here's a little synopsis of my morning so far, mind you it's only 8:30. Tony left for work early today so I had the task of getting all three kids ready and to the bus stop. No big deal. We left the house at 7:40. I got back home at 7:50. I opened my front door and it swung back and about took out my nose. I knew at that point I forgot to shut the door to our dog's mudroom and he knocked the baby gate down and was roaming the house, which he isn't supposed to do. So he comes prancing out of Levi's room and I put him outside so I could assess the damage. Luckily it just looked like he shredded a paper on the couch. So I go on with my day, head downstairs to swap laundry and that's when I get slammed by the distinct smell of dog shit. A quick glance around reveals the biggest pile of poop I've ever seen right next to the dollhouse. I go to grab toilet paper and step in a giant puddle of piss. He pissed on and IN one of our giant wind turbine fans. So now I'm irritated as he was literally just outside to potty before I took the gals to school. So I get the toilet paper, make THREE trips back and forth to the toilet, flush it, and the toilet clogs. That's how much shit there was. Now, anyone who knows me knows that I am pissed by this point. So I leave the clog and go run upstairs for carpet cleaner and to check Levi. I come back down and start soaking up the moose-sized puddle of pee when I start hearing water. I think to myself 'oh it's the laundry. So I am scrubbing. And scrubbing. And scrubbing, and it hits me. I didn't start the washer... I run to the bathroom and to my horror our janky basement toilet has been running this whole damn time and the poopy-clog-water is now flooded all over the bathroom floor and rug. You can all guess my mood by this point. Currently trying to get the puddle of piss that pooled in the bottom of the fan out and to sanitize my bathroom that now also smells of shit along with the rest of the basement.");
        }
        else if (probability === 3) {
            message.channel.sendMessage("I've lost one terabyte worth of movies, series, anime, cartoons and school stuff. Best part is, I had the money to buy an external to back up my stuff but genius that I am I spent the money on something else thinking I'll buy the external the next time I get money and now I've lost everything. ");
        }
        else if (probability === 4) {
            message.channel.sendMessage("So, a few years ago, I moved to a new city with my boyfriend, and I was having a hard time making friends (thanks social anxiety!). I met a girl at a local bar, and we talked for hours. Hope warmed my heart at the thought of finally having a friend, but when I asked if she wanted to hang out sometime, she gave me a firm, 'No.' I was a bit put out, but I didn't let it get me down. We've seen each other at the same bar, and we always talk. I never try to hangout outside of the bar due to the past experience. Tonight, I'm at the bar with my same boyfriend and another friend. Her and my friends start talking a lot, and she says they should exchange contact info... What is wrong with me?");
        }
        else if (probability === 5) {
            message.channel.sendMessage("So today I was driving home from work and I decided to call my mom. Yesterday I texted her to say I wasn't feeling good because of my period, so she asked me about it. During our phone call the line got cut of several times, which was strange. The fifth time I called her back, she picked up the phone, laughing hysterically. Turns out she was at the car-repair shop and her phone was still connected to the bluetooth handsfree kit in her car. Some random guy heard me talk about how my boobs hurt so bad I had to hold them in my hands when I was lying in bed and how I felt like I was bleeding like a damn pig.");
        }
    };



    var emoji100 = ":100:";
   
    if (command === "noticemesenpai" ) {
        message.channel.sendMessage(emoji100);
    };



});



bot.login(config.token);
