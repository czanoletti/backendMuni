'use strict';

module.exports = (sequelize, DataTypes)=>{
    const Inhumacion = sequelize.define('inhumacion', {
            id_inhumacion: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            }
        },

        {
            freezeTableName: true,
            timestamps: false
        });

    return Inhumacion;
};
