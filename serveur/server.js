const express = require('express');
const userRoutes = require('./routes/userRoutes'); // Assurez-vous que le chemin d'accès est correct
const mongoose = require('mongoose');

const app = express();
const port = 3005;

app.use(express.json()); // Pour parser les requêtes JSON
app.use(userRoutes);

// Connexion à MongoDB
mongoose.connect('votre_chaine_de_connexion_mongodb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
