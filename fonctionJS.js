function afficherCMS(event) 
{
    event.preventDefault();
    // Récupérer la valeur du champ de saisie
    var inputValue = document.getElementById("chaine").value;

    // Afficher la valeur dans un paragraphe
    document.getElementById("result").innerHTML = "L'URL entré est : " + inputValue;
}
