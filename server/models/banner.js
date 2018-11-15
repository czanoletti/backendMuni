'use strict';

module.exports = (sequelize, DataTypes)=>{
    const Banner = sequelize.define('banner', {
            id_banner: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            url_banner:{
                type: DataTypes.CHAR(255),
                allowNull:true
            }

        },

        {
            freezeTableName: true,
            timestamps: false
        });

    return Banner;
};
