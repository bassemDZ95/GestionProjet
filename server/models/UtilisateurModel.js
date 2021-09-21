import mongoose from'mongoose';
const UtilisateurSchema = mongoose.Schema({
    login: String,
    mail: String,
    motDePasse: String,
    nom: String,
    prenom: String,
    matricule: Number,
    rapport: [RapportSchema],
    role: [RoleSchema],
    UtilisateurId: Number
});
const UtilisateurModel = mongoose.model('UtilisateurModel',UtilisateurSchema);
export default UtilisateurModel;