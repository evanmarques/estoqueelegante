# Estoque Elegante

[![Status do Projeto](https://img.shields.io/badge/status-em--desenvolvimento-yellowgreen.svg)](https://shields.io/)
[![Licença](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/seu-usuario/estoque-elegante)](https://github.com/seu-usuario/estoque-elegante/issues)

> Um sistema moderno e intuitivo para gerenciamento de estoque, desenvolvido com Spring Boot e Angular.

---

## 📝 Visão Geral

O **Estoque Elegante** é uma solução completa para controle de inventário. O projeto nasceu da necessidade de oferecer uma ferramenta simples, mas poderosa, que permita aos lojistas controlar a entrada e saída de produtos, gerar relatórios e evitar perdas por falta ou excesso de estoque.

## ✨ Features Principais

-   ✅ **Controle de Produtos:** Cadastro, edição e remoção de produtos com detalhes como SKU, fornecedor e preço.
-   ✅ **Gestão de Entradas e Saídas:** Registre facilmente todas as movimentações do seu estoque.
-   ✅ **Relatórios Inteligentes:** Gere relatórios de vendas, produtos com baixo estoque e inventário geral.
-   ✅ **Autenticação Segura:** Login e controle de acesso utilizando Firebase Authentication.
-   ✅ **API RESTful:** Backend robusto com Spring Boot para futuras integrações.

## 🏛️ Arquitetura

Este projeto é dividido em duas partes principais: um backend RESTful e um frontend single-page application (SPA).

-   **Backend:**
    -   **Framework:** Spring Boot (Java)
    -   **Banco de Dados:** PostgreSQL
    -   **Autenticação:** Firebase Admin SDK
    -   **Build Tool:** Maven ou Gradle
-   **Frontend:**
    -   **Framework:** Angular
    -   **Linguagem:** TypeScript
-   **Infraestrutura:**
    -   **Banco de Dados:** Docker

## 🛠️ Começando (Getting Started)

Siga estas instruções para ter o ambiente completo rodando em sua máquina local.

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

-   **Java Development Kit (JDK):** Versão 17 ou superior.
-   **Maven:** Versão 3.8 ou superior (para gerenciar o projeto backend).
-   **Node.js:** Versão 18.x ou superior (para o ambiente frontend).
-   **Angular CLI:** `npm install -g @angular/cli`
-   **Docker:** Para rodar o banco de dados PostgreSQL.

#### Instalação via Chocolatey (Windows)

Se você está no Windows, pode usar o Chocolatey para instalar as dependências:
```bash
choco install openjdk maven nodejs-lts docker-desktop
```
Após instalar o Node.js, instale o Angular CLI globalmente.

### Instalação e Execução

O processo é dividido em Backend e Frontend.

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/estoque-elegante.git](https://github.com/seu-usuario/estoque-elegante.git)
    cd estoque-elegante
    ```

2.  **Inicie o Banco de Dados (PostgreSQL):**
    Este comando irá iniciar um container Docker com o banco de dados.
    ```bash
    docker-compose up -d
    ```

3.  **Configure e Rode o Backend (Spring Boot):**
    -   Navegue até a pasta do backend (ex: `cd backend`).
    -   Configure o arquivo `src/main/resources/application.properties` com as credenciais do banco e do Firebase (veja a seção de configuração abaixo).
    -   Execute o projeto com o Maven:
        ```bash
        mvn spring-boot:run
        ```
    O backend estará disponível em `http://localhost:8080`.

4.  **Configure e Rode o Frontend (Angular):**
    -   Abra um **novo terminal** e navegue até a pasta do frontend (ex: `cd frontend`).
    -   Instale as dependências:
        ```bash
        npm install
        ```
    -   Configure o arquivo `src/environments/environment.ts` com as credenciais do Firebase.
    -   Inicie o servidor de desenvolvimento:
        ```bash
        ng serve
        ```
    A aplicação estará disponível em `http://localhost:4200`.

## ⚙️ Configuração

### Backend (`src/main/resources/application.properties`)

Este arquivo contém as configurações do servidor, banco de dados e Firebase.

```properties
# Configuração do Servidor
server.port=8080

# Configuração do Banco de Dados (PostgreSQL)
spring.datasource.url=jdbc:postgresql://localhost:5432/estoque_db
spring.datasource.username=postgres_user
spring.datasource.password=postgres_password
spring.jpa.hibernate.ddl-auto=update

# Configuração do Firebase
# Crie um arquivo firebase-adminsdk.json na pasta 'resources'
# e aponte o caminho para ele aqui.
firebase.service-account.path=classpath:firebase-adminsdk.json
```

### Frontend (`src/environments/environment.ts`)

Este arquivo contém as chaves do Firebase para o cliente web. Você pode obtê-las no console do Firebase em "Configurações do Projeto > Seus apps".

```typescript
export const environment = {
  production: false,
  firebase: {
    apiKey: "SUA_API_KEY",
    authDomain: "seu-projeto.firebaseapp.com",
    projectId: "seu-projeto-id",
    storageBucket: "seu-projeto.appspot.com",
    messagingSenderId: "SEU_SENDER_ID",
    appId: "SEU_APP_ID"
  }
};
```

## 🧪 Rodando os Testes

### Backend (Maven)
```bash
# Na pasta do backend
mvn test
```

### Frontend (Angular)
```bash
# Na pasta do frontend
ng test
```

## 🤝 Como Contribuir

Contribuições são bem-vindas! Se você tem alguma ideia ou encontrou um bug, sinta-se à vontade para abrir uma issue ou enviar um Pull Request. Por favor, leia nosso **[Guia de Contribuição](CONTRIBUTING.md)** para mais detalhes.

## 📜 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE.md](LICENSE.md) para mais detalhes.
```
