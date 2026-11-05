"use client"

import { useState } from "react";
import {criarTarefa} from "@/lib/Tarefas";

export default function Form() {
  const [tarefas, setTarefas] = useState([]);
  const [texto, setTexto] = useState("");
  const faltam = tarefas.length;

  function adicionar(e) {
    e.preventDefault();
    try{
      criarTarefa(texto);

    }catch (error) {
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
            <span>{tarefa.texto}</span>
            <button
              className="B1"
              type="button"
              onClick={() => remover(tarefa.id)}
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