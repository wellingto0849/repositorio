import { Suspense } from "react";

async function Conteudo({ params }) {
    const { id } = await params;
    // ...aqui vai o resto (o find do projeto e o return com o JSX)
}

export default function Projeto({ params }) {
    return (
        <Suspense fallback={<p>Carregando...</p>}>
            <Conteudo params={params} />
        </Suspense>
    );
}