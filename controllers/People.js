const Personne = require('../models/Personne');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const Auth = require('../models/Auth');
const ip = require('ip');
const sha1 = require('sha1');

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
        Personne.findOne({
            where: {
                EMAIL: body.EMAIL
            }
        }).then(people => {

            if (null != people && bcrypt.compareSync(body.MDP, people.MDP)) {
                Auth.create({
                    TOKEN: Math.random().toString(36).slice(2) + '-' + sha1(ip.address()),
                    PERSONNE_ID: people.ID
                }).then(auth => {
                    callback({
                        auth, personne: people
                    });
                })
            } else {
                callback({
                    message: "Informations de connexion non valides !"
                }, 401);
            }

        })
    }

    static check(token, callback) {
        if (token != undefined && token.split('-')[1] == sha1(ip.address())) {
            Auth.findOne({
                where: {
                    TOKEN: token
                }
            }).then(auth => {
                callback(auth);
            });

        } else {
            callback(false);
        }
    }
}
