import Cabecalho from "./componentes/Cabecalho";
import Cartao from "./componentes/Cartao";
import Secao from "./componentes/Secao";
import { projetos } from "./componentes/dados";
import Contato from "./componentes/Contato"
import Form from "./componentes/List"
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <nav>
        <Link href="/">Início | </Link>
        <Link href="/projetos">Projetos | </Link>
        <Link href="/contato">Contato</Link>
      </nav>

      <Cabecalho />

      <Secao titulo="Sobre mim">
        <p>Estudo desenvolvimento web e crio interfaces funcionais, claras e modernas.</p>
      </Secao>

      <Secao titulo="Projetos">
        <div className="container">
          {projetos.map((projeto) => (
            <Cartao
              key={projeto.id}
              titulo={projeto.titulo}
              descricao={projeto.descricao}
              tecnologia={projeto.tecnologia} />
          ))}
        </div>
      </Secao>

      <Secao titulo="Contato">
        <Contato />
      </Secao>

      <Secao titulo="Lista De Trefas">
          <Form />
      </Secao>

    </main>
  );
}