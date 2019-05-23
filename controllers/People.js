const Personne = require('../models/Personne');

module.exports = class People {

    static add(type, body, callback) {

        let data = {

            TYPE: type.slice(0,type.length -1),
            NOM: body.NOM,
            PRENOM: body.PRENOM,
            EMAIL: body.EMAIL,
            ADRESSE: body.ADRESSE,
            CP: body.CP,
            VILLE: body.VILLE
        }

        if (type == 'contacts'){
            data.STATUT = body.STATUT;
            data.ETRE_RESPONSABLE_ID = body.ETRE_RESPONSABLE_ID;
            data.APPARTENIR_ID = body.APPARTENIR_ID;
        }

        else if (type == 'dmos' || 'admins'){
            data.MDP = body.MDP;
            data.DATEEMBAUCHE = body.DATEEMBAUCHE;
        }


        Personne.create(data)
            .then(people => {
            callback(people);
        })

    }
}