'use strict';

module.exports = (sequelize, DataTypes)=>{
    const TipoProyecto = sequelize.define('tipo_proyecto', {
            id_tipo_proyecto: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            tipo_proyecto:{
                type: DataTypes.CHAR(50),
                allowNull: false
            }

        },

        {
            freezeTableName: true,
            timestamps: false
        });

    return TipoProyecto;
};
