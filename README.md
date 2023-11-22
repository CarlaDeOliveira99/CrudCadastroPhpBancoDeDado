<h1>CrudCadastroPhpBancoDeDados <img src="iconesImagensGifs/tabela-de-banco-de-dados.png" width="60"></h1>

<p>Este Repositório está sendo reproveitado do projeto <a href="https://github.com/CarlaDeOliveira99/CrudCadastroPhpTXT">Crud Cadastro PHP TXT</a>, que tem como objetivo melhorar as habilidades em PHP e foi desenvolvido com o uso de PHp, JavaScript, CSS, HTML e PostgresSQL. O projeto inclui uma tabela dinâmica, que permite alterar, deletar e cadastrar os dados, que será salvo no banco de dados.</p>


* [Criar a tabela do banco de dados (PostgreSQL))](#Criar-a-tabela-do-banco-de-dados-(PostgreSQL))

<h2>Criar a tabela do banco de dados (PostgreSQL)</h2>

<h3>Criar Sequences</h3>

```
  CREATE SEQUENCE seq_id_produto<br>
  START 1
  INCREMENT 1;
```

<h3>Criar Tabela</h3>

```
CREATE TABLE produto (
    id integer NOT NULL default nextval('seq_id_produto'), 
    nome varchar(100),
    quantidade integer NOT NULL,
    unidade varchar(10) NOT NULL,
    preco_de_compra numeric(12,2) NOT NULL,
    preco_de_venda numeric(12,2) NOT NULL
);
```

<h3> <span style="color:blue">Criar Constraints</span></h3>

```
alter table produto add constraint pk_produto primary key(id);
alter table produto add constraint unique_nome unique(nome);
```



**[⬆ Inicio](#CrudCadastroPhpBancoDeDados-)**


