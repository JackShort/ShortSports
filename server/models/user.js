'use strict';
var bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define('User', {
        username: {
            type: DataTypes.STRING
        },

        firstName: {
            type: DataTypes.STRING
        },

        lastName: {
            type: DataTypes.STRING
        },

        password: {
            type: DataTypes.STRING
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            }
        }
    });

    User.generateHash = function(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    };

    User.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    };

    return User;
};
