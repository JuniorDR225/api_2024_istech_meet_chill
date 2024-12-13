const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

// Middleware pour le traitement des requêtes JSON
app.use(cors());
app.use(express.json());

// Exemple de données JSON
const database = [
    { id: "1234", name: "Débordo" },
    { id: "5678", name: "Arafat" },
    { id: "9101", name: "Josey" },
];

// Endpoint pour vérifier l'identifiant
app.post("/verify", (req, res) => {
    const { id } = req.body;
    console.log(id);

    // Vérifier si l'identifiant existe dans la base
    const exists = database.some((entry) => entry.id === id);

    res.json({ exists });
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur en écoute sur http://localhost:${port}`);
});
