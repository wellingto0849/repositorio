import { useState } from "react";
import { criarTarefa } from "@/lib/Tarefas";

export default function Home() {
  const [texto, setTexto] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        if (!texto.trim()) { return; }

        try {
            await criarTarefa(texto);
            setTexto("");
        } catch (error) {
            console.error("Erro ao criar tarefa:", error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
                placeholder="Digite uma tarefa"
            />
            <button type="submit">Adicionar</button>
        </form>
    );
}