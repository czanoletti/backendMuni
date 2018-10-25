'use strict';

module.exports = (sequelize, DataTypes)=>{
    const Empleado = sequelize.define('empleado', {
            id_empleado: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            puesto:{
                type: DataTypes.CHAR(100),
                allowNull: false
            },
            fecha_ingreso: {
                type: DataTypes.DATE,
                allowNull: false
            }

        },

        {
            freezeTableName: true,
            timestamps: false
        });


    return Empleado;
};
