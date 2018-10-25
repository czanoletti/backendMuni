'use strict';

module.exports = (sequelize, DataTypes)=>{
    const Rol = sequelize.define('rol', {
            id_rol: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            rol:{
                type: DataTypes.CHAR(100),
                allowNull: false
            },

        },

        {
            freezeTableName: true,
            timestamps: false
        });

    return Rol;
};
