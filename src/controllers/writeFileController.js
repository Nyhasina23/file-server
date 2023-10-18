const writeHistoryFile = require("../services/writeFile");
const formatDate = require("../utils/formatDate");
const formatTime = require("../utils/formatTime");
const DIR = "./public/";

const writeFileController = (req, res) => {
  try {
    const todayDate = formatDate(Date.now());
    const todayTime = formatTime(Date.now());

    const { type, dataHistory } = req.body;

    switch (type) {
      case "VINS":
        writeHistoryFile(
          DIR + "/vins.history.txt",
          `
Date : ${todayDate}
Heure : ${todayTime}
    
${
  dataHistory.nomPlat != null
    ? "Nom du plat inseré : " + dataHistory.nomPlat
    : ""
}
${dataHistory.region != null ? "Région inserée : " + dataHistory.region : ""}
${
  dataHistory.robeVin != null
    ? "Robe du vin inserée : " + dataHistory.robeVin
    : ""
}

-------------------------------------------------------------------------------------

        `
        );
      case "PLATS":
        writeHistoryFile(
          DIR + "/plats.history.txt",
          `
Date : ${todayDate}
Heure : ${todayTime}
    
${dataHistory.domaine != null ? "Domaine inseré : " + dataHistory.domaine : ""}
${
  dataHistory.millesime != null
    ? "Millésime inseré : " + dataHistory.millesime
    : ""
}
${
  dataHistory.appelation != null
    ? "Appelation inserée : " + dataHistory.appelation
    : ""
}                  
${
  dataHistory.robeVin != null
    ? "Robe du vin inserée : " + dataHistory.robeVin
    : ""
}                  
${
  dataHistory.cuve != null
    ? "Nom de la cuvée inserée : " + dataHistory.cuve
    : ""
}                  
${
  dataHistory.recom != null
    ? "Recommandation inserée : " + dataHistory.recom
    : ""
}                  

-------------------------------------------------------------------------------------
        `
        );
      case "ACCORD":
        writeHistoryFile(
          DIR + "/accord.history.txt",
          `
Date : ${todayDate}
Heure : ${todayTime}

${
  dataHistory.partenaire != null ? "Partenaire : " + dataHistory.partenaire : ""
}                  
${
  dataHistory.nomPlat != null
    ? "Nom du plat inseré : " + dataHistory.nomPlat
    : ""
}
${
  dataHistory.robeVin != null
    ? "Robe du vin inserée : " + dataHistory.robeVin
    : ""
}                  
${
  dataHistory.region != null ? "Région inserée : " + dataHistory.region : ""
}                  
${
  dataHistory.minPrice != null
    ? "Prix min inseré : " + dataHistory.minPrice
    : ""
}                  
${
  dataHistory.maxPrice != null
    ? "Prix max inseré : " + dataHistory.maxPrice
    : ""
}                  
${dataHistory.arome != null ? "Arôme inserée : " + dataHistory.arome : ""}

-------------------------------------------------------------------------------------
        `
        );
    }

    res.status(200).send("Writing history done.");
  } catch (error) {
    res.status(500).send("Error while writing history.");
  }
};

module.exports = writeFileController;
