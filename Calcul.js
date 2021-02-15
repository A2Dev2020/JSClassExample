export class Calcul
{
    nombre;
    machin;

    constructor(nombre, machin) 
    {
        this.nombre = nombre;
        this.machin = machin;

        console.log(machin);
    }

    addition(nombreAddition)
    {
        this.nombre += nombreAddition;
    }

    soustraction(nombreSoustraction)
    {
        this.nombre -= nombreSoustraction;
    }

    division(nombreDivision)
    {
        this.nombre /= nombreDivision;
    }

    multiplication(nombreMultiplication)
    {
        this.nombre *= nombreMultiplication;
    }

    resultat()
    {
        console.log(this.nombre + " " + this.machin);
    }
}