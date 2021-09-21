import mongoose from'mongoose';
const RapportSchema = mongoose.Schema({
    CheminRapport: String,
    CodeRapport: String,
    CodeRapportInterne: String,
    Commentaire: String,
    Nom: String,
    DateAjoute: Date,
    DateModification: Date,
});
const RapportModel = mongoose.model('RapportModel',RapportSchema);
export default RapportModel;