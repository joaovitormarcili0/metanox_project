

# Plano: Site Institucional Metanox com Seção de Serviços

## Contexto

O site atual (metanox.com.br) é uma single-page em Wix com: hero banner, seção de produtos (loja online + sob medida), seção "Quem Somos", estatísticas, logos de parceiros, contato e WhatsApp. A paleta de cores extraída da imagem do usuario: branco, azul-marinho escuro (#1B2A4A), cinza claro (#D9D9D9) e coral/salmao (#E8675E).

O usuario quer adicionar a parte de **Serviços**: corte a laser de chapa e tubo, dobras CNC.

## O que sera construido

Site institucional completo da Metanox com as seguintes seções na pagina principal (single-page com navegacao por ancoras + pagina dedicada de servicos):

### 1. Configurar Design System
- Paleta: azul-marinho (#1B2A4A), coral (#E8675E), branco (#FFFFFF), cinza claro (#D9D9D9)
- Tipografia: fonte moderna industrial (Inter ou similar)
- Atualizar `index.css` com as variaveis CSS

### 2. Componentes Compartilhados
- **Header/Navbar**: Logo Metanox, links (Inicio, Servicos, Produtos, Quem Somos, Contato), botao WhatsApp
- **Footer**: Endereco, telefone, email, WhatsApp, redes sociais

### 3. Pagina Index (Home)
- **Hero**: Banner full-width com titulo "Solucoes em Produtos de Aco Inox, Corte Laser e Dobra", CTA para orcamento
- **Secao "O Que Voce Precisa?"**: Cards divididos em Loja Online / Produtos Sob Medida / Servicos
- **Secao Quem Somos** (resumo): Texto institucional + contadores animados (+20 anos, 4596 projetos, 3232 clientes, +170 cidades)
- **Logos de Parceiros**: Pinheiro, RDO, WOA, Dimas, W Koerich, GND
- **Secao Contato**: Formulario + endereco + telefone + WhatsApp

### 4. Pagina de Servicos (NOVA - foco principal)
- **Hero de Servicos**: Banner com titulo "Servicos Industriais"
- **Corte a Laser de Chapa**: Descricao do servico, capacidades tecnicas, materiais aceitos, imagem placeholder
- **Corte a Laser de Tubo**: Descricao do servico, precisao, vantagens, imagem placeholder
- **Dobras CNC**: Descricao do servico, capacidades, tipos de dobra, imagem placeholder
- **CTA de Orcamento**: Botao para solicitar orcamento via WhatsApp

### 5. Roteamento
- `/` - Home
- `/servicos` - Pagina de Servicos

## Arquivos a criar/editar

| Arquivo | Acao |
|---------|------|
| `src/index.css` | Atualizar paleta de cores |
| `src/components/Header.tsx` | Navbar com logo e links |
| `src/components/Footer.tsx` | Rodape completo |
| `src/components/HeroSection.tsx` | Banner principal |
| `src/components/ServicesPreview.tsx` | Preview de servicos na home |
| `src/components/AboutSection.tsx` | Quem somos + contadores |
| `src/components/PartnersSection.tsx` | Logos parceiros |
| `src/components/ContactSection.tsx` | Formulario de contato |
| `src/pages/Index.tsx` | Home completa |
| `src/pages/Servicos.tsx` | Pagina dedicada de servicos |
| `src/App.tsx` | Adicionar rota /servicos |

## Detalhes Tecnicos

- React + Tailwind CSS + React Router
- Lucide icons para icones de servicos (Zap para laser, Wrench para dobra, etc.)
- Imagens placeholder com gradientes/icones ate o cliente fornecer fotos reais
- WhatsApp link: `https://api.whatsapp.com/send?phone=5548988164249`
- Contato: (48) 3257-1855 / atendimento@metanox.com.br
- Endereco: Rua Cecilia do Rego Almeida, 63, Jardim Eldorado, Palhoca/SC

