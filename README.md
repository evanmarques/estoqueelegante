# Estoque Elegante: Plataforma de Gestão de Vendas e Estoque

## Visão Geral do Projeto

O 'Estoque Elegante' é uma plataforma completa para a gestão de negócios de joias, perfumes e maquiagens. O objetivo é fornecer um sistema acessível por aplicativo Android, executável para Windows e um site, automatizando o controle de estoque e facilitando o processo de vendas.

O projeto será construído com foco em tecnologias gratuitas e de código aberto, aproveitando o conhecimento existente em Java e PostgreSQL, e desenvolvendo novas habilidades em **Angular**.

## Requisitos Funcionais

* **Controle de Acesso:** Autenticação de usuários usando o **Firebase Authentication**.
* **Catálogo de Produtos:** Adição, edição e remoção de produtos, com detalhes como nome, descrição, preço, quantidade em estoque e imagens. As imagens serão armazenadas no **Firebase Storage**.
* **Gestão de Estoque:** Atualização automática do estoque após cada venda e alertas para produtos com estoque baixo.
* **Processamento de Vendas:** Registro de vendas, cálculo de totais e histórico de transações.
* **Gerenciamento de Clientes:** Cadastro e visualização de dados de clientes.

## Arquitetura do Sistema

O projeto adota uma arquitetura completa, dividida em Frontend e Backend, para garantir uma estrutura modular e escalável.

### Frontend (Interface do Usuário)

* **Tecnologia Principal:** **Angular** (com TypeScript).
* **Distribuição:**
    * **Site:** Aplicação web padrão gerada pelo Angular.
    * **Aplicativo Android:** Usando o **Ionic Framework** para compilar o código Angular em um APK nativo.
    * **Executável Windows:** Usando **Electron** para empacotar a aplicação web Angular.
* **Função:** Prover uma interface intuitiva e responsiva para que o usuário possa interagir com o sistema em qualquer plataforma.

### Backend (Servidor e Lógica de Negócio)

* **Tecnologia:** **Java** com o framework **Spring Boot**.
* **Função:** Gerenciar a lógica do negócio, processar as requisições do frontend e interagir com os bancos de dados.

### Banco de Dados e Serviços Cloud (Free Tier)

* **Banco de Dados Principal:** **PostgreSQL**. Utilizado para armazenar dados transacionais e complexos, como informações de produtos, estoque, vendas e clientes. Gerenciamento via **DBeaver**.
* **Serviços de Autenticação e Mídia:** **Firebase**. Usado para autenticação de usuários e para armazenar as fotos dos produtos, aproveitando o plano gratuito (Spark Plan).

## Tecnologias e Ferramentas

* **Linguagens de Programação:** Java e **TypeScript**.
* **Frameworks/Bibliotecas:** Spring Boot, **Angular**, **Ionic Framework**, Electron.
* **Serviços Cloud:** Firebase (Authentication e Storage).
* **Banco de Dados:** PostgreSQL.
* **Ferramentas de Banco de Dados:** DBeaver.
* **Controle de Versão:** Git e GitHub.
* **IDE (Ambiente de Desenvolvimento Integrado):** Visual Studio Code.
* **Ferramentas de Linha de Comando (CLI):** **Angular CLI** e **Ionic CLI**.

## Como Iniciar o Projeto

1.  **Instale as ferramentas de base:**
    * Node.js e npm, Java JDK 17+, VS Code, Git, PostgreSQL, DBeaver, e Android Studio.

2.  **Instale as ferramentas de linha de comando (CLIs) do Angular e Ionic:**
    * Abra um terminal (PowerShell) e execute: `npm install -g @angular/cli @ionic/cli`

3.  **Clone o repositório:**
    * `git clone <url-do-seu-repositorio>`
    * `cd estoque-elegante`

4.  **Execute o Backend:**
    * `cd backend`
    * `./mvnw spring-boot:run`

5.  **Execute o Frontend:**
    * `cd frontend/app`
    * `ionic serve`

## Contato

* **Nome:** [Seu Nome]
* **E-mail:** [Seu Email]