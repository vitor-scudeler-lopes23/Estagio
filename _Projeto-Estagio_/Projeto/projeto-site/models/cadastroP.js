'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/



module.exports = (sequelize, DataTypes) => {
    let Estoque = sequelize.define('Estoque',{ //'Usuario' nome da Tabela
		idEs: {
			field: 'idEstoque', //'id' nome da coluna da tabela...
			type: DataTypes.INTEGER, //"INTEGER" modelo da minha tabela
			primaryKey: true,
			autoIncrement: true
		},		
		nomeEs: {
			field: 'NomeEstoque',
			type: DataTypes.STRING,
			allowNull: false
		},
		enderecoEs: {
			field: 'EnderecoEstoque',
			type: DataTypes.STRING,
			allowNull: false
		},
		nuenderecoEs: {
			field: 'NumeroLocal',
			type: DataTypes.STRING,
			allowNull: false
		},
		cepEs: {
			field: 'CepEstoque',
			type: DataTypes.STRING,
			allowNull: false
		},
		},
	{
		tableName: 'Estoque',
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

	return Estoque;
};