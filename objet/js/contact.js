$repertoire = document.getElementById('repertoire');
$prenom = document.getElementById('prenom');
$nom = document.getElementById('nom');
$telephone = document.getElementById('telephone');
$ajouter = document.getElementById('ajouter');
$texte = document.getElementById('texte');
$rechercher = document.getElementById('rechercher');
$resultatRecherche = document.getElementById('resultatRecherche');

var contacts = [{prenom:'Jean',
            nom:'Lefrancois',
            numero:'0123456789'},
            {prenom:'Yanis',
            nom:'Lefrancois',
            numero:'0987654321'}];

function texteContact(contact) {
  var retour = ' ';
  for(var id in contact){
    retour+= contact[id]+' ';
  }
  return retour;
}

function afficheListe(){
  var ligne='';
  var transitoire='';
  var resultat='';
   for (i = 0; i < contacts.length; i++) {
     transitoire=contacts[i];
     for (var id in transitoire) {
       ligne += transitoire[id]+' ';
     }
     resultat += '<li>' + ligne + '</li>';
     ligne='';
   }
   $repertoire.innerHTML = resultat;
}

function ajouter(){

  var objet={};
  objet.prenom=$prenom.value;
  objet.nom=$nom.value;
  objet.numero=$telephone.value;
  contacts.push(objet);
  afficheListe();
}

function recherche(){
  var resultat;
  for (i = 0; i < contacts.length; i++) {
    resultat = contacts[i];
    for (var id in resultat) {
      if (resultat.prenom == $texte.value || resultat.nom == $texte.value || resultat.numero==$texte.value) {
        $resultatRecherche.innerHTML = resultat.prenom + ' ' + resultat.nom + ' ' + resultat.numero;
      }
    }

  }
}

//alert(texteContact(contacts[1]));
$ajouter.onclick = ajouter;
$rechercher.onclick = recherche;
