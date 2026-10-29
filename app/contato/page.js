import Contato from "../componentes/Contato";
import Secao from "../componentes/Secao";
import Link from "next/link";

export default function Contatos(){
    return( 

        <main>
        <div className="page-header">
            <Link href="/" className="voltar">Início</Link>
            <h1 className="page-title">Entre em Contato</h1>
        </div>
        <Secao titulo="Contato">
        <Contato />
        </Secao>
        </main>
    );
}