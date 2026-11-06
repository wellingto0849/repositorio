"use client"

import { useState, useEffect } from "react";
import { criarTarefa, ouvirTarefas, marcarTarefa, removerTarefa } from "@/lib/Tarefas";

export default function Form() {
  const [tarefas, setTarefas] = useState([]);
  const [texto, setTexto] = useState("");
  const faltam = tarefas.filter((t) => !t.feita).length;

  useEffect(() => {
    const parar = ouvirTarefas(setTarefas);
    return () => parar && parar();
  }, []);

  async function adicionar(e) {
    e.preventDefault();
    if (!texto.trim()) return;
    try {
      await criarTarefa(texto);
    } catch (error) {
      console.error("Erro ao criar tarefa:", error);
    }
    setTexto("");
  }

  function remover(id) {
    setTarefas((atuais) => atuais.filter((tarefa) => tarefa.id !== id));
  }

  return (
    <>
      <form onSubmit={adicionar}>
        <input
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Digite uma tarefa"
          aria-label="Nova tarefa"
        />
        <button type="submit">Adicionar tarefa</button>
      </form>

      <p>Faltam {faltam} tarefas</p>

      <ul className="lista-tarefas">
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            <input
              type="checkbox"
              checked={!!tarefa.feita}
              onChange={() => marcarTarefa(tarefa.id, !tarefa.feita)}
              aria-label={`Marcar tarefa ${tarefa.texto} como feita`}
            />
            <span
              style={{
                textDecoration: tarefa.feita ? "line-through" : "none",
                opacity: tarefa.feita ? 0.6 : 1,
              }}
            >
              {tarefa.texto}
            </span>
            <button
              className="B1"
              type="button"
              onClick={() => removerTarefa(tarefa.id)}
              aria-label={`Remover tarefa ${tarefa.texto}`}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}