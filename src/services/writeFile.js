const fs = require("fs");

function writeHistoryFile(file, texte) {
  // Vérifiez si le fichier existe, s'il n'existe pas, il sera créé.
  // Si le fichier existe, son contenu précédent sera préservé.
  fs.appendFile(file, `\n\n${texte}`, (err) => {
    if (err) {
      console.error(`Erreur lors de l'écriture dans le fichier : ${err}`);
    } else {
      console.log("Texte ajouté avec succès.");
    }
  });
}
module.exports = writeHistoryFile;
