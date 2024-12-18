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
  { id: "V34FGTBY", name: "Yapi Tanguy" },
    { "id": "QK6XCIPU", "name": "Doumbia Moussa" },
  { "id": "TY7AFY1G", "name": "Kouakou Stéphanie" },
  { "id": "NZF4OLJC", "name": "TOURÉ EMMANUEL" },
  { "id": "CJNUR6FM", "name": "CISSÉ LEÏLA" },
  { "id": "8O1JNFVQ", "name": "Kakaya Aya Virgine" },
  { "id": "EXQYX37V", "name": "Kouassi Yann" },
  { "id": "I7SOM6IT", "name": "KONE Ahmed" },
  { "id": "4YQHZF0X", "name": "Brouh Akissi" },
  { "id": "BOJ709IN", "name": "Kacou Hifeye" },
  { "id": "OSTR61AN", "name": "Sekongo Ester" },
  { "id": "D1LIWMDY", "name": "Salahou Hamed" },
  { "id": "Q5I77H1L", "name": "Enokou Ruben" },
  { "id": "POB1IG6Y", "name": "Yao Desire" },
  { "id": "KIYEYPKO", "name": "Coulibaly Lacina" },
  { "id": "US8K1Z8G", "name": "Bamba Rokia" },
  { "id": "EYO9YE69", "name": "Bilson Océane" },
  { "id": "80QIJ26T", "name": "YAVO Mondesir" },
  { "id": "F9P6VQTA", "name": "Kassi Grâce" },
  { "id": "N4PNWEG1", "name": "Assamban Samuel" },
  { "id": "BQTBJ968", "name": "Bamba Aminata" },
  { "id": "OAICICK3", "name": "Dieman Chrys" },
  { "id": "XSTKKV9N", "name": "Yao N'guessan Kévin" },
  { "id": "57QOAFQY", "name": "Dembelé Soualio" },
  { "id": "AMSMXNLY", "name": "Dongo N'dri Arcane" },
  { "id": "WCWOM1RL", "name": "KOUAME Brou Rosemonde" },
  { "id": "CVRZL2TB", "name": "Soro Severine" },
  { "id": "KL520JNB", "name": "Konta Fatoumata" },
  { "id": "N77EZMKT", "name": "Hien Épiphanie" },
  { "id": "FNKPVJKU", "name": "Usamatu Baqiyat" },
  { "id": "XRPU2GO9", "name": "Daple Chance" },
  { "id": "DT4EE4FW", "name": "Traoré Sina" },
  { "id": "Q5J1O2F7", "name": "Hema Zeinab" },
  { "id": "KLSH2V4O", "name": "Kouyate Mariam" },
  { "id": "QH1K60FC", "name": "Doumbia Aminata" },
  { "id": "TKAFB6XO", "name": "Traoré Djeneba" },
  { "id": "4OPNV8F2", "name": "Koffi Keren" },
  { "id": "EXZCYTN6", "name": "Kanga Alphonse" },
  { "id": "LXK6HDR7", "name": "Yobou Grant" },
  { "id": "P2MH0XPE", "name": "Kone Issiaka" },
  { "id": "0LTU4PMR", "name": "Ossey Enok" },
  { "id": "WM7JVVMS", "name": "Mako Lamidi" },
  { "id": "6MYPRO7X", "name": "Koume Jarde" },
  { "id": "3IPRNIZ0", "name": "Konan Chance" },
  { "id": "H3MOEXFW", "name": "Kone Barakissa" },
  { "id": "DZ9D9100", "name": "Silue Habiba" },
  { "id": "39ZPCVYZ", "name": "Esther Seka" },
  { "id": "B256U0IH", "name": "Mambo Asseu" },
  { "id": "WFJJ0B80", "name": "Die André" },
  { "id": "5LJE838G", "name": "Cisse Rokiatou" },
  { "id": "E57GWKIJ", "name": "N’dri Serge" },
  { "id": "I32NR4VG", "name": "Abli Ampo" },
  { "id": "FF74OTNH", "name": "Kouakou Linda" },
  { "id": "O2G4552L", "name": "Koffi Atta" },
  { "id": "081LQX7R", "name": "Smith" },
  { "id": "76QRGPG2", "name": "Doumbia Kadi" },
  { "id": "90PDCTV8", "name": "Meité Sakina" },
  { "id": "USU8S9BG", "name": "Koné Yasmine" },
  { "id": "9MYCVXAV", "name": "Diarra Fatoumata" },
  { "id": "Q73MHO2Z", "name": "Koffi Sephora" },
  { "id": "FGVECS0P", "name": "Gondo Gladisse" },
  { "id": "YZ6UBDOM", "name": "Camara Fatoumata" },
  { "id": "XKRFFOWU", "name": "Soumahoro Aminata" },
  { "id": "QYNGI79X", "name": "Nomel Eunice" },
  { "id": "6BGYUSFP", "name": "Kamagaté Aminata" },
  { "id": "83KDNI1L", "name": "Mikan Esther" },
  { "id": "X986MLC2", "name": "Kré Axel" },
  { "id": "6UJM399N", "name": "DIABY MAMADOU" },
  { "id": "V13KOJXU", "name": "Oule Christ" },
  { "id": "2U6EAO8A", "name": "Pape Diarra" },
  { "id": "B9MDQ5CH", "name": "Bamba Sindé" },
  { "id": "6MOV1H20", "name": "TRIA HENOC" },
  { "id": "3NULBEMD", "name": "Amangoua Ingrid" },
  { "id": "HMCOH4L7", "name": "Ouayogo Adama" },
  { "id": "RP1YPQ2Z", "name": "Kinimo Kacou" },
  { "id": "T675YLL1", "name": "COULIBALY Zarah" },
  { "id": "QAH22GNP", "name": "Kouakou Ezeckiel" },
  { "id": "YLC7LJOR", "name": "Akachi Neymar" },
  { "id": "5K9P6PNW", "name": "Ouattara Aminata" }
  
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
