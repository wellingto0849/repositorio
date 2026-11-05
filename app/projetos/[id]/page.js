import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projetos } from "../../componentes/dados";

async function Conteudo({ params }) {
    const { id } = await params;
    const projeto = projetos.find((item) => String(item.id) === id);

    if (!projeto) {
        notFound();
    }

    return (
        <main>
            <div className="page-header">
                <Link href="/projetos" className="voltar">Voltar para projetos</Link>
                <h1 className="page-title">{projeto.titulo}</h1>
            </div>
            <section className="secao">
                <p>{projeto.descricao}</p>
                <h2>Tecnologias</h2>
                <ul className="tecnologias">
                    {projeto.tecnologia.map((item) => (
                        <li key={`${projeto.id}-${item}`}>{item}</li>
                    ))}
                </ul>
            </section>
        </main>
    );
}

export default function Projeto({ params }) {
    return (
        <Suspense fallback={<p>Carregando...</p>}>
            <Conteudo params={params} />
        </Suspense>
    );
}