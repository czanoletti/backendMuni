'use strict';

module.exports = (sequelize, DataTypes)=>{
    const Curso = sequelize.define('curso', {
            id_curso: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nombre_curso:{
                type: DataTypes.CHAR(100),
                allowNull: false
            },
            descripcion_curso: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            fecha_inicio_curso: {
                type: DataTypes.DATE,
                allowNull: true

            },
            fecha_fin_curso: {
                type:DataTypes.DATE,
                allowNull: true
            }

        },

        {
            freezeTableName: true,
            timestamps: false
        });

    return Curso;
};
