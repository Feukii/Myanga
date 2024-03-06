const mongoose = require('mongoose');

// Définition du schéma de l'utilisateur
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dob: { type: Date, required: true }, // Date of Birth
  birthPlace: { type: String, required: false },
  nationality: { type: String, required: false }, // Ajout du champ nationalité
  relation: { type: String, required: false }, // Relation avec l'utilisateur principal ou entre membres de l'arbre
  // Vous pouvez ajouter d'autres champs ici selon vos besoins
});

// Création du modèle à partir du schéma et exportation pour utilisation dans d'autres fichiers
const User = mongoose.model('User', userSchema);

module.exports = User;
