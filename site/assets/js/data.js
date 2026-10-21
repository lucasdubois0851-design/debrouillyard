/* ==========================================================
   DONNÉES DU SITE — c'est ici qu'on modifie les infos.

   PHOTOS : dépose la photo dans « Logo & photos participants »
   en la nommant avec l'identifiant (champ `id`), ex. lucas.jpg,
   puis double-clique sur « outils/Préparer les photos.command ».
   Elle est recadrée, compressée, nettoyée de ses métadonnées (GPS…)
   et copiée dans site/assets/img/participants/.
   Sans photo, une pastille avec l'initiale s'affiche.

   ⚠️ Les ids ne doivent contenir que des minuscules, chiffres et tirets.
   ========================================================== */

window.EVENT = {
  name: "La Débrouill'Yard",
  // Départ du Tour 1 : samedi 30 janvier 2027, 12h00 (heure de Paris, UTC+1)
  start: "2027-01-30T12:00:00+01:00",
  loopKm: 6.706,
  place: "Salle Jeanne d'Arc",
  town: "La Neuville-en-Tourne-à-Fuy (Ardennes)",
  maxRunners: 25,
  // Nombre d'inscrits affiché dans les compteurs, en attendant d'avoir leurs prénoms.
  // Mettre null pour compter automatiquement à partir de la liste PARTICIPANTS.
  registered: 10,
};

window.PHOTO_DIR = "assets/img/participants/";

// Participants inscrits, dans l'ordre d'inscription (les cartes suivent cet ordre).
// `bib`  = numéro de dossard, tel qu'il doit s'afficher (jusqu'à 4 chiffres, ex. "07", "2003").
// `id`   = photo préparée par l'outil : « Arsène Moncassin 09.jpeg » → "arsene-moncassin".
// `name` = ce qui s'affiche sur la carte (prénom seulement).
// Les places restantes jusqu'à maxRunners s'affichent en cartes vierges.
window.PARTICIPANTS = [
  { id: "lucas-dubois",     name: "Lucas",  bib: "07" },
  { id: "teo-serralunga",   name: "Téo",    bib: "2003" },
  { id: "arsene-moncassin", name: "Arsène", bib: "09" },
  { id: "maxime-perez",     name: "Maxime", bib: "99" },
  { id: "pierre-baudouin",  name: "Pierre", bib: "11" },
  { id: "corentin-masson",  name: "Corentin", bib: "19" },
  { id: "hugo-gaillot",     name: "Hugo",   bib: "06" },
  { id: "maurin-bouchet",   name: "Maurin", bib: "10" },
  { id: "matthieu-zivre",   name: "Matthieu", bib: "12" },
];
