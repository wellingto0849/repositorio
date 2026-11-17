"use client";
import { useState } from "react";

export default function Cartao({ titulo, descricao, tecnologia }) {
  const tecnologias = Array.isArray(tecnologia) ? tecnologia : [];
  const [curtidas, setCurtidas] = useState(0);
  const [aberto, setAberto] = useState(false);

  return (
    <div className="card">
      <h3>{titulo}</h3>
      <p>{descricao}</p>

      <div className="acoes">
        <button className="B1" onClick={() => setCurtidas(curtidas + 1)}>
          ❤️ {curtidas} Curtidas
        </button>

        <button className="B2" onClick={() => setAberto(!aberto)}>
          {aberto ? "Ver Menos" : "Ver Detalhes"}
        </button>
      </div>

      {aberto && <ul className="tecnologias">
        {tecnologias.map((item) => (
        <li key={`${titulo}-${item}`}>{item}</li>
        ))}
      </ul>}
    </div>
  );
}