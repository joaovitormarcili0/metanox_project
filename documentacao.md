# Documentação do Projeto — Site Premium Metanox

## 1. Visão Geral
Este documento descreve a arquitetura, as decisões de design e a estrutura técnica do novo site da **Metanox Metalúrgica Ltda**, uma empresa com mais de 26 anos de mercado especializada em produtos de aço inoxidável.

O objetivo deste projeto foi executar o **redesign completo** do site existente (que possuía esquema de cores azul e laranja e foco institucional) para um **layout premium focado em alta conversão**, adotando uma identidade minimalista monocromática (preto, branco e cinza), fortemente inspirada em grandes marcas de alto padrão (escola Apple/Tesla de design).

---

## 2. Decisões de Design (UI/UX)

### Paleta de Cores Monocromática
Foi customizado o arquivo `index.css` global do Tailwind para suportar um tema nativo limpo:
- **Background Principal:** Branco (`#ffffff`) para respiro e foco no conteúdo.
- **Foreground (Texto/Dark Sections):** Preto profundo (`#111111`).
- **Accent (Apoio):** Cinza Escuro (`#333333`) substituiu o verde/laranja antigo.

### Foco em Conversão
Para transformar acessos em leads, a estrutura foi repensada:
- Botão persistente do **WhatsApp flutuante** com micro-animação (Pulse) para facilitar o contato rápido em qualquer ponto da navegação.
- Extinção de blocos mortos de texto. Todos os textos são seguidos de CTAs (Call To Action).
- Navegação dividida em intenção ("Para Sua Casa", "Para Sua Obra", "Para Sua Loja").

### Imagens Realistas
O uso de ícones foi substituído por imagens geradas hiper-realistas (`4:3` e `16:9`) para aumentar a tangibilidade dos produtos vendidos pela Metanox, gerando as seguintes peças gráficas inseridas na pasta `/public`:
- Equipamentos e cortes a laser (`laser_tubo.png`, `hero-2.png`).
- Acabamentos luxuosos residenciais (`hero-1.png`, `residencia.png`, `box_banheiro.png`, `suporte_tv.png`).
- Aplicações comerciais/industriais (`obras.png`, `bate_carrinho.png`, `pia_inox.png`).

---

## 3. Arquitetura Técnica

### Stack Tecnológico
O projeto é baseado nas tecnologias frontend mais modernas:
- **Framework:** React com TypeScript.
- **Build Tool:** Vite (rápido e otimizado).
- **Estilização:** Tailwind CSS (Utilitário-first).
- **Componentes:** Shadcn UI (Componentes acessíveis construídos sobre o Radix UI, controlando formulários, botões, modais).
- **Roteamento:** React Router DOM (Single Page Application para transições secas sem recarregar recursos visualmente).

### Estrutura de Arquivos Principal
```text
/src
 ├── /components
 │    ├── Header.tsx         (Menu glassmorphism responsivo)
 │    ├── HeroSection.tsx    (Bloco inicial com carrossel auto-rotating)
 │    ├── AboutSection.tsx   (Barra de contadores numéricos animados)
 │    ├── IntentNav.tsx      (Navegação de usuários por perfil)
 │    ├── ProductShowcase.tsx(Galeria vitrine de produtos)
 │    ├── Testimonials.tsx   (Carrossel de prova social)
 │    ├── FAQ.tsx            (Accordion com objeções quebradas)
 │    ├── WhatsAppFloat.tsx  (Componente global flutuante)
 │    └── Footer.tsx         (Rodapé rico em SEO e contatos corporativos)
 │
 ├── /pages
 │    ├── Index.tsx          (Home Page consolidando as 11 sessões criadas)
 │    ├── Produtos.tsx       (Catálogo completo (sob medida e loja online) com 23 produtos)
 │    ├── Servicos.tsx       (Equipamento fabril e maquinário)
 │    └── NotFound.tsx       (Tratamento elegante de erro 404)
 │
 ├── App.tsx                 (Orquestrador central de Rotas)
 └── index.css               (Design System Token Control)
```

---

## 4. Funcionalidades de Destaque

### 4.1 Carrossel do Hero Section (`HeroSection.tsx`)
Implementação de um carrossel fotográfico dinâmico com 3 lâminas (`hero-1.png`, `hero-2.png`, `hero-3.png`). Funciona com:
- *Auto-rotação* de 5 segundos.
- *Micro-interação* de Fade (CSS transition duration-1000).
- *Efeito Ken Burns* (escala contínua lenta a 105% do tamanho real para simular vídeo estático).

### 4.2 Página de Produtos Estratégica (`Produtos.tsx`)
A página não tenta ser um E-commerce (mantendo a simplicidade local). Ela atua como um redirecionador inteligente:
- Produtos **Sob Medida**: Redirecionam para o WhatsApp com mensagens de pré-captura codificadas na URL (ex: `Gostaria de orçar Guarda-Corpo`).
- Produtos **De Loja**: Botões secundários que abrem em `_blank` o link direto do item na loja oficial VTEX da Metanox (`loja.metanox.com.br`).

### 4.3 Redesign Contraste-Safe (Acessibilidade)
Houve uma limpeza estrutural nos variantes de botão (Outline) do Shadcn. Quando renderizados num fundo dark, tornavam-se caixas brancas ilegíveis. Todos os botões do sistema agora monitoram estritamente o contraste forçado:
- Backdrops Escuros recebem `bg-transparent text-background`.
- Backdrops Claros recebem `bg-foreground text-background`.

---

## 5. Como Manter e Evoluir
- **Para adicionar novos produtos:** Adicionar o novo objeto ao array estático em `/src/pages/Produtos.tsx`, e a imagem na pasta `/public`. O GRID se ajusta de forma responsiva automaticamente.
- **Para mudar e-mails ou links fixos de contato:** Atacar primeiramente o `Footer.tsx` e o `ContactSection.tsx`.
- **Scripts de Run:**
  - `npm run dev` para desenvolvimento em hot-reload.
  - `npm run build` para empacotar (bundling) os estáticos gerados em Vite minimizados.

> Documentação gerada em abril de 2026.
