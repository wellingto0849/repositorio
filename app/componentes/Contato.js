"use client"
import { useState } from "react";

export default function Contato(){
const [nome, setNome] = useState("");
const [aviso, setAviso] = useState("");

function enviar(e) {
 e.preventDefault();

 if (nome.trim().length < 3) {
 setAviso("Digite seu nome completo.");
 return
 }

 setAviso(`Obrigado, ${nome}!`);
 setNome("");
}

return (
    <form onSubmit={enviar}>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Seu nome"
      />
      <button type="submit">Enviar</button>
      <p>{aviso}</p>
    </form>
  );
}