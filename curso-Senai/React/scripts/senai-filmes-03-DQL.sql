-- Define o banco de dados que será utilizado
USE Filmes;
GO

-- Lista todos os gêneros
SELECT * FROM Generos;

-- Lista todos os filmes
SELECT IdFilme, Titulo, Nome FROM Filmes 
INNER JOIN Generos
ON Filmes.IdGenero = Generos.IdGenero;

-- Lista todos os gêneros definindo as colunas exibidas
SELECT IdGenero, Nome from Generos;

-- Lista todos os usuários
SELECT * FROM Usuarios

-- Busca um usuário através do email e da senha
SELECT IdUsuario, NomeUsuario, Email, Senha, Permissao FROM Usuarios WHERE Email = 'saulo@email.com' AND Senha = '123';