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
const fs = require('fs')
const path = require('path')
const { spawn } = require('child_process')

function ffmpeg(buffer, args = [], ext = '', ext2 = '') {
  return new Promise(async (resolve, reject) => {
    try {
      let tmp = path.join(__dirname, '../src', + new Date + '.' + ext)
      let out = tmp + '.' + ext2
      await fs.promises.writeFile(tmp, buffer)
      spawn('ffmpeg', [
        '-y',
        '-i', tmp,
        ...args,
        out
      ])
        .on('error', reject)
        .on('close', async (code) => {
          try {
            await fs.promises.unlink(tmp)
            if (code !== 0) return reject(code)
            resolve(await fs.promises.readFile(out))
            await fs.promises.unlink(out)
          } catch (e) {
            reject(e)
          }
        })
    } catch (e) {
      reject(e)
    }
  })
}

/**
 * Convert Audio to Playable WhatsApp Audio
 * @param {Buffer} buffer Audio Buffer
 * @param {String} ext File Extension 
 */
function toAudio(buffer, ext) {
  return ffmpeg(buffer, [
    '-vn',
    '-ac', '2',
    '-b:a', '128k',
    '-ar', '44100',
    '-f', 'mp3'
  ], ext, 'mp3')
}

/**
 * Convert Audio to Playable WhatsApp PTT
 * @param {Buffer} buffer Audio Buffer
 * @param {String} ext File Extension 
 */
function toPTT(buffer, ext) {
  return ffmpeg(buffer, [
    '-vn',
    '-c:a', 'libopus',
    '-b:a', '128k',
    '-vbr', 'on',
    '-compression_level', '10'
  ], ext, 'opus')
}

/**
 * Convert Audio to Playable WhatsApp Video
 * @param {Buffer} buffer Video Buffer
 * @param {String} ext File Extension 
 */
function toVideo(buffer, ext) {
  return ffmpeg(buffer, [
    '-c:v', 'libx264',
    '-c:a', 'aac',
    '-ab', '128k',
    '-ar', '44100',
    '-crf', '32',
    '-preset', 'slow'
  ], ext, 'mp4')
}

module.exports = {
  toAudio,
  toPTT,
  toVideo,
  ffmpeg,
}
