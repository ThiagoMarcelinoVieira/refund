# 💸 Refund - Gestão de Reembolsos

O **Refund** é uma aplicação Full Stack desenvolvida para facilitar o processo de solicitações de reembolso em ambientes corporativos. A ferramenta permite que colaboradores enviem comprovantes de despesas (como alimentação, transporte e serviços) para análise do setor financeiro. Esse projeto foi criado durante o curso Full Stack da Rocketseat.

## 🚀 Tecnologias Utilizadas

### Frontend

- **React + Vite**: Base da aplicação web.
- **Axios**: Para comunicação com a API.
- **TypeScript**: Garantia de tipagem e segurança no código.

### Backend

- **Node.js**: Ambiente de execução.
- **Fastify**: Framework web de alta performance.
- **Prisma ORM**: Gerenciamento e modelagem do banco de dados.
- **JWT (JSON Web Token)**: Sistema de autenticação e proteção de rotas.

### Infraestrutura

- **Render**: Hospedagem da API (Backend).
- **Vercel**: Hospedagem da aplicação Web (Frontend).
- **Neon**: Banco de dados PostgreSQL na nuvem.

## 🛠️ Configuração e Instalação

### Pré-requisitos

- Node.js instalado.
- Conta no GitHub.

### Passo a Passo

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/seu-usuario/refund.git
    cd refund
    ```

2.  **Configuração da API:**
    - Entre na pasta `api`: `cd api`.
    - Instale as dependências: `npm install`.
    - Crie um arquivo `.env` com as variáveis:
      ```env
      DATABASE_URL="sua_url_do_neon"
      JWT_SECRET="sua_chave_secreta"
      ```
    - Execute as migrações do banco: `npx prisma migrate dev`.

3.  **Configuração do Frontend:**
    - Entre na pasta `web`: `cd ../web`.
    - Instale as dependências: `npm install`.
    - No arquivo `src/services/api.ts`, aponte para a URL da sua API no Render.

## 🌍 Deploy

### Backend (Render)

A API foi configurada no Render com as seguintes variáveis de ambiente:

- `DATABASE_URL`: Link de conexão do Neon.
- `JWT_SECRET`: Chave para geração de tokens.

### Frontend (Vercel)

O deploy do frontend foi realizado apontando o `Root Directory` para a pasta `web`.

- **Dica SPA**: Foi adicionado um arquivo `vercel.json` para lidar com o redirecionamento de rotas (Rewrites), evitando erros 404 ao atualizar a página.