import Link from "next/link";

export default function NotFound() {
  return (
    <section className="estado estado-pagina">
      <span className="codigo">404</span>
      <h1 className="page-title">Página não encontrada</h1>
      <p>O endereço que você abriu não existe ou foi movido.</p>
      <div className="estado-acoes">
        <Link href="/" className="voltar">Voltar para o início</Link>
      </div>
    </section>
  );
}