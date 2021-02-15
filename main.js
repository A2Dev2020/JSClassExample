// Import
import { Objet } from "./Objet.js"
import { Calcul } from "./Calcul.js"

let monObjet = new Objet("Machin");
let monObjet2 = new Objet("Normandie Web School");

monObjet.tableau[0] = 5;
console.log(monObjet2.tableau[0]);



let calcul = new Calcul(5, "Lampadaire");

calcul.addition(10); // 15
calcul.division(3); // 5
calcul.soustraction(2); // 3
calcul.multiplication(5); // 15

console.log(calcul);

calcul.resultat(); // Console.log(15)