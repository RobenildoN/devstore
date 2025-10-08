# DevStore

![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black)
![React](https://img.shields.io/badge/React-19.1.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-blue)

DevStore é uma aplicação de e-commerce moderna desenvolvida com Next.js, focada em produtos para desenvolvedores como camisetas e moletons.

## 🚀 Funcionalidades

- **Página inicial** com produtos em destaque
- **Página de produto** com detalhes e opções de tamanho
- **Carrinho de compras** com gerenciamento de estado
- **Busca de produtos** em tempo real
- **Layout responsivo** com TailwindCSS
- **Geração de imagens dinâmicas** para compartilhamento em redes sociais

## 🛠️ Tecnologias

- [Next.js 15.5.4](https://nextjs.org/) - Framework React com SSR e SSG
- [React 19.1.0](https://reactjs.org/) - Biblioteca JavaScript para interfaces
- [TypeScript](https://www.typescriptlang.org/) - Superset tipado de JavaScript
- [TailwindCSS](https://tailwindcss.com/) - Framework CSS utilitário
- [Zod](https://zod.dev/) - Validação de esquemas TypeScript
- [Lucide React](https://lucide.dev/) - Ícones para React

## 📋 Pré-requisitos

- Node.js (versão LTS recomendada)
- PNPM

## 🔧 Instalação

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/devstore.git
cd devstore
```

Instale as dependências:

```bash
pnpm install
```

Configure as variáveis de ambiente criando um arquivo `.env.local` na raiz do projeto:

```
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
APP_URL=http://localhost:3000
```

## ⚡ Executando o projeto

Desenvolvimento:

```bash
pnpm dev
```

Produção:

```bash
pnpm build
pnpm start
```

## Testes E2E com Cypress

Este repositório inclui testes end-to-end (E2E) com Cypress cobrindo fluxos como busca de produtos e adicionar ao carrinho.

Principais pontos:

- Os testes estão em `cypress/e2e/` (por exemplo `search.cy.ts` e `add-product-to-cart.cy.ts`).
- Comandos e helpers personalizados (como `searchByQuery`) ficam em `cypress/support/commands.ts` e já possuem declaração de tipos TypeScript para evitar o erro "property 'searchByQuery' does not exist".
- Arquivos de configuração e suporte do Cypress estão em `cypress/support/` e `cypress.config.ts`.

Como executar os testes localmente:

Usando o Cypress em modo GUI:

```powershell
pnpm exec cypress open
```

Executar todos os testes em modo headless:

```powershell
pnpm exec cypress run
```

Executar um spec específico (ex.: busca):

```powershell
pnpm exec cypress run --spec "cypress/e2e/search.cy.ts"
```

Sugestão de scripts (opcional): adicione ao `package.json`

```json
"scripts": {
	"cypress:open": "cypress open",
	"cypress:run": "cypress run"
}
```

Observações:

- Este projeto usa a versão de desenvolvimento do Cypress listada em `devDependencies` (`cypress`), e não adicionamos scripts automaticamente — as instruções acima funcionam com `pnpm`.
- Se você encontrar erro de tipagem para comandos customizados, confirme que `cypress/support/commands.ts` exporta as declarações de tipos (existem declarações no topo do arquivo neste projeto).

## 📁 Estrutura do projeto

```
devstore/
├── public/           # Arquivos estáticos (imagens)
├── src/
│   ├── app/          # Rotas e páginas da aplicação
│   │   ├── (store)/  # Grupo de rotas da loja
│   │   ├── api/      # Rotas da API
│   ├── components/   # Componentes reutilizáveis
│   ├── contexts/     # Contextos React (carrinho)
│   ├── data/         # Funções de acesso a dados e tipos
│   └── env.ts        # Validação de variáveis de ambiente
```

## 🧩 Principais componentes

- **Header**: Navegação principal com logo, busca e carrinho
- **CartWidget**: Exibe quantidade de itens no carrinho
- **SearchForm**: Formulário de busca de produtos
- **AddToCartButton**: Botão para adicionar produtos ao carrinho
- **Skeleton**: Componente de carregamento para melhor UX

## 🌐 API

A aplicação possui endpoints internos para:

- Listagem de produtos em destaque
- Detalhes de um produto específico
- Busca de produtos por termo

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Desenvolvido por

Desenvolvido como parte do curso da Rocketseat.
