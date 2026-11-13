import assert from "node:assert/strict";
import { test } from "node:test";
import {
  calcularTotal,
  cardapio,
  finalizarPedido,
  finalizarPedidoAntes,
  pedidoOriginal,
} from "./pedidos.ts";

test("refatoração preserva total e aviso do pedido original", () => {
  const antes: string[] = [];
  const depois: string[] = [];
  assert.equal(
    finalizarPedidoAntes(pedidoOriginal, (mensagem) => {
      antes.push(mensagem);
    }),
    32,
  );
  assert.equal(
    finalizarPedido(pedidoOriginal, cardapio, (mensagem) => {
      depois.push(mensagem);
    }),
    32,
  );
  assert.deepEqual(depois, antes);
});

test("latte estende o cardápio sem mudar o algoritmo", () => {
  assert.equal(
    calcularTotal(
      [
        { tipo: "latte", quantidade: 1 },
        { tipo: "cappuccino", quantidade: 2 },
      ],
      cardapio,
    ),
    38,
  );
});

test("bebida desconhecida não gera aviso de sucesso", () => {
  const avisos: string[] = [];
  assert.throws(
    () =>
      finalizarPedido(
        [{ tipo: "inexistente", quantidade: 1 }],
        cardapio,
        (mensagem) => {
          avisos.push(mensagem);
        },
      ),
    /Bebida inválida/,
  );
  assert.deepEqual(avisos, []);
});
