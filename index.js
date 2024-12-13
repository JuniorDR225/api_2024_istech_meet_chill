const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Middleware
app.use(express.static(__dirname));
app.use(bodyParser.json());

// Tableau JSON servant de base de données
const qrCodes = [
    { value: "12345" },
    { value: "abcdef" },
    { value: "qrcode2024" },
    { value: "MEET&CHILL 01" }
];

// Route pour vérifier le QR code
app.post("/verify", (req, res) => {
    const { qrData } = req.body;

    const exists = qrCodes.some(qr => qr.value === qrData);

    if (exists) {
        res.json({ exists: true });
    } else {
        res.json({ exists: false });
    }
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
