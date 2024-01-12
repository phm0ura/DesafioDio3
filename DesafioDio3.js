

class playableCharacter
{
    constructor(name,age,heroClass,attack)
    {
        this.name = name;
        this.age = age;
        this.heroClass = heroClass;
        this.attack = attack;

       if(heroClass === "Mago")
       {
        this.attack = "magia";
       }
       else if(heroClass === "Guerreiro")
       {
        this.attack = "espada"; 
       }
       else if(heroClass ==="Monge")
       {
        this.attack = "artes marciais";
       }
       else
       {
        this.attack = "usando shuriken";
       }


    }

     specialPower()

    {
        console.log("O " + this.heroClass + " atacou usando "+ this.attack);
    }
}

let playerArcher = new playableCharacter("Archer123",20,"Mago");
let playerMonk = new playableCharacter("MonkBr123",50,"Monge");
let playerWarrior = new playableCharacter("xXxWarriorxXx", 18,"Guerreiro");
let playerNinja = new playableCharacter("NarutoBolado",22,"Ninja");

playerArcher.specialPower();
    playerMonk.specialPower();
    playerWarrior.specialPower();
    playerNinja.specialPower();


    
