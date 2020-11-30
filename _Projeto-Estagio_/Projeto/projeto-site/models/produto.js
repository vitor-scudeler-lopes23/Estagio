'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/



module.exports = (sequelize, DataTypes) => {
    let Produto = sequelize.define('Produto',{ //'Usuario' nome da Tabela
		idp: {
			field: 'idProduto', //'id' nome da coluna da tabela...
			type: DataTypes.INTEGER, //"INTEGER" modelo da minha tabela
			primaryKey: true,
			autoIncrement: true
		},		
		nomep: {
			field: 'NomeProduto',
			type: DataTypes.STRING,
			allowNull: false
		},
		qtdp: {
			field: 'QtdProduto',
			type: DataTypes.STRING,
			allowNull: false
		},
		fkestoquep: {
			field: 'fkEstoque',
			type: DataTypes.INTEGER,
			allowNull: false
		},
		},
	{
		tableName: 'Produto',
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

	return Produto;
};