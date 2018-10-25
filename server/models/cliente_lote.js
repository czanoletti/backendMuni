'use strict';

module.exports = (sequelize, DataTypes)=>{
    const Cliente_lote = sequelize.define('cliente_lote', {
            id_cliente_lote: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            }
        },

        {
            freezeTableName: true,
            timestamps: false
        });

    return Cliente_lote;
};
