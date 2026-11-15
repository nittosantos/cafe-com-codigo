# Café com código

Uma história interativa sobre uma cafeteria que cresceu e um código que precisa crescer junto. O assunto é o padrão **Strategy**: separar o que o pedido precisa fazer de como isso acontece.

São 15 cenas. A metáfora é o café. O exemplo é um pedido em TypeScript. No fim, a mesma compra continua valendo R$ 32, e o canal do aviso pode ser trocado sem reescrever a regra do pedido.

## O objetivo

Mostrar, com uma refatoração pequena, por que um padrão de projeto existe.

No começo, uma única função faz três trabalhos: decide o preço de cada bebida, soma o pedido e avisa o cliente. Funciona enquanto o cardápio é curto e o aviso sai sempre no mesmo lugar. Qualquer mudança interrompe a operação inteira. Um preço novo, uma bebida nova ou um canal novo obrigam a abrir a mesma função.

A história não ensina vários padrões de uma vez. Ela apresenta o que é um Design Pattern, mostra as três famílias (criação, estrutura e comportamento) e segue fundo em uma delas: comportamento. Responsabilidade única, aberto/fechado e inversão de dependência aparecem no caminho, como princípios que preparam o terreno. O padrão que fica é o Strategy.

## O Strategy

Strategy é um padrão de comportamento. Ele dá um nome a uma ideia simples: a tarefa tem uma forma só de ser pedida, e várias formas de ser cumprida.

No café, o pedido precisa avisar o cliente. O aviso pode sair no balcão, por mensagem ou por outro canal. O pedido não escolhe o canal. Ele só pede o aviso. Quem monta a aplicação decide como o aviso sai.

No código, isso vira um contrato. A função `finalizarPedido` recebe `notificar`, uma função que aceita uma mensagem. Essa função é a estratégia. Dentro do pedido, a chamada é sempre a mesma. Fora dele, `console.log`, um e-mail ou um WhatsApp podem ocupar o mesmo lugar.

O que isso resolve: o canal muda e a regra do pedido continua. Não é preciso reescrever o cálculo, nem espalhar `if` para cada forma de avisar. A simulação executa essas funções de verdade, só na máquina de quem assiste. Nenhum aviso sai para fora.

O cardápio aberto e o cálculo extraído não são o Strategy. Eles tiram preço e soma de dentro da função, para que a última mudança — o aviso — fique visível. Se um dia cada bebida tiver uma regra própria de preço, o mesmo desenho serve de novo: o cálculo recebe a forma, em vez de conhecê-la.

## O caminho

A história começa antes do código: um espresso, dois cappuccinos, o movimento aumentando. Em seguida nomeia o que é um padrão — uma solução reconhecível para um problema que se repete, para adaptar, não para copiar — e apresenta o Strategy com a imagem do aviso.

Depois o barista aparece fazendo tudo. O código desse caos é uma função só. A refatoração tira o cálculo dali, abre o cardápio como dado (o latte entra sem um `if` novo) e, por último, troca o `console.log` fixo pela estratégia `notificar`. Um diagrama de classes nomeia o contexto, o contrato e as formas concretas. O antes e o depois ficam lado a lado. O pedido original segue em R$ 32.

A simulação roda o exemplo. Em seguida a história nomeia manutenção, reutilização e evolução, e também quando o Strategy só aumenta a complexidade. O mesmo desenho aparece num caixa: Pix, cartão ou boleto.

A última cena resume o que levar: o aviso pode mudar; o pedido, não. Dali também dá para baixar um arquivo TypeScript independente, `cafe-refatorado.ts`, com o exemplo já refatorado.

## Rodar na sua máquina

Instale Node.js 22.12 ou superior (recomendado: Node.js 24 LTS). Extraia o ZIP, abra o terminal na pasta `cafe-com-codigo` e execute:

```bash
npm install
npm run dev
```

Abra o endereço mostrado no terminal (normalmente http://localhost:5173). No VS Code, use **Arquivo → Abrir pasta**, selecione a pasta extraída e abra **Terminal → Novo terminal**.

Use o scroll, as setas da tela ou o teclado para avançar as cenas.

```bash
npm test          # testes do exemplo de pedidos
npm run typecheck # verifica o TypeScript
npm run build     # gera dist/ para hospedagem
npm run preview   # abre uma prévia do build
```

## Onde olhar

- `src/scenes/`: uma cena por arquivo, na ordem da história.
- `src/domain/pedidos.ts`: o pedido antes e depois, inclusive a estratégia `notificar`.
- `src/domain/pedidos.test.ts`: o total preservado, o latte e a bebida inválida.
- `src/App.tsx`: a casca da página (header, progresso e navegação).
- `src/hooks/useScenes.ts`: scroll e teclado.
- `src/styles/`: cores, tipografia, responsividade e animações.

Exemplo didático: itens válidos e valores inteiros em reais. Em produção, valide entradas, trabalhe com centavos e trate falhas de comunicação. As fontes do Google são opcionais: sem internet, a interface usa fontes locais de reserva. Para instalar dependências, é necessário acesso à internet.

Stack: React + TypeScript + Vite, CSS puro, sem backend e sem credenciais.
