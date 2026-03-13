# Estrutura de Projeto: Mobile FSD

Este projeto utiliza uma adaptacao da arquitetura Feature-Sliced Design (FSD), focada em decompor a aplicacao em camadas de responsabilidade tecnica e de negocio, garantindo escalabilidade e facilidade de teste.

## Arquitetura da Camada `src`

### 1. `app` (Entrada e Roteamento)

Responsavel pela configuracao inicial e o roteamento via Expo Router.

- `_layout.tsx`: layout raiz; aplica providers globais (`AppProviders`) e configura a stack de navegacao.
- `index.tsx`: rota inicial; aponta para a pagina principal.

Papel: atuar como a casca de navegacao e o bootstrap do app.

### 2. `process` (Processos Globais)

Orquestracao que transcede paginas e features, focada no ciclo de vida da aplicacao.

- `model/useAppReady.ts`: gerencia o estado de prontidao (`readiness`) do app.
- `providers/AppProviders.tsx`: wrapper de contextos globais (ex: Theme, SafeArea).

Papel: logica de inicializacao e configuracoes transversais.

### 3. `pages` (Paginas/Telas)

Composicao de telas inteiras utilizando widgets e features.

- `HomePage.tsx`: orquestra a tela principal, gerencia estados de loading de pagina e renderiza os widgets.

Papel: montar a visao macro sem deter regras de dominio pesadas.

### 4. `widgets` (Modulos de UI)

Blocos de interface complexos que combinam entidades e features para entregar uma funcionalidade de tela.

- `UserCardWidget/`: combina a visualizacao do usuario com os controles de ciclo.
- `HomeShowcase/`: vitrine que demonstra a arquitetura do projeto.

Papel: ser a unidade de composicao reutilizavel para as paginas.

### 5. `features` (Interacoes de Negocio)

Acoes e interacoes especificas que o usuario pode realizar.

- `user-cycle/`: hooks e UI para navegar entre diferentes perfis.
- `UserManagement/`: acoes como troca de usuario ou logout.

Papel: resolver casos de uso especificos de interacao.

### 6. `entities` (Dominio do Negocio)

Modelagem dos dados e componentes que representam a logica central da aplicacao.

- `user/api/`: busca e normalizacao de dados (Axios).
- `user/model/`: definicao de tipos e contratos (`User`).
- `user/ui/`: componentes visuais atomicos da entidade (Card, Detail).

Papel: concentrar o que e a entidade e como ela se comporta.

### 7. `shared` (Infraestrutura e UI Base)

Componentes e utilitarios genericos e reutilizaveis por qualquer outra camada.

- `api/`: instancia central do cliente HTTP.
- `ui/`: componentes base (botoes, cards, telas de safe area).
- `config/`: variaveis de ambiente e constantes de runtime.

Papel: ser a base tecnica agnostica ao negocio.

### 8. `__tests__` (Garantia de Qualidade)

Estrutura de testes que espelha exatamente a pasta `src`.

- Divisao: testes unitarios e de integracao organizados por camada (`pages`, `features`, `entities`, etc).
- `__mocks__/`: repositorio de dados simulados para testes.

Papel: garantir isolamento e previsibilidade em cada nivel da arquitetura.

## Resumo da Arquitetura

O projeto foi construido para ser modular e previsivel.

A logica flui do `shared` (basico) para o `app` (complexo). Ao isolar a logica de dominio nas `entities` e o comportamento nas `features`, evitamos o efeito espaguete, onde uma mudanca visual quebra uma regra de negocio. Os `widgets` servem como as pecas de LEGO que as `pages` utilizam para montar a interface final, enquanto os testes espelhados garantem que cada peca funcione isoladamente antes da integracao.
