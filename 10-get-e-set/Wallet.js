class Wallet {
  #amaunt;
  #username;

  constructor() {
    this.#amaunt = 100.99 * 100;
  }

  get amount() {
    return this.#amaunt / 100; //é possível pegar uma propriedade privada e adicionar comportamento
  }

  set username(newUsername) /*importante que tenha parâmetro*/ {
    if (typeof newUsername === "string") {
      this.#username = newUsername;
    } else {
        console.log('username precisa ser do tipo string')
    }
  }

  get username() {
    return this.#username;
  }
}

const myWallet = new Wallet();

console.log(myWallet.amount);

myWallet.username = "Gabi";
console.log(myWallet.username);

myWallet.username += " França";
console.log(myWallet.username);

myWallet.username = true
console.log(myWallet.username);
