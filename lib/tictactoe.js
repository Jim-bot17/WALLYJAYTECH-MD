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
class TicTacToe {
    constructor(playerX = 'x', playerO = 'o') {
        this.playerX = playerX
        this.playerO = playerO
        this._currentTurn = false
        this._x = 0
        this._o = 0
        this.turns = 0
    }

    get board() {
        return this._x | this._o
    }

    get currentTurn() {
        return this._currentTurn ? this.playerO : this.playerX
    }

    get enemyTurn() {
        return this._currentTurn ? this.playerX : this.playerO
    }

    static check(state) {
        for (let combo of [7, 56, 73, 84, 146, 273, 292, 448])
            if ((state & combo) === combo)
                return !0
        return !1
    }

    /**
     * ```js
     * TicTacToe.toBinary(1, 2) // 0b010000000
     * ```
     */
    static toBinary(x = 0, y = 0) {
        if (x < 0 || x > 2 || y < 0 || y > 2) throw new Error('invalid position')
        return 1 << x + (3 * y)
    }

    /**
     * @param player `0` is `X`, `1` is `O`
     * 
     * - `-3` `Game Ended`
     * - `-2` `Invalid`
     * - `-1` `Invalid Position`
     * - ` 0` `Position Occupied`
     * - ` 1` `Sucess`
     * @returns {-3|-2|-1|0|1}
     */
    turn(player = 0, x = 0, y) {
        if (this.board === 511) return -3
        let pos = 0
        if (y == null) {
            if (x < 0 || x > 8) return -1
            pos = 1 << x
        } else {
            if (x < 0 || x > 2 || y < 0 || y > 2) return -1
            pos = TicTacToe.toBinary(x, y)
        }
        if (this._currentTurn ^ player) return -2
        if (this.board & pos) return 0
        this[this._currentTurn ? '_o' : '_x'] |= pos
        this._currentTurn = !this._currentTurn
        this.turns++
        return 1
    }

    /**
     * @returns {('X'|'O'|1|2|3|4|5|6|7|8|9)[]}
     */
    static render(boardX = 0, boardO = 0) {
        let x = parseInt(boardX.toString(2), 4)
        let y = parseInt(boardO.toString(2), 4) * 2
        return [...(x + y).toString(4).padStart(9, '0')].reverse().map((value, index) => value == 1 ? 'X' : value == 2 ? 'O' : ++index)
    }
    
    /**
     * @returns {('X'|'O'|1|2|3|4|5|6|7|8|9)[]}
     */
    render() {
        return TicTacToe.render(this._x, this._o)
    }

    get winner() {
        let x = TicTacToe.check(this._x)
        let o = TicTacToe.check(this._o)
        return x ? this.playerX : o ? this.playerO : false
    }
}

new TicTacToe().turn

module.exports = TicTacToe
