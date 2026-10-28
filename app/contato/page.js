import Contato from "../componentes/Contato";
import Secao from "../componentes/Secao";
import Link from "next/link";

export default function Contatos(){
    return( 

        <main>
        <div>
            <Link href="/"> Inicio </Link>
            <h1> Entre em Contato </h1>
        </div>
        <Secao titulo="Contato">
        <Contato />
        </Secao>
        </main>
    );
}