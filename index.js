const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.json')
const command = require('./command')

client.on('ready', () => {
  console.log('A body has been discovered!')

  command(client, 'help', (message) => {
    
    const embed = new Discord.MessageEmbed()
      .setTitle('𝐒𝐡𝐞 𝐠𝐢𝐯𝐞𝐬 𝐞𝐭𝐞𝐫𝐧𝐚𝐥 𝐥𝐢𝐟𝐞 𝐭𝐨 𝐡𝐞𝐫 𝐟𝐨𝐥𝐥𝐨𝐰𝐞𝐫𝐬, 𝐛𝐮𝐭 𝐰𝐡𝐨 𝐤𝐧𝐨𝐰𝐬 𝐰𝐡𝐚𝐭 𝐭𝐡𝐞 𝐩𝐫𝐢𝐜𝐞 𝐨𝐟 𝐭𝐡𝐚𝐭 𝐠𝐢𝐟𝐭 𝐢𝐬.')
      .setThumbnail("https://media1.tenor.com/images/472a1f564d57230c60d2b91b4a1b100e/tenor.gif?itemid=15257303")  
      .setAuthor(message.member.displayName, message.author.displayAvatarURL() )
      .setColor('#663366')
      .setImage("https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/66477231_927806804229692_608263627920637952_o.jpg?_nc_cat=106&_nc_sid=8024bb&_nc_ohc=Xw6Fk-j-l-AAX_ro5hg&_nc_oc=AQl-N7xXBMuDtmrh85VfTOZRa7I9yS2mop4pLEeI6O8CX9KRyXKG-8FtgPp2jUVGWSo&_nc_ht=scontent-waw1-1.xx&oh=797ed0663c9d7160abedce50f0abbbb7&oe=5FAE310D")
      .setFooter('I see you~')
      .setTimestamp()
      .addFields(
        
        {
          name: 'dw.help',
          value: '➤ display the help menu🐍',
          inline: true,
        },
        {
          name: 'dw.ping',
          value: '➤ play with me!🏓',
          inline: true,
        },
        {   
          name: 'dw.identityV',
          value: '➤ shows identityV commands',
          inline: true,
        },
        {   
          name: 'dw.profile',
          value: '➤ who am i?',
          inline: true,
        },
      )

    message.channel.send(embed)
  })

  command(client, 'ping', (message) => {
    
    const embed = new Discord.MessageEmbed()   
      .setColor('#663366')
      .addFields(
        {
          name: '🏓',
          value: 'Pong! ',
          inline: true,
        },
        
      )
      message.channel.send(embed)
  })
  
    command(client, 'bday', (message) => {
    
      const embed = new Discord.MessageEmbed()   
        .setColor('#663366')
        .setTitle('My character day ')
        .setDescription(`𝐎𝐜𝐭𝐨𝐛𝐞𝐫 𝟐𝐧𝐝.🍰`)
        .addFields(
        )
      message.channel.send(embed)
        })
  
        command(client, 'profile', (message) => {
    
          const embed = new Discord.MessageEmbed()   
            .setColor('#663366')
            .setTitle(` 🐝 HI! IT'S ME! 🐝 `)
            .setDescription(`owo`)
            .setAuthor(message.member.displayName, message.author.displayAvatarURL() )
            .setFooter('I see you~')
            .setTimestamp()
            .addField("ID:", message.author.id)
            .setImage("https://thumbs.gfycat.com/InsidiousYawningAnkole-size_restricted.gif")
            .addField("Guild region:", message.guild.region)


          message.channel.send(embed)
            })

  command(client, 'identityV', (message) => {
    
    const embed = new Discord.MessageEmbed() 
     .setThumbnail("https://media1.tenor.com/images/472a1f564d57230c60d2b91b4a1b100e/tenor.gif?itemid=15257303")  
      .setColor('#663366')
      .setTimestamp()
      .addFields(
        {
          name: 'dw.bday',
          value: '➤ shows my character day ',
          inline: true,
        },
        {
          name: 'dw.surv',
          value: '➤ shows survivors info',
          inline: true,
        },
        {
          name: 'dw.hunt',
          value: '➤ shows hunters info',
          inline: true,
        },
      )
      
    message.channel.send(embed)
  })


  command(client, 'surv', (message) => {
    const embed = new Discord.MessageEmbed()
      .setTitle('List of Survivors')
      .setColor('#663366')
      .addFields(
        
        {
          name: 'dw.doctor',
          value: 'Emily Dyer',
          inline: true,
        },
        {
          name: 'dw.lawyer',
          value: 'Freddy Riley',
          inline: true,
        },
        {   
          name: 'dw.thief',
          value: 'Kreacher Pierson',
          inline: true,
        },
        {
          name: 'dw.gardener',
          value: 'Emma Woods,',
          inline: true,
        },
        {
          name: 'dw.magician',
          value: 'Servais Le Roy',
          inline: true,
        },
        {
          name: 'dw.exproler',
          value: '𝟏𝐬𝐭 𝐨𝐟 𝐌𝐚𝐫𝐜𝐡',
          inline: true,
        },
        {
          name: 'dw.mercernary',
          value: '𝟐𝟑𝐫𝐝 𝐨𝐟 𝐉𝐮𝐥𝐲',
          inline: true,
        },
        {
          name: 'dw.coordinator',
          value: '𝟑𝐫𝐝 𝐨𝐟 𝐀𝐩𝐫𝐢𝐥',
          inline: true,
        },
        {
          name: 'dw.priestess',
          value: '𝟏𝐬𝐭 𝐨𝐟 𝐅𝐞𝐛𝐫𝐮𝐚𝐫𝐲',
          inline: true,
        },
        {
          name: 'dw.mechanic',
          value: '𝟭𝟯𝘁𝗵 𝗼𝗳 𝗦𝗲𝗽𝘁𝗲𝗺𝗯𝗲𝗿',
          inline: true,
        },
        {
          name: 'dw.forward',
          value: '𝟭𝟱𝘁𝗵 𝗼𝗳 𝗠ay',
          inline: true,
        },
        {
          name: 'dw.the Minds Eye',
          value: '𝟭𝟯𝘁𝗵 𝗼𝗳 𝗝𝗮𝗻𝘂𝗮𝗿𝘆',
          inline: true,
        },
      )

    message.channel.send(embed)
  })
  
  command(client, 'doctor', (message) => {
    const logo =
    'https://static.wikia.nocookie.net/id5/images/9/93/S2_doctor_.png/revision/latest/top-crop/width/360/height/450?cb=20200923145326'

    const embed = new Discord.MessageEmbed()  
      .setImage(logo) 
      .setColor('#87CEFA')
      .setTitle("ﾟ･｡ Ｄｏｃｔｏｒ｡･ﾟ")
      .setThumbnail("https://i.pinimg.com/564x/2b/dc/c7/2bdcc773ceae058bbc4318538b40fe5e.jpg")
      .setDescription(`▼ 𝐄𝐦𝐢𝐥𝐲 𝐃𝐲𝐞𝐫, formerly known as 𝐋𝐲𝐝𝐢𝐚 𝐉𝐨𝐧𝐞𝐬.\n▼ Her birthday is 𝟏𝟕𝐭𝐡 𝐨𝐟 𝐌𝐚𝐫𝐜𝐡..\n▼ She is rumoured to be inspired by Amelia Dyer, a serial killer doctor from the 1900’s.\n▼ She loves books.\n▼ She's interested and loves herbs.\n▼ She is good at administering healing.\n▼ She hates coyotes.`)
      .setFooter("Cr: https://identityv.gamepedia.com/Emily_Dyer")
      .setTimestamp()

    message.channel.send(embed)
  })

  command(client, 'lawyer', (message) => {
    const logo =
    'https://static.wikia.nocookie.net/id5/images/f/f9/S2_lawyer.png/revision/latest/top-crop/width/360/height/450?cb=20200923145139'

    const embed = new Discord.MessageEmbed()  
      .setImage(logo) 
      .setColor('#E6E6E6')
      .setTitle("ﾟ･｡Ｌａｗｙｅｒ｡･ﾟ")
      .setThumbnail("https://pbs.twimg.com/media/De76VrFXUAE7tIV.jpg")
      .setDescription(`▼ His birthday is on the 𝟏𝟐𝐭𝐡 𝐨𝐟 𝐉𝐚𝐧𝐮𝐚𝐫𝐲 1860.\n▼ He is interested in reading and writing and he is skilled at writing and debating.\n▼ He hates cockroaches.\n▼ He likes Martha Remington and money.\n▼ His traits are: arrogance and irony, chauvinism, greed and unbelievability.\n▼ Lawyer has an unborn child who died while his wife Martha Remington had a failed abortion.\n▼ He is 38 years old`)
      .setFooter("Cr: https://identityv.gamepedia.com/Freddy_Riley")
      .setTimestamp()

    message.channel.send(embed)
  })

  command(client, 'thief', (message) => {
    const logo =
    'https://vignette.wikia.nocookie.net/identityv/images/2/2d/Kreacher.png/revision/latest/top-crop/width/360/height/450?cb=20190501092111'

    const embed = new Discord.MessageEmbed()  
      .setImage(logo) 
      .setColor('#5C4033')
      .setTitle("ﾟ･｡Ｔ ｈｉｅｆ｡･ﾟ")
      .setThumbnail("https://pbs.twimg.com/media/De76VrBXcAEDaY5.jpg")
      .setDescription(`▼ Kreacher is based on George Müller who, before becoming a Christian, had the reputation of a liar and a thief. He founded schools and orphanages while serving as a missionary. Kreacher's last name was based on George's friend Arthur Tappan Pierson who wrote his biography.\n▼ His birthday is on the 𝟕𝐭𝐡 𝐨𝐟 𝐌𝐚𝐲.\n▼ He is interested in money.\n▼ He is skilled at sneaking.\n▼ He hates arrogant people.\n▼ He likes money and docile people.`)
      .setFooter("Cr: https://identityv.gamepedia.com/Kreacher_Pierson")
      .setTimestamp()

    message.channel.send(embed)
  })
  command(client, 'magician', (message) => {
    const logo =
    'https://static.wikia.nocookie.net/id5/images/6/66/New_servais.png/revision/latest/top-crop/width/360/height/450?cb=20190325023412'

    const embed = new Discord.MessageEmbed()  
      .setImage(logo) 
      .setColor('#5D4037')
      .setTitle("ﾟ･｡Ｍａｇｉｃｉａｎ｡･ﾟ")
      .setThumbnail("https://i.pinimg.com/originals/51/62/3e/51623efad256fa5994b4aa20cb6e6ffc.gif")
      .setDescription(`▼𝐒𝐞𝐫𝐯𝐚𝐢𝐬 𝐋𝐞 𝐑𝐨𝐲 was a real person. He was a Belgian magician, illusion designer, and businessman.\n▼His birthday is on the 𝟒𝐭𝐡 𝐨𝐟 𝐉𝐮𝐥𝐲.\n▼He is skilled in magic.\n▼He is interested in suits and magic.\n▼He hates being threatened.\n▼He likes making sophisticated canes and suits..`)
      .setFooter("Cr: https://identityv.gamepedia.com/Servais_Le_Roy")
      .setTimestamp()

    message.channel.send(embed)
  })
})

client.login(config.token)