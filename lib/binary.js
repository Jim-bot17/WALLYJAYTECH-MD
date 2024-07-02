//═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                                                               //
//                                                       𝗪𝗔𝗟𝗟𝗬𝗝𝗔𝗬𝗧𝗘𝗖𝗛-𝗠𝗗     𝗕𝗢𝗧                                                               //
//                                                                                                                                               //
//                                                                V: 1.0                                                                         //
//                                                                                                                                               //
//       ░██╗░░░░░░░██╗░█████╗░██╗░░░░░██╗░░░░░██╗░░░██╗░░░░░██╗░█████╗░██╗░░░██╗████████╗███████╗░█████╗░██╗░░██╗░░░░░░███╗░░░███╗██████╗░      //
//       ░██║░░██╗░░██║██╔══██╗██║░░░░░██║░░░░░╚██╗░██╔╝░░░░░██║██╔══██╗╚██╗░██╔╝╚══██╔══╝██╔════╝██╔══██╗██║░░██║░░░░░░████╗░████║██╔══██╗      //
//       ░╚██╗████╗██╔╝███████║██║░░░░░██║░░░░░░╚████╔╝░░░░░░██║███████║░╚████╔╝░░░░██║░░░█████╗░░██║░░╚═╝███████║█████╗██╔████╔██║██║░░██║      //
//       ░░████╔═████║░██╔══██║██║░░░░░██║░░░░░░░╚██╔╝░░██╗░░██║██╔══██║░░╚██╔╝░░░░░██║░░░██╔══╝░░██║░░██╗██╔══██║╚════╝██║╚██╔╝██║██║░░██║      //
//       ░░╚██╔╝░╚██╔╝░██║░░██║███████╗███████╗░░░██║░░░╚█████╔╝██║░░██║░░░██║░░░░░░██║░░░███████╗╚█████╔╝██║░░██║░░░░░░██║░╚═╝░██║██████╔╝      //
// ░      ░░╚═╝░░░╚═╝░░╚═╝░░╚═╝╚══════╝╚══════╝░░░╚═╝░░░░╚════╝░╚═╝░░╚═╝░░░╚═╝░░░░░░╚═╝░░░╚══════╝░╚════╝░╚═╝░░╚═╝░░░░░░╚═╝░░░░░╚═╝╚═════╝░      //
//                                                                                                                                               //
//                                                                                                                                               //
//                                                       𝕮𝖔𝖕𝖞𝖗𝖎𝖌𝖍𝖙 𝟐𝟎𝟐𝟒 𝖜𝖆𝖑𝖑𝖞𝖏𝖆𝖞𝖙𝖊𝖈𝖍✍                                                            //
//                                                                                                                                               //
//═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
 //  * @project_name : WALLYJAYTECH-MD
 //  * @author : wallyjaytechy
 //  * @youtube : https://www.youtube.com/@wallyjaytechy
//   * @description : WALLYJAYTECH-V3 ,A Multi-functional whatsapp user bot.
//*
//* 
//base by Wallyjaytechinc
//re-upload? recode? copy code? give credit ya :)
//Instagram: wallyjaytechy
//Telegram: t.me/anjafrieda
//GitHub: @wallyjaytechy
//WhatsApp: +2348144317152
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@wallyjaytechy
//   * Created By Github: Wallyjaytechinc.
//   * Credit To wallyjaytech
//   * © 2024 WALLYJAYTECH-MD.
// ⛥┌┤
// */
async function dBinary(str) {
var newBin = str.split(" ")
var binCode = []
for (i = 0; i < newBin.length; i++) {
    binCode.push(String.fromCharCode(parseInt(newBin[i], 2)))
  }
return binCode.join("")
}

async function eBinary(str = ''){    
let res = ''
res = str.split('').map(char => {       
return char.charCodeAt(0).toString(2);  
 }).join(' ')
return res
}

module.exports = { dBinary, eBinary }
