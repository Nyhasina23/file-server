function formatDate(date) {
  const d = new Date(date);

  const day = d.getDate();
  const month = d.getMonth() + 1; // Les mois commencent à 0, donc ajoutez 1
  const year = d.getFullYear();

  // Créez une chaîne au format "d/mm/yyyy"
  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
}

module.exports = formatDate;
