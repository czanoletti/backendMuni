'use strict';

module.exports = (sequelize, DataTypes)=>{
    const TipoArchivo = sequelize.define('tipo_archivo', {
            id_tipo_archivo: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            tipo_archivo:{
                type: DataTypes.CHAR(200),
                allowNull: false
            }

        },

        {
            freezeTableName: true,
            timestamps: false
        });

    return TipoArchivo;
};
