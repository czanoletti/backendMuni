'use strict';

module.exports = (sequelize, DataTypes)=>{
    const Lote = sequelize.define('lote', {
            id_lote: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            fila:{
                type: DataTypes.INTEGER,
                allowNull: false
            },
            sector:{
                type: DataTypes.INTEGER,
                allowNull: false
            }

        },

        {
            freezeTableName: true,
            timestamps: false
        });

    return Lote;
};
