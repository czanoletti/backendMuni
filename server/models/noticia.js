'use strict';

module.exports = (sequelize, DataTypes)=>{
    const Noticia = sequelize.define('noticia', {
            id_publicacion: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            titulo:{
                type: DataTypes.CHAR(255),
                allowNull: false
            },
            descripcion:{
                type: DataTypes.TEXT,
                allowNull: false
            },
            p_fecha:{
                type: DataTypes.DATE,
                allowNull:true
            },
            url_img:{
                type: DataTypes.CHAR(255),
                allowNull:true
            }

        },

        {
            freezeTableName: true,
            timestamps: false
        });

    return Noticia;
};
