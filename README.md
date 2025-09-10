# Estoque Elegante: Plataforma de E-commerce

## Visão Geral do Projeto

O 'Estoque Elegante' é uma plataforma de e-commerce completa, projetada para a venda de joias, perfumes e maquiagens. O objetivo é fornecer uma experiência de loja virtual (Storefront) elegante e responsiva para os clientes, combinada com um poderoso Painel de Controle (Admin Dashboard) para o vendedor gerenciar todo o negócio.

A plataforma será primariamente uma aplicação web acessível por qualquer navegador, com planos futuros para ser distribuída como um aplicativo de desktop (Windows) e mobile (Android).

## Requisitos Funcionais

### Módulo 1: Vitrine da Loja (Storefront - Público)

* **Página Inicial:** Apresentação da marca e produtos em destaque.
* **Galeria de Produtos:** Visualização de todos os produtos com fotos, nome e preço.
* **Página de Detalhes do Produto:** Visão completa de um produto com múltiplas fotos, descrição detalhada e preço.
* **Busca de Produtos:** Ferramenta para que clientes encontrem produtos facilmente.
* **(Futuro) Carrinho de Compras e Checkout.**

### Módulo 2: Painel de Controle (Admin - Privado)

* **Autenticação Segura:** Controle de acesso ao painel usando **Firebase Authentication**.
* **Dashboard Principal:** Visão geral das vendas, estoque baixo e atividade recente.
* **Gestão de Produtos (CRUD):**
    * Cadastro, visualização, edição e remoção de produtos.
    * Upload de imagens dos produtos com suporte para:
        * Câmera do dispositivo (Mobile/Web).
        * Galeria de fotos (Mobile/Web).
    * Armazenamento das imagens no **Firebase Storage**.
    * Controle de estoque com atualização automática.
* **Gestão de Vendas:** Histórico de transações e detalhes de cada venda.
* **Gestão de Clientes:** Cadastro e visualização de dados de clientes.

## Arquitetura do Sistema

O projeto adota uma arquitetura de aplicação de página única (SPA) com um backend robusto.

### Frontend (Interface do Usuário)

* **Tecnologia Principal:** **Angular** com o **Ionic Framework** para garantir responsividade e uma base de componentes de alta qualidade.
* **Distribuição:**
    * **Aplicação Web Responsiva:** Foco principal, acessível via navegador.
    * **(Futuro) Executável Windows:** Empacotado com **Electron**.
    * **(Futuro) Aplicativo Android:** Compilado a partir da mesma base de código com **Capacitor**.

### Backend (Servidor e Lógica de Negócio)

* **Tecnologia:** **Java** com o framework **Spring Boot**.
* **Função:** Servir como uma API RESTful para gerenciar toda a lógica de negócio e persistência de dados.

### Banco de Dados e Serviços Cloud (Free Tier)

* **Banco de Dados Principal:** **PostgreSQL** gerenciado via **Flyway Migrations**.
* **Serviços de Autenticação e Mídia:** **Firebase** (Authentication e Storage).

## Como Iniciar o Projeto

1.  **Instale as ferramentas de base:** Node.js, Java JDK 17+, VS Code, Git, PostgreSQL, DBeaver, Android Studio.
2.  **Instale as CLIs:** `npm install -g @angular/cli @ionic/cli`
3.  **Clone o repositório:** `git clone <url-do-repositorio>`
4.  **Execute o Backend:** `cd backend` e `./mvnw spring-boot:run`
5.  **Execute o Frontend:** `cd frontend/app` e `ionic serve`

## Contato

* **Nome:** [Seu Nome]
* **E-mail:** [Seu Email]