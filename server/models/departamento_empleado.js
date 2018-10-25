'use strict';

module.exports = (sequelize, DataTypes)=>{
    const DepartamentoEmpleado = sequelize.define('departamento_empleado', {
            id_departamento_empleado: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            }

        },

        {
            freezeTableName: true,
            timestamps: false
        });


    return DepartamentoEmpleado ;
};
