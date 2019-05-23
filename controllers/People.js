const Personne = require('../models/Personne');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const Auth = require('../models/Auth');

module.exports = class People {

    static add(type, body, callback) {

        let data = {
            TYPE: type.slice(0,type.length -1).toUpperCase(),
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
        } else if (['dmos', 'admins'].includes(type)){
            data.MDP = bcrypt.hashSync(body.MDP, saltRounds);
            data.DATEEMBAUCHE = body.DATEEMBAUCHE;
        }

        Personne.create(data)
            .then(people => {
            callback(people);
        })
    }

    static login(body, callback) {
        People.findOne({
            where: {
                EMAIL: body.EMAIL
            }
        }).then(people => {
            if (bcrypt.compareSync(body.PASSWORD, people.PASSWORD)) {

            }
        })
    }
}
