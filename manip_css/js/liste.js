$liste = document.getElementById('liste');
$texte = document.getElementById('texte');
$ajouter = document.getElementById('ajouter');
$annuler = document.getElementById('annuler');
$suppression = document.getElementById('suppression');
$restauration = document.getElementById('restauration');


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

function selection(e){
  e.target.classList.toggle('selected');
}

function supprime(){
  for (i=0; i<$liste.children.length;i++) {
    $liste.children[i].classList.toggle('poubelle');
  }
}

function restaure(){
  for (i=0; i<$liste.children.length;i++) {
    $liste.children[i].classList.remove('poubelle');
  }
}


afficheListe();
$ajouter.onclick = ajoute;
$annuler.onclick = annule;
$liste.onclick = selection;
$suppression.onclick = supprime;
$restauration.onclick = restaure;
