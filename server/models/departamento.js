'use strict';

module.exports = (sequelize, DataTypes)=>{
    const Departamento = sequelize.define('departamento', {
            id_departamento: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            departamento:{
                type: DataTypes.CHAR(200),
                allowNull: false
            },
            descripcion_departamento:{
                type: DataTypes.CHAR(200),
                allowNull: false
            }

        },

        {
            freezeTableName: true,
            timestamps: false
        });

    return Departamento;
};
