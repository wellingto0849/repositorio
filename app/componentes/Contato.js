"use client"
import { useState } from "react";
import { criarContato } from "@/lib/Contato";

async function enviar(e, nome, setAviso) {
  e.preventDefault();
  if (nome.trim().length < 3) {
    setAviso("Digite seu nome completo.");
    return;
  }
  try {
    await criarContato(nome);

    const res = await fetch("/api/contato", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome }),
    });
    if (!res.ok) throw new Error("Não foi possível enviar.");

    setAviso("Enviado com sucesso!");
  } catch (erro) {
    console.error("Erro ao enviar contato:", erro);
    setAviso("Não foi possível enviar. Tente novamente.");
  }
}

export default function Contato(){
 const [aviso, setAviso] = useState("");
 const [nome, setNome] = useState("");

  return (
   <form onSubmit={(e) => enviar(e, nome, setAviso)}>
      <input
        type="text"
        value={nome}
        onChange={(e) => (setNome(e.target.value), setAviso(`Obrigado, ${e.target.value}!`))}
        placeholder="Seu nome"
      />
      <button type="submit">Enviar</button>
      <p>{aviso}</p>
    </form>
  );

}