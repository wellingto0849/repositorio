import Contato from "../componentes/Contato";
import Secao from "../componentes/Secao";
import Link from "next/link";
import BuscaCep from "../componentes/BuscaCep";

export default function Contatos(){
    return( 

        <main>
        <div className="page-header">
            <Link href="/" className="voltar">Início</Link>
            <h1 className="page-title">Entre em Contato</h1>
        </div>
        <Secao titulo="Contato">
        <Contato />
        <BuscaCep />
        </Secao>
        </main>
    );
}