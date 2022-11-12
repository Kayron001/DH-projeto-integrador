CREATE DATABASE desapegados;
USE desapegados;
create table produtos(
	id_produtos int unsigned not null primary key auto_increment,
    nome VARCHAR(125) not null,
    preco DECIMAL NOT NULL,
    desconto DECIMAL NOT NULL,
    descricao VARCHAR(1000),
    categoria VARCHAR(25) NOT NULL,
    src VARCHAR(50) NOT NULL,
);

