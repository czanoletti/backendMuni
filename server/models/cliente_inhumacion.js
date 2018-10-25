

'use strict';

module.exports = (sequelize, DataTypes)=>{
    const ClienteInhumacion = sequelize.define('cliente_inhumacion', {
            id_cliente_inhumacion: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            relacion_inhumacion:{
                type: DataTypes.CHAR(50),
                allowNull: false
            }

        },

        {
            freezeTableName: true,
            timestamps: false
        });

    return ClienteInhumacion;
};
