'use strict';

module.exports = (sequelize, DataTypes)=>{
    const Servicio= sequelize.define('servicio', {
            id_servicio: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            servicio:{
                type: DataTypes.TEXT,
                allowNull: false
            }

        },

        {
            freezeTableName: true,
            timestamps: false
        });

    return Servicio;
};
