'use strict';

module.exports = (sequelize, DataTypes)=>{
    const TipoServicio= sequelize.define('tipo_servicio', {
            id_tipo_servicio: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            tipo_servicio:{
                type: DataTypes.CHAR(50),
                allowNull: false
            }

        },

        {
            freezeTableName: true,
            timestamps: false
        });

    return TipoServicio;
};
