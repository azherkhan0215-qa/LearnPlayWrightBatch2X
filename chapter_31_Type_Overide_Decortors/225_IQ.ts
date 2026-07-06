class Father {
    home(): void {
        console.log("2BHK");
    }
}

class Pramod extends Father {
    override home(): void {
        console.log("3BHK");
    }
}

let pramod = new Pramod();
let father = new Father();
//pramod.home();

father.home();
pramod.home();