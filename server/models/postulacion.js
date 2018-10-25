'use strict';

module.exports = (sequelize, DataTypes)=>{
    const Postulacion = sequelize.define('postulacion', {
            id_postulacion: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            }

        },

        {
            freezeTableName: true,
            timestamps: false
        });

    return Postulacion;
};
