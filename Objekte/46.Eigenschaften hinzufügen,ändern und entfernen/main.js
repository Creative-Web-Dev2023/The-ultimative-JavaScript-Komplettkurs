"use strict";

let auto = {
    marke :"BMW",
};

// Eigenschaft ändern;
auto.marke ="Tesla";
console.log(auto);

//Eigenschaften hinzufügen
auto.modell = "Model 3";
auto.ps =450;
auto["farbe"] = "rot";
console.log(auto);

//Eigenschaften entfernen
delete auto.farbe;
console.log(auto);




