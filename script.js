class Auto {
    constructor(znacka, rokVyroby, model, kilometry) {
        this.znacka = znacka;
        this.rokVyroby = rokVyroby;
        this.model = model;
        this.kilometry = kilometry;
    }

}

class Autoservis {
    constructor(nazev, auta) {
        this.nazev = nazev;
        this.auta = auta;
    }

// Vrátí všechny Auta v autoserisu
    vypisAut() {
        return this.auta

}

// Pøidá auto do autoservisu
    addAuto(auto) {

    }

// Smaže auto z autoservisu
    deleteAuto(auto) {
        return this.auta.forEach(x => x.auto = auto);
    }

}

function addToLocalStorage() {
    localStorage.setItem(auto1.znacka, auto1.model);
    localStorage.setItem(auto2.znacka, auto2.model);
    localStorage.setItem(auto3.znacka, auto3.model);

}

let auto1 = new Auto("Skoda", 2012, "Octavia", 10000);
let auto2 = new Auto("BMW", 2010, "IdkModelBMW", 15000);
let auto3 = new Auto("Audi", 2014, "IdkModelAudi", 20000);
let autoservis = new Autoservis("Autoservis Jednicka", [auto1, auto2, auto3]);


let vypis = document.getElementById("vypis");
let vypisText = document.getElementById("vypisText");
let add = document.getElementById("addToLocal");

vypis.addEventListener("click", e => {
    console.log(autoservis.vypisAut());
    vypisText.innerHTML = autoservis.vypisAut();

});

add.addEventListener("click", e => {

    addToLocalStorage();

});


document.addEventListener("keydown", e => {
    if (e.key === "r") {
        location.reload();

    }
});

