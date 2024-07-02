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

let modes = {
    noob: [-3, 3,-3, 3, '+-', 15000, 10],
    easy: [-10, 10, -10, 10, '*/+-', 20000, 40],
    medium: [-40, 40, -20, 20, '*/+-', 40000, 150],
    hard: [-100, 100, -70, 70, '*/+-', 60000, 350],
    extreme: [-999999, 999999, -999999, 999999, '*/', 99999, 9999],
    impossible: [-99999999999, 99999999999, -99999999999, 999999999999, '*/', 30000, 35000],
    impossible2: [-999999999999999, 999999999999999, -999, 999, '/', 30000, 50000]
  } 
  
  let operators = {
    '+': '+',
    '-': '-',
    '*': '×',
    '/': '÷'
  }

  function randomInt(from, to) {
    if (from > to) [from, to] = [to, from]
    from = Math.floor(from)
    to = Math.floor(to)
    return Math.floor((to - from) * Math.random() + from)
  }
  
  function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
  }

  function genMath(mode) {
      return new Promise((resolve, reject) => {
        let [a1, a2, b1, b2, ops, time, bonus] = modes[mode]
        let a = randomInt(a1, a2)
        let b = randomInt(b1, b2)
        let op = pickRandom([...ops])
        let result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))()
        if (op == '/') [a, result] = [result, a]
        hasil = { 
            soal: `${a} ${operators[op]} ${b}`,
            mode: mode,
            waktu: time,
            hadiah: bonus,
            jawaban: result
         }
         resolve(hasil)
      })
  }
  
module.exports = { modes, operators, randomInt, pickRandom, genMath }
