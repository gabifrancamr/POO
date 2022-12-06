//Parcela do empréstimo

module.exports = class Installment {
    constructor(value, number) {
        this.value = value
        this.number = number
        this.status = 'pending' //situação, se já foi paga ou se está pendente
    }
}