const App = require('./App')

App.createUser('gabriela@email.com', 'Gabriela')
App.createUser('lucas@email.com', 'Lucas')
App.createUser('juliana@email.com', 'Juliana')

App.deposit('gabriela@email.com', 100)

App.transfer('gabriela@email.com', 'lucas@email.com', 20)

App.changeLoanFee(10)
App.takeLoan('juliana@email.com', 2000, 24)

console.log(App.findUser('gabriela@email.com'))
console.log(App.findUser('gabriela@email.com').account)
console.log(App.findUser('lucas@email.com'))
console.log(App.findUser('lucas@email.com').account)
console.log(App.findUser('juliana@email.com'))
console.log(App.findUser('juliana@email.com').account)
console.log(App.findUser('juliana@email.com').account.loans[0].installments)