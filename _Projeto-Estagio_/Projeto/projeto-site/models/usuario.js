'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/



module.exports = (sequelize, DataTypes) => {
    let Usuario = sequelize.define('Usuario',{ //'Usuario' nome da Tabela
		id: {
			field: 'idEmpresa', //'id' nome da coluna da tabela...
			type: DataTypes.INTEGER, //"INTEGER" modelo da minha tabela
			primaryKey: true,
			autoIncrement: true
		},		
		nome: {
			field: 'NomeEmpresa',
			type: DataTypes.STRING,
			allowNull: false
		},
		login: {
			field: 'Email',
			type: DataTypes.STRING,
			allowNull: false
		},
		cnpj: {
			field: 'CNPJ',
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

    return Usuario;
};