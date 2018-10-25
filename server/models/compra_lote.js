

'use strict';

module.exports = (sequelize, DataTypes)=>{
    const CompraLote = sequelize.define('compra_lote', {
            id_compra_lote: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            recibo_lote:{
                type: DataTypes.INTEGER,
                allowNull: false
            },
            licencia_construccion:{
                type: DataTypes.INTEGER,
                allowNull: false
            },
            fecha_compra:{
                type: DataTypes.DATE,
                allowNull: false
            },
            observacion:{
                type: DataTypes.CHAR(100),
                allowNull: false
            }

        },

        {
            freezeTableName: true,
            timestamps: false
        });

    return CompraLote;
};
