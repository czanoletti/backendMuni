'use strict';

module.exports = (sequelize, DataTypes)=>{
    const TipoCurso = sequelize.define('tipo_curso', {
            id_tipo_curso: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            tipo_curso:{
                type: DataTypes.CHAR(100),
                allowNull: false
            }

        },

        {
            freezeTableName: true,
            timestamps: false
        });

    return TipoCurso;
};
