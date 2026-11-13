# Café com código — React

Uma história interativa sobre Design Patterns, com 12 cenas animadas e uma refatoração em TypeScript.

## Rodar na sua máquina

Instale Node.js 22.12 ou superior (recomendado: Node.js 24 LTS).
Extraia o ZIP, abra o terminal na pasta `cafe-com-codigo` e execute:

```bash
npm install
npm run dev
```

Abra o endereço mostrado no terminal (normalmente http://localhost:5173).
No VS Code, use **Arquivo → Abrir pasta**, selecione a pasta extraída e abra **Terminal → Novo terminal**.

## Comandos

```bash
npm test          # testes do exemplo de pedidos
npm run typecheck # verifica o TypeScript
npm run build     # gera dist/ para hospedagem
npm run preview   # abre uma prévia do build
```

## Onde editar

- `src/App.tsx`: casca da página (header, progresso e navegação).
- `src/scenes/`: uma cena por arquivo.
- `src/hooks/useScenes.ts`: scroll e teclado.
- `src/styles/`: cores, tipografia, responsividade e animações.
- `src/domain/pedidos.ts`: funções reais usadas na demonstração.
- `src/domain/pedidos.test.ts`: comportamento preservado, latte e bebida inválida.

Use o scroll, as setas da tela ou o teclado. O TypeScript disponível na última cena é um exemplo independente; o projeto React completo é este ZIP.

## Conteúdo

A história começa pelo que é um Design Pattern e pelas três famílias: criação, estrutura e comportamento. Depois vem o barista, o código como está e a refatoração até o Strategy. Responsabilidade única, aberto/fechado e inversão de dependência aparecem como princípios no caminho.

Exemplo didático: itens válidos e valores inteiros em reais. Em produção, valide entradas, trabalhe com centavos e trate falhas de comunicação. A simulação não envia mensagens externas. As fontes do Google são opcionais: sem internet, a interface usa fontes locais de reserva. Para instalar dependências, é necessário acesso à internet.

Stack: React + TypeScript + Vite, CSS puro, sem backend e sem credenciais.
