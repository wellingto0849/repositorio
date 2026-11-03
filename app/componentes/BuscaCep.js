"use client";
import { useState } from "react";

export default function BuscaCep() {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState(null);
  const [erro, setErro] = useState("");

  async function buscar(e) {
    e.preventDefault();
    setErro("");
    setEndereco(null);
    try {
      const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      if (!res.ok) throw new Error("CEP inválido");
      const dados = await res.json();
      if (dados.erro) throw new Error("CEP não existe");
      setEndereco(dados);
    } catch (err) {
      setErro(err.message);
    }
  }

  return (
    <form onSubmit={buscar}>
      <input value={cep} onChange={(e) => setCep(e.target.value)} placeholder="Digite o CEP" />
      <button type="submit">Buscar</button>
      {erro && <p style={{ color: "red" }}>{erro}</p>}
      {endereco && <p>{endereco.logradouro}, {endereco.localidade}</p>}
    </form>
  );
}