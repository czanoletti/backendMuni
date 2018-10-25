'use strict';

module.exports = (sequelize, DataTypes)=>{
    const Proyecto = sequelize.define('proyecto', {
            id_proyecto: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            proyecto:{
                type: DataTypes.CHAR(150),
                allowNull: false
            },
            descripcion_proyecto: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            fecha_inicio_proyecto:{
                type: DataTypes.DATE
            },
            fecha_final_proyecto: {
                type:DataTypes.DATE
            },
            monto_proyecto:{
                type: DataTypes.DOUBLE
            }

        },

        {
            freezeTableName: true,
            timestamps: false
        });

    return Proyecto;
};
