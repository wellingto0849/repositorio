import Cartao from "../componentes/Cartao"
import { projetos } from "../componentes/dados"
import Secao from "../componentes/Secao"
import Link from "next/link";

export default function Projetos(){
    return(
        <main>
        <div className="page-header">
            <Link href="/" className="voltar">Início</Link>
            <h1 className="page-title">Meus Projetos</h1>
        </div>
        <Secao titulo="Projetos">
        {projetos.map((projeto) => (
            <Cartao
              key={projeto.id}
              titulo={projeto.titulo}
              descricao={projeto.descricao}
              tecnologia={projeto.tecnologia} />
          ))}
        </Secao>
        </main>
    );
}