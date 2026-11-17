"use client";
import { useState } from "react";
import { consultarCep } from "@/services/Cep";

export default function BuscaCep() {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState(null);
  const [erro, setErro] = useState("");

  async function buscar(e) {
    e.preventDefault();
    setErro("");
    setEndereco(null);
    try {
      const dados = await consultarCep(cep);
      setEndereco(dados);
    } catch (err) {
      setErro(err.message);
    }
  }

  return (
    <form onSubmit={buscar}>
      <input
        value={cep}
        onChange={(e) => setCep(e.target.value)}
        placeholder="Digite o CEP"
        aria-label="CEP"
        className={erro ? "invalido" : undefined}
      />
      <button type="submit">Buscar</button>
      {erro && <p className="erro">{erro}</p>}
      {endereco && (
        <p>
          {endereco.logradouro}, {endereco.bairro}, {endereco.localidade} -{" "}
          {endereco.uf}
        </p>
      )}
    </form>
  );
}