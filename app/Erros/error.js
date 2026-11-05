"use client";
import Link from "next/link";

export default function Erro({ reset }) {
  return (
    <section className="estado estado-pagina">
      <span className="codigo">500</span>
      <h1 className="page-title">Algo deu errado</h1>
      <p>Tivemos um problema ao carregar esta página.</p>
      <div className="estado-acoes">
        <button className="B2" onClick={() => reset()}>Tentar de novo</button>
        <Link href="/" className="voltar">Voltar para o início</Link>
      </div>
    </section>
  );
}