CREATE DATABASE desapegados;
USE desapegados;
CREATE TABLE fornecedores(
	id_fornecedor INT unsigned not null primary key auto_increment,
    nome varchar(100) not null,
    email varchar(50) not null,
    senha varchar(100) not null
);
CREATE TABLE clientes(
	id_cliente INT unsigned not null primary key auto_increment,
    nome varchar(100) not null,
	email varchar(50) not null,
    senha varchar(100) not null
);
create table pedidos (
	id_pedido INT unsigned not null primary key auto_increment,
    codigo int not null
);
create table produtos(
	id_produtos int unsigned not null primary key auto_increment,
    nome VARCHAR(125) not null,
    preco DECIMAL NOT NULL,
    desconto DECIMAL NOT NULL,
    descricao VARCHAR(1000),
    categoria VARCHAR(25) NOT NULL,
    src VARCHAR(50) NOT NULL,
    id_fornecedor INT UNSIGNED NOT NULL,
    id_cliente INT UNSIGNED,
    id_pedido INT UNSIGNED,
    FOREIGN KEY(id_fornecedor) REFERENCES fornecedores (id_fornecedor),
	FOREIGN KEY(id_cliente) REFERENCES clientes (id_cliente),
	FOREIGN KEY(id_pedido) REFERENCES pedidos (id_pedido)
);

