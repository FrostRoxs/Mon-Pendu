// Variable Global
var compteurErreur = 0;
var mot1Split;
var mot1;
// Définir un mot      
c= console.log.bind(document);
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
// 1 - Récuperer mon mot lettre par lettre
function demarrerPartie(){
        
    var dictionnaireMot = ['extinction','valorant','lol','fortnite','warzone','gta','uncharted','minecraft','fifa','dofus','clickerheroes'];
    mot1 = dictionnaireMot[getRandomInt(dictionnaireMot.length)] ;
    mot1Split = mot1.split('');
    console.log(mot1Split);
    document.getElementById('changer_mot').style.display = "block";
    document.getElementById('demarrage').style.display = "none";
    document.getElementById('lettre').style.display = "block";
    document.getElementById('mauvaise_reponses').style.display = "block";
    // Verifie si la div mot est vide si oui c bon sinon effacer se quil y a dedans 
    if (document.getElementById('mot').getElementsByTagName('p').length == 0){
        for(let i = 0 ; i < mot1Split.length ; i++){
            var nouv = document.createElement("p");
            nouv.setAttribute('class', mot1Split[i]);
            var textNouv = document.createTextNode(mot1Split[i]);
            nouv.appendChild(textNouv);
            dom_mot = document.getElementById('mot');
            dom_mot.appendChild(nouv);
        }
    }
    else{
        var tabP = document.getElementById('mot');

        c(tabP);
        tabP.innerHTML="";
            for(let i = 0 ; i < mot1Split.length ; i++){
                var nouv = document.createElement("p");
                nouv.setAttribute('class', mot1Split[i]);
                var textNouv = document.createTextNode(mot1Split[i]);
                nouv.appendChild(textNouv);
                dom_mot = document.getElementById('mot');
                dom_mot.appendChild(nouv);
            }
       
    }    
}
// 2 - Choix de la lettre au click de l'Utilisateur
/**@param {HTMLElement} lettre */
function choixLettres(lettre){

    var lettreChoisie = lettre.value;
    var x = 0;
    console.log(lettreChoisie);
    lettre.setAttribute("disabled","");
    let bonneLettre = false;
    for(let i = 0 ; i < mot1Split.length ; i++){
        if(mot1Split[i] == lettreChoisie){
            bonneLettre |= true;
            var tab =  document.getElementsByClassName(lettreChoisie); //tableau qui sort TOUS les éléments qui ont la CLASS lettreChoisie (exemple = t)
            for (let i of tab ){
                // tab = [p qui a la classe = t, "un autre p qui a la classe t",] 
                i.style.color = "white";
            }    
        }

    }
    if (!mot1.includes(lettreChoisie)){ //on verifie si la lettre est pas dans le mot
    compteurErreur++; //si oui on ajoute au compteur
    var img =document.getElementById("img");
    console.log(compteurErreur);
    img.setAttribute('src','../img/p'+compteurErreur+'.gif');
    }

    if(bonneLettre) {
        lettre.style.backgroundColor = "green";
    } else {
        lettre.style.backgroundColor = "red";
    }

    var compteur = 0;
    var tableau2 = document.getElementsByTagName('p');
        for(let x of tableau2){
            
            if(x.style.color == "white"){
                compteur++;
            }
        }

    if(compteur == mot1Split.length){
        document.getElementById('gagner_perdu').style.display = "block";
        document.getElementById('gagner_perdu').textContent="Bien Jouer, Vous avez gagné !!!";
        const buttons = document.querySelectorAll('.reset_color');
        buttons.forEach((btn) => {
            btn.setAttribute("disabled", true);
        });
    }
    if(compteurErreur == 6){
        document.getElementById('gagner_perdu').style.display = "block";
        document.getElementById('gagner_perdu').textContent="Vous avez Perdu, Recommencer une partie !";
        const buttons = document.querySelectorAll('.reset_color');
        buttons.forEach((btn) => {
            btn.setAttribute("disabled", true);
        });
        //location.reload();
    }
}
function changerMot(){
    compteurErreur = 0;
    var img =document.getElementById("img");
    img.setAttribute('src','../img/p'+compteurErreur+'.gif');
    demarrerPartie();
    var tableau3 = document.getElementsByClassName('reset_color')
    for(let resetColor of tableau3){
        resetColor.style.backgroundColor = "white";
        resetColor.removeAttribute("disabled");
    }

    if(document.querySelector('#gagner_perdu').style.display == "block")
    {
        document.querySelector('#gagner_perdu').style.display = "none";
    }
}
    
  

