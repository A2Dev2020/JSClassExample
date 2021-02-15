export class Objet
{
    tableau = [0, 1, 2, 3, 4, 5];
    nom;

    constructor(n)
    {
        console.log("On construit notre Objet " + n);
        this.nom = n;
    }
    
    Truc ()
    {
        console.log("test");
    }
    
}