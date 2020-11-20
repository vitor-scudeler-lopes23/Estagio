'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/



module.exports = (sequelize, DataTypes) => {
    let Estoque = sequelize.define('Estoque',{ //'Usuario' nome da Tabela
		id: {
			field: 'idEstoque', //'id' nome da coluna da tabela...
			type: DataTypes.INTEGER, //"INTEGER" modelo da minha tabela
			primaryKey: true,
			autoIncrement: true
		},		
		nome: {
			field: 'NomeEstoque',
			type: DataTypes.STRING,
			allowNull: false
		},
		endereco: {
			field: 'EnderecoEstoque',
			type: DataTypes.STRING,
			allowNull: false
		},
		Nu: {
			field: 'NumeroLocal',
			type: DataTypes.STRING,
			allowNull: false
		},
		telefone: {
			field: 'TelefoneCelular',
			type: DataTypes.STRING,
			allowNull: false
		},
		
		endereco: {
			field: 'Endereco',
			type: DataTypes.STRING,
			allowNull: false
		},

		Nuendereco: {
			field: 'numeroEndereco',
			type: DataTypes.STRING,
			allowNull: false
		},
		
		senha: {
			field: 'Senha',
			type: DataTypes.STRING,
			allowNull: false
		},
		},
	{
		tableName: 'Empresa', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

	return Estoque;
	
};