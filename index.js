const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

// Middleware pour le traitement des requêtes JSON
app.use(cors());
app.use(express.json());

// Exemple de données JSON
let database = [
  { id: "OL9R6SDQ", name: "SILUE KOLOTIOLOMAN" },
  { id: "L04GT369", name: "OUEDRAOGO SAIDOU" },
  { id: "WQ1AJGXO", name: "DIALLO EL HADJ" },
  { id: "7LMQSVHV", name: "KOFFI ANNE KEREN" },
  { id: "D3XRESR8", name: "DIARRASSOUBA SIRIKI" },
  { id: "7KK021N7", name: "TOFE SERGE" },
  { id: "PC6QS1XX", name: "N’DRI IVAN" },
  { id: "CKM8LJZ4", name: "YELLI MARIAME" },
  { id: "8DS5AJ1P", name: "TRAORE AICHA" },
  { id: "0PWMP47D", name: "LATH OCTAVE" },
  { id: "JPSOZMBE", name: "COULIBALY JECOLIA" },
  { id: "TVZ5US79", name: "BALLO GRACE" },
  { id: "ZY86FF5E", name: "VAHBI MIKE" },
  { id: "L6NINL1L", name: "KPANGNI SHELLA" },
  { id: "DOIC3WV5", name: "KONE MAKEME S." },
  { id: "KA60MER7", name: "OUATTARA NANCY" },
  { id: "TPVHNDHV", name: "OUATTARA SAMIRA" },
  { id: "SVB7RNZH", name: "KONE ZENAB" },
  { id: "TC3N8GC3", name: "DIARRA KALY" },
  { id: "VJ1AJ4JG", name: "ZOUKROU ACKAH C." },
  { id: "QZ5JDTSA", name: "SIDIBE SORAYA" },
  { id: "LRTJFSOE", name: "N’DIAYE AHOU" },
  { id: "DPUFQYXD", name: "LATH NATHAN" },
  { id: "ATUNNGJJ", name: "AHIPKA INÈS" },
  { id: "TY3Q6G9M", name: "BETHÉ NAMONKO" },
  { id: "3WFPJJV7", name: "AKA NANOU" },
  { id: "BRSO5NO0", name: "SYLLA DIASSATA" },
  { id: "CTEELRW3", name: "Konate Salimata" },
  { id: "B3I1XP4V", name: "Berthé Namonko" },
  { id: "L7ZJNU84", name: "Koli Doriane" },
  { id: "PRVJBDZI", name: "Bah Fatoumata" },
  { id: "7J259ANK", name: "Traoré Mah" },
  { id: "GU1S47EF", name: "Diallo Mariyama" },
  { id: "M41UXNTI", name: "Gnamien Ariel" },
  { id: "EDRP37KS", name: "N’Guessan Aristide" },
  { id: "7WK0I1J6", name: "Bakayoko Fanta" },
  { id: "8S3Q8HE0", name: "Bomisso Konpou" },
  { id: "1FEXMI9Q", name: "Coulibaly Minan" },
  { id: "FKQBDU6E", name: "Traoré Wattoufoué" },
  { id: "ZCET5PF2", name: "Soro Dogmimin" },
  { id: "F87KLC8Y", name: "Camara Wilfrid" },
  { id: "VNWHEL71", name: "Karidioula Ange" },
  { id: "OLAYFAOB", name: "Bayou Kachie" },
  { id: "V34FGTBY", name: "Yapi Tanguy" }
  
];

// Endpoint pour vérifier l'identifiant
app.post("/verify", (req, res) => {
  const { id } = req.body;
  console.log(`Code reçu : ${id}`);

  // Trouver l'index de l'entrée avec l'identifiant fourni
  const index = database.findIndex((entry) => entry.id === id);

  if (index !== -1) {
    // Si l'identifiant existe, le supprimer de la base de données
    const verifiedEntry = database.splice(index, 1)[0];
    res.json({ success: true, message: `${verifiedEntry.name} vérifié avec succès.` });
  } else {
    // Si l'identifiant n'existe pas
    res.status(400).json({ success: false, message: "Code invalide ." });
  }
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur en écoute sur http://localhost:${port}`);
});
