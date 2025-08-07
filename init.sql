CREATE TABLE Colaboradores (
    Id SERIAL PRIMARY KEY,
    Nome VARCHAR(100),
    Idade INT,
    Email VARCHAR(100),
    Telefone VARCHAR(20),
    Direcao VARCHAR(100),
    Departamento VARCHAR(100),
    Localizacao VARCHAR(100)
);

INSERT INTO Colaboradores (Nome, Idade, Email, Telefone, Direcao, Departamento, Localizacao)
VALUES
('Joana Silva', 34, 'joana.silva@empresa.pt', '912345678', 'Subscrição', 'Técnico', 'Lisboa'),
('Carlos Ferreira', 41, 'carlos.ferreira@empresa.pt', '919876543', 'Comercial', 'Vendas Diretas', 'Porto');