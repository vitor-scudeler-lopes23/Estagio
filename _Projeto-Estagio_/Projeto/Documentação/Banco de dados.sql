create database InventoryControl;
use inventoryControl;

create table Empresa (
idEmpresa int primary key auto_increment,
NomeEmpresa varchar(50),
CPNJ char(18),
Email varchar(100),
Senha char(10),
TelefoneCelular char(14),
TelefoneFixo char(9),
Endereco varchar(100),
NumeroEndereco char(5),
Cep char(10)
);

create table Produto (
idProduto int primary key auto_increment,
NomeProduto varchar (50),
TipoProduto varchar(30),
fkEmpresa int,
foreign key (fkEmpresa) references Empresa (idEmpresa)
);

create table MovimentoEstoque (
idMovimentoEstoque int auto_increment,
EntradaSaida enum ("E", "S"),
DataEntradaSaida date,
QuantidadeMovimentoProduto char(13),
fkEmpresa int,
foreign key (fkEmpresa) references Empresa(idEmpresa),
fkProduto int,
foreign key (fkProduto) references Produto (idProduto),
primary key (idMovimentoEstoque, fkProduto, fkEmpresa)
);

create table Estoque (
idEstoque int,
QuantidadeProduto char(13),
fkMovimentoEstoque int,
foreign key (fkMovimentoEstoque) references movimentoEstoque (idMovimentoEstoque)
);

insert into Empresa value 
(null, 'Bloons', '31.956.736/0001-61', 'bloons@gmail.com', 'bloons123', '(11)98172-6145', '8172-6145', 'av franz', '501', '06020-190');

insert into Produto value
(null, 'Sansung J5', 'Celular', '1');

insert into Estoque value
('1', '50', 'E', '2020/09/11', 'Sansung', '1', '1');

select * from Empresa;
select * from Produto;
select * from Estoque;
