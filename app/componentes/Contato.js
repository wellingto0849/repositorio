"use client"
import { useState } from "react";

export default function Contato(){
const [nome, setNome] = useState("");
const [aviso, setAviso] = useState("");

async function enviar(e) {
 e.preventDefault();

 if (nome.trim().length < 3) {
 setAviso("Digite seu nome completo.");
 return
 }

 try {
   const res = await fetch("/api/contato", {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify({ nome }),
   });

   if (!res.ok) throw new Error("Não foi possível enviar.");

   setAviso(`Obrigado, ${nome}!`);
   setNome("");
 } catch (erro) {
   setAviso(erro.message);
 }
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