//são atributos e métodos definidos em uma classe que não dependem de uma instância pra serem utilizados. São acessados diretamente por uma classe ao invés de por uma instância

class Reservation {
    constructor(quests, room, days) {
        this.quests = quests
        this.room = room
        this.days = days
        this.total = days * Reservation.baseFee
        this.premium = days * Reservation.premiumFee
    }

    static baseFee = 150

    static showBaseFee() {
        console.log(`Base fee é ${Reservation.baseFee}`)
    }

    static get premiumFee() {
        return Reservation.baseFee * 1.5
    }
}

Reservation.showBaseFee()
console.log(`Premium fee é $${Reservation.premiumFee}`)

const r1 = new Reservation(3, '201', 5)
console.log(r1)

Reservation.baseFee = 200

const r2 = new Reservation(2, '104', 2)
console.log(r2)

console.log(`Premium fee é $${Reservation.premiumFee}`)