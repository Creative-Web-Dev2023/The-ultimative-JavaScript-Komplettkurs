"use strict";

// let produkt = "Brot";

// if(produkt === "Brot"){
//     console.log("1,89€");
// }else if (produkt === "Milch"){
//     console.log("0,79€");
// }else if (produkt === "Schokolade" || produkt === "Chips"){
//     console.log("0,99€");
// }else if (produkt === "Apfel"){
//     console.log("0,79€");
// }else{
//     console.log("Produkt wurde nicht gefunden");
// }
// Übersetzung das else-if-Konstrukt in einen switch


let produkt = "Melone";

switch (produkt){
    case "Brot" :
        console.log("1,89€");
        break;
    case "Milch" :
    case "Apfel":    
        console.log("0,79€");
        break;    
    case "Schokolade":
    case "Chips":
        console.log("0.99");
        break;
    default:
        console.log("Produkt wurde nicht gefunden");
        break;           
}