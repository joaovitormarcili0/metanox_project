<div align="center">
  <img src="./public/logo.png" alt="Metanox Logo" width="200"/>
  <h1>Metanox - Plataforma Corporativa e Painel Admin</h1>
  <p>O site oficial e catálogo de produtos da Metanox. Construído com foco absoluto em performance, SEO e autonomia para a equipe de design gerenciar o conteúdo com facilidade.</p>
</div>

---

## 🚀 Tecnologias e Stack

- **Frontend Core**: [React](https://react.dev/) 18 com [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/) (Rápido e otimizado com *Lazy Loading*)
- **Estilização e Componentes**: [TailwindCSS](https://tailwindcss.com/) + [Shadcn UI](https://ui.shadcn.com/) + Lucide Icons
- **Roteamento**: [React Router DOM](https://reactrouter.com/) v6
- **Autenticação e Banco de Dados**: [Supabase](https://supabase.com/) (PostgreSQL + Row Level Security + Storage)
- **Envio de E-mails**: [EmailJS](https://www.emailjs.com/)

---

## 🌟 Principais Funcionalidades

### 1. Sistema Dinâmico de Imagens e Textos (CMS Customizado)
O site possui um Painel Admin seguro (`/admin`) onde a equipe pode trocar textos e imagens principais do site sem precisar pedir alterações no código.
- Os textos (Copys) possuem fallbacks fixos de segurança caso haja lentidão na rede.
- As imagens listadas no dropdown do admin são renderizadas diretamente da pasta `public` do Github através de um script automatizado (`scripts/generate-images.js`).

### 2. Segurança Bancária (Row Level Security)
Para acessar o `/admin`, o usuário deve estar cadastrado no painel de Authentication do Supabase. O banco de dados foi configurado com **RLS (Row Level Security)**, o que garante que:
- **Visitantes**: Apenas possuem a permissão de `SELECT` (leitura) dos textos e imagens no carregamento do site.
- **Administradores logados**: Possuem a permissão de `UPDATE` e `INSERT` após receberem um JWT token do Supabase.

### 3. Sistema de Orçamentos Robusto
O formulário na página de orçamento permite o upload de anexos de até 10MB (PDF, PNG, JPG, DWG, DXF).
- O anexo é salvo no bucket `orcamentos` do **Supabase Storage**.
- Um e-mail automatizado é enviado para a Metanox via **EmailJS** contendo os dados do cliente e o link público do projeto gerado pelo Storage.
- **Fallback Automático:** Caso a cota mensal do EmailJS exceda o limite gratuito, o sistema intercepta o erro e muda a interface ativando um "Modo Express", redirecionando o cliente para enviar o projeto diretamente via **WhatsApp** do vendedor com os dados preenchidos.

### 4. Performance Extrema
A arquitetura do roteamento foi configurada com `React.lazy` e `Suspense`. Isso significa que os usuários no celular carregam apenas os pacotes de Javascript da página específica que estão visitando (Code-Splitting), reduzindo drásticamente o "First Contentful Paint" do Google Lighthouse.

---

## 🛠️ Como rodar o projeto localmente

Siga os passos abaixo para baixar e rodar a aplicação no seu computador:

### Pré-requisitos
- Ter o **Node.js** (versão 18+) instalado na máquina.
- Ter o gerenciador de pacotes **npm** ou **bun** instalado.

### 1. Instalação

```bash
# Clone o repositório
git clone https://github.com/joaovitormarcili0/metanox_project.git

# Entre na pasta
cd "Metanox Site"

# Instale todas as dependências
npm install
```

### 2. Variáveis de Ambiente
Na configuração padrão, a url pública e a chave anônima (anon key) do Supabase já estão inseridas diretamente em `src/lib/supabase.ts`. Você não precisa criar um arquivo `.env` para rodar o site publicamente. *(Lembrando que a anon_key é exposta intencionalmente e protegida via regras de RLS).*

### 3. Rodando o servidor de desenvolvimento

```bash
npm run dev
```

O site ficará disponível em `http://localhost:5173`.

---

## 🏗️ Estrutura do Projeto

Abaixo um resumo da organização dos arquivos:

- `/public`: Onde todas as imagens, ícones estáticos e logos devem ser jogados.
- `/src/components`: Peças visuais e reutilizáveis (Hero, Buttons, Formulário, Cards).
- `/src/contexts`: Contextos globais que injetam os textos (`CopyContext.tsx`) e imagens (`ImagesContext.tsx`) do banco em tempo real.
- `/src/layouts`: Estrutura de casca do Painel Admin (`AdminLayout.tsx`).
- `/src/lib`: Bibliotecas de integração externa (Instância do Supabase e funções do EmailJS).
- `/src/pages`: As páginas completas do site (Index, Produtos, Servicos, Orcamento).

---

## 🚀 Deploy

O projeto está configurado para Deploy Automático na **Vercel**.
Qualquer mudança aprovada ou Push direto para a branch `main` irá compilar a aplicação e atualizar o site oficial imediatamente (geralmente em 15 segundos).

```bash
# Para fazer uma atualização oficial:
git add .
git commit -m "feat: descrição do que você fez"
git push
```

---

Desenvolvido com 🖤 e focado na melhor conversão para os clientes Metanox.
