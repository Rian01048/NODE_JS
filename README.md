# 🗄️ Conexão Node.js com MySQL

Este é um projeto simples para demonstrar como conectar uma aplicação Node.js a um banco de dados MySQL, criar tabelas automaticamente (caso não existam) e realizar a inserção de dados.

## 🛠️ Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)

---

## 📦 Dependências

O projeto utiliza os seguintes pacotes do NPM:

- **`mysql2`**: Biblioteca mais moderna e rápida para comunicação entre o Node.js e o banco de dados MySQL. Suporta nativamente o uso de `async/await` (Promises).
- **`dotenv`**: Módulo que carrega as variáveis de ambiente de um arquivo `.env` para o `process.env`. Essencial para não deixar senhas e usuários expostos no código.

---

## 🚀 Como instalar e rodar o projeto

Siga os passos abaixo para configurar o ambiente e executar o código na sua máquina:

### 1. Pré-requisitos
Certifique-se de ter instalado em sua máquina:
- **Node.js** (versão 14 ou superior)
- Um servidor **MySQL** rodando localmente (via XAMPP, Workbench, Docker, etc.) ou em nuvem.

### 2. Inicialize o projeto e instale as dependências
Abra o terminal na pasta do seu projeto e execute os comandos abaixo:

```bash
# Inicializa o gerenciador de pacotes do Node (cria o arquivo package.json)
npm init -y

# Instala as dependências necessárias
npm install mysql2 dotenv
npm install mysql2
