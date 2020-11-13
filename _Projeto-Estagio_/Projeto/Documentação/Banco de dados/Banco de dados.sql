create database Stockontrol;
use Stockontrol;

create table Empresa (
idEmpresa int primary key auto_increment,
NomeEmpresa varchar(50),
Email varchar(100),
CNPJ char(18),
TelefoneCelular char(14),
Endereco varchar(100),
NumeroEndereco char(5),
Senha char(10),
Usuario enum('C','F','A')
);

create table Fornecedores(
idFornecedores int primary key auto_increment,
NomeFornecedor varchar(50),
Produto varchar(30),
fkEmpresa int,
foreign key (fkEmpresa) references Empresa (idEmpresa)
);

create table Produto (
idProduto int primary key auto_increment,
NomeProduto varchar (50),
TipoProduto varchar(30),
fkEmpresa int,
foreign key (fkEmpresa) references Empresa (idEmpresa)
);

create table Saldo( 
QuantidadeProduto char(13),
fkProdutos int,
foreign key (fkProdutos) references Produto (idProduto),
primary key (fkProdutos)
);

create table Estoque (
idEstoque int auto_increment,
NomeEstoque varchar(50),
EnderecoEstoque varchar(50),
NumeroLocal char(5),
CepEstoque char(9),
fkEmpresa int,
foreign key (fkEmpresa) references Empresa (idEmpresa),
fkSaldo int,
foreign key (fkSaldo) references Saldo (fkProdutos),
primary key (idEstoque, fkEmpresa, fkSaldo)
);

create table EstoqueMovimento (
idMovimentoEstoque int auto_increment,
EntradaSaida enum ("E","S"),
DataEntradaSaida date,
fkEstoque int,
foreign key (fkEstoque) references Estoque (idEstoque),
fkProduto int,
foreign key (fkProduto) references Produto (idProduto),
primary key (idMovimentoEstoque, fkEstoque, fkProduto)
);

insert into Empresa value 
(null, 'Bloons', 'bloons@gmail.com', '31.956.736/0001-61', '(11)98172-6145', 'av franz', '501', 'bloons123', 'C');

insert into Fornecedores value
(null, "Trident", "Ciclete trident", "1");

insert into Produto value
(null, 'Sansung J5', 'Celular', '1');

insert into saldo value
("300", "1");

insert into Estoque value
(null, "Estoque do Macro", "Av franz voegelli", "501", "06020-190", "1", "1");

insert into EstoqueMovimento value
(null, "E", "2020-12-31", "1", "1");

select * from Empresa;
select * from Fornecedores;
select * from Produto;
select * from Saldo;
select * from Estoque;
select * from EstoqueMovimento;
