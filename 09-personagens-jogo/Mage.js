const Character = require("./Character");

class Mage extends Character {
    constructor(name, lifePts, atackPts, defensePts, magicPts){
        super(name, lifePts, atackPts, defensePts)
        this.magicPts = magicPts
    }

    attack(targetCharacter){
        targetCharacter.lifePts -= (this.attackPts + this.magicPts) - targetCharacter.defensePts
    }

    heal(targetCharacter){
        targetCharacter.lifePts += this.magicPts * 2
    }
}

module.exports = Mage