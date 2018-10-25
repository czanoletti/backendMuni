'use strict';

module.exports = (sequelize, DataTypes)=>{
    const CategoriaTrabajo = sequelize.define('categoria_trabajo', {
            id_categoria_trabajo: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            categoria_trabajo:{
                type: DataTypes.CHAR(100),
                allowNull: false
            }

        },

        {
            freezeTableName: true,
            timestamps: false
        });

    return CategoriaTrabajo;
};
