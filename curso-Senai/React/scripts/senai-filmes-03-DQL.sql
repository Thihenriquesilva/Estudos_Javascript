-- Define o banco de dados que ser� utilizado
USE Filmes;
GO

-- Lista todos os g�neros
SELECT * FROM Generos;

-- Lista todos os filmes
SELECT IdFilme, Titulo, Nome FROM Filmes 
INNER JOIN Generos
ON Filmes.IdGenero = Generos.IdGenero;

-- Lista todos os g�neros definindo as colunas exibidas
SELECT IdGenero, Nome from Generos;

-- Lista todos os usu�rios
SELECT * FROM Usuarios

-- Busca um usu�rio atrav�s do email e da senha
SELECT IdUsuario, NomeUsuario, Email, Senha, Permissao FROM Usuarios WHERE Email = 'saulo@email.com' AND Senha = '123';