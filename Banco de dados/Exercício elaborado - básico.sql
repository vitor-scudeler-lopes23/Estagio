Create database time;
use time;

Create table Jogadores(
idJogadores int primary key auto_increment,
NomeJogadores varchar(50),
IdadeJogador char(2),
LaneJogador char(3) 
);
insert into Jogadores values
(null, "Robo", "21", "Top"),
(null, "CarioK", "19", "JG"),
(null, "Kami", "24", "Mid"),
(null, "BrTT", "27", "Adc"),
(null, "EsA", "25", "Sup");

Select * from jogadores;

-- Exiba somente o "nome" e a "idade" dos jogadores
Select Nomejogadores, IdadeJogador from Jogadores;

-- Exiba somente o "ID" e a "Nome" dos jogadores
select idJogadores, NomeJogadores from jogadores;

-- Exiba somente o "nome" e a "Lane" dos jogadores
select Nomejogadores, laneJogador from jogadores;

-- Exiba as informações de apenas 1 jogador pelo "nome"
select * from jogadores where nomejogadores = "Brtt";

-- Exiba as informações de apenas 1 jogador pela "Lane"
select * from jogadores where Lanejogador = "Mid";

-- Exiba as informações de apenas 1 jogador pela primeira letra do "Nome"
select * from jogadores where nomejogadores like 'B%';

-- Exiba as informações de apenas 1 jogador pela última letra do "Nome"
select * from jogadores where nomejogadores like '%i';

-- Exiba as informações de apenas 1 jogador sendo a segunda letra do "nome" sendo "A"
select * from jogadores where nomejogadores like '_a%';

-- Exiba as informações de apenas 1 jogador sendo a penultima letra do "nome" sendo "O"
select * from jogadores where nomejogadores like '%o_';

-- Mude a idade de algum jogador
update jogadores set idadejogador = "29" where idjogadores = "5";

select * from jogadores;