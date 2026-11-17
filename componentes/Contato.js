"use client";
import { useState } from "react";
import { criarContato } from "@/services/Contato";

async function enviar(e, nome, email, cpf, setAviso) {
  e.preventDefault();
  try {
    await criarContato(nome, email, cpf);
    setAviso("Enviado com sucesso!");
  } catch (erro) {
    setAviso(erro.message);
  }
}

export default function Contato() {
  const [aviso, setAviso] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");

  return (
    <form onSubmit={(e) => enviar(e, nome, email, cpf, setAviso)}>
      <input
        type="text"
        value={nome}
        onChange={(e) => (setNome(e.target.value), setAviso(`Obrigado, ${e.target.value}!`))}
        placeholder="Seu nome"
      />

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Seu email"
      />

      <input
        type="text"
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
        placeholder="Seu CPF"
      />
      <button type="submit">Enviar</button>
      <p>{aviso}</p>
    </form>
  );
}