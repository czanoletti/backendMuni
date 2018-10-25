'use strict';

module.exports = (sequelize, DataTypes)=>{
    const OfertaTrabajo = sequelize.define('oferta_trabajo', {
            id_oferta_trabajo: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            oferta:{
                type: DataTypes.CHAR(100),
                allowNull: false
            },
            descripcion_oferta:{
                type: DataTypes.TEXT,
                allowNull: false
            },
            nombre_empresa:{
                type: DataTypes.CHAR(100),
                allowNull: false
            },
            direccion_empresa:{
                type: DataTypes.CHAR(100),
                allowNull: false
            },
            telefono_empresa:{
                type: DataTypes.INTEGER,
                allowNull: false
            }

        },

        {
            freezeTableName: true,
            timestamps: false
        });

    return OfertaTrabajo;
};
