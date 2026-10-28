import Cartao from "../../componentes/Cartao";
import { projetos } from "../../componentes/dados";

export default async function Projeto({ params }) {
 const { id } = await params;
 const projeto = projetos.find((p) => p.id === Number(id));
 return <h1> 
        {projeto.titulo}
        {projeto.descricao}
        {projeto.tecnologia}
        </h1>
}