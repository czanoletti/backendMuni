'use strict';

module.exports = (sequelize, DataTypes)=>{
    const CategoriaProyecto = sequelize.define('categoria_proyecto', {
            id_categoria_proyecto: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            categoria_proyecto:{
                type: DataTypes.CHAR(100),
                allowNull: false
            }

        },

        {
            freezeTableName: true,
            timestamps: false
        });

    return CategoriaProyecto;
};
