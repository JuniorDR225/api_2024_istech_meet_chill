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
  { id: "BRSO5NO0", name: "SYLLA DIASSATA" }
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
    res.status(400).json({ success: false, message: "Code invalide ou déjà utilisé." });
  }
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur en écoute sur http://localhost:${port}`);
});
