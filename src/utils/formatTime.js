function formatTime(date) {
  const d = new Date(date);

  const hours = d.getHours();
  const minutes = d.getMinutes();
  const seconds = d.getSeconds();

  // Créez une chaîne au format "hh:mm:ss"
  const formattedTime = `${hours}:${minutes}:${seconds}`;

  return formattedTime;
}

module.exports = formatTime;
