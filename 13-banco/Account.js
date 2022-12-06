//conta

module.exports = class Account {
    #balance  // saldo
    // #deposits
    // #loans
    // #transfers

    constructor(user) {
        this.owner = user //dono da conta
        this.#balance = 0 //saldo
        this.deposits = [] //depósitos
        this.loans = [] //empréstimos
        this.transfers = [] //transferências
    }

    get balance() {
        return this.#balance
    }

    addDeposit(deposit) {
        this.#balance += deposit.value
        this.deposits.push(deposit)
    }

    addLoan(loan) {
        this.#balance += loan.value
        this.loans.push(loan)
    }

    addTransfer(transfer) {
        if (transfer.toUser.email === this.owner.email) {
            this.#balance += transfer.value
            this.transfers.push(transfer)
        } else if (transfer.fromUser.email === this.owner.email) {
            this.#balance -= transfer.value
            this.transfers.push(transfer)
        }
    }
}