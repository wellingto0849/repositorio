"use client";
import { useEffect, useState } from "react";
import {
  criarTarefa,
  ouvirTarefas,
  alternarTarefa,
  removerTarefa,
} from "@/services/Tarefas";
import TarefaItem from "./TarefaItem";

export default function ListaTarefas() {
  const [texto, setTexto] = useState("");
  const [tarefas, setTarefas] = useState([]);
  const [erro, setErro] = useState("");

  useEffect(() => {
    const parar = ouvirTarefas(setTarefas);
    return () => parar();
  }, []);

  async function aoEnviar(e) {
    e.preventDefault();
    setErro("");
    try {
      await criarTarefa(texto);
      setTexto("");
    } catch (err) {
      setErro(err.message);
    }
  }

  return (
    <div>
      <form onSubmit={aoEnviar}>
        <input
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Digite uma tarefa"
          aria-label="Nova tarefa"
        />
        <button type="submit">Adicionar</button>
        {erro && <p className="erro">{erro}</p>}
      </form>

      <ul className="lista-tarefas">
        {tarefas.map((tarefa) => (
          <TarefaItem
            key={tarefa.id}
            tarefa={tarefa}
            onAlternar={() => alternarTarefa(tarefa.id, tarefa.feita)}
            onRemover={() => removerTarefa(tarefa.id)}
          />
        ))}
      </ul>
    </div>
  );
}