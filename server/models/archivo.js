'use strict';

module.exports = (sequelize, DataTypes)=>{
    const Archivo = sequelize.define('archivo', {
            id_archivo: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nombre_archivo:{
                type: DataTypes.CHAR(255),
                allowNull: false
            },
            descripcion:{
                type: DataTypes.CHAR(255),
                allowNull: false
            },
            url_archivo:{
                type: DataTypes.CHAR(255),
                allowNull:true
            }

        },

        {
            freezeTableName: true,
            timestamps: false
        });

    return Archivo;
};
