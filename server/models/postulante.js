'use strict';

module.exports = (sequelize, DataTypes)=>{
    const Postulante = sequelize.define('postulante', {
            id_postulante: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            curriculum:{
                type: DataTypes.CHAR(100),
                allowNull: false
            }

        },

        {
            freezeTableName: true,
            timestamps: false
        });

    return Postulante;
};
