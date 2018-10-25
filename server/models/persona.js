'use strict';

module.exports = (sequelize, DataTypes)=>{
    const Persona = sequelize.define('persona', {
        id_persona: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
            },
        p_nombre1:{
            type: DataTypes.CHAR(50),
            allowNull: false
        },
        p_nombre2:{
            type: DataTypes.CHAR(50)
        },
        p_apellido1:{
            type: DataTypes.CHAR(50),
            allowNull: false
        },
        p_apellido2:{
            type: DataTypes.CHAR(50)
        },
        p_DPI:{
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        p_NIT:{
            type: DataTypes.DOUBLE
        },
        p_telefono:{
            type: DataTypes.INTEGER
        },
        email:{
            type: DataTypes.CHAR(100)
        },
        p_celular:{
            type: DataTypes.DOUBLE
        },
        p_direccion:{
            type: DataTypes.CHAR(50),
            allowNull: false
        },
        p_fecha_nacimiento:{
            type: DataTypes.CHAR(50),
            allowNull: false
        }

    },

    {
        freezeTableName: true,
        timestamps: false
    });
    return Persona;
};
