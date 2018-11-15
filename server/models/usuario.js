'use strict';

module.exports = (sequelize, DataTypes)=>{
    const Usuario = sequelize.define('usuario', {
            id_usuario: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            usuario:{
                type: DataTypes.CHAR(50),
                allowNull: false,
                unique: true
            },
            contrasena:{
                type: DataTypes.CHAR(50),
                allowNull: false
            }

        },

        {
            freezeTableName: true,
            timestamps: false
        });

    return Usuario;
};
