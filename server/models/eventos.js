'use strict';

module.exports = (sequelize, DataTypes)=>{
    const Evento = sequelize.define('evento', {
            id_evento: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            titulo_evento:{
                type: DataTypes.CHAR(100),
                allowNull: false
            },
            descripcion_evento:{
                type: DataTypes.TEXT,
                allowNull: false
            },
            fecha_evento:{
                type: DataTypes.CHAR(100),
                allowNull: true
            },
            hora_evento:{
                type: DataTypes.CHAR(100),
                allowNull: true
            }


        },

        {
            freezeTableName: true,
            timestamps: false
        });

    return Evento;
};
