const Personne = require('../models/Personne');
const Auth = require('../models/Auth');
const bcrypt = require('bcrypt');

module.exports = class People {

    static add(body, callback) {

        let data = {
            TYPE: body.type,
            NOM: body.NOM,
            PRENOM: body.PRENOM,
            EMAIL: body.EMAIL,
            ADRESSE: body.ADRESSE,
            CP: body.CP,
            VILLE: body.VILLE
        }

        if (type == 'contact'){
            data.STATUT = body.statut;
        }

        if (type == 'DMO' || 'admin'){
            data.MDP = body.MDP;
            data.DATEEMBAUCHE = body.DATEEMBAUCHE;
        }

        Personne.create(data).then(people => {
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
