$liste = document.getElementById('liste');
$texte = document.getElementById('texte');
$ajouter = document.getElementById('ajouter');
$annuler = document.getElementById('annuler');


var nom = ['Léo',
          'Léa',
          'Yanis',
          'Paul',
          'Pierre',
          'Jacques'];



function afficheListe(){
  var resultat='';
   for (i = 0; i < nom.length; i++) {
     resultat += '<li>' + nom[i] + '</li>';
   }
   $liste.innerHTML = resultat;
}

function ajoute(){
  nom.push($texte.value);
  afficheListe();
}

function annule(){
  nom.pop();
  afficheListe();
}

afficheListe();
$ajouter.onclick = ajoute;
$annuler.onclick = annule;
