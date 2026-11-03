import { projetos } from "../../componentes/dados";

export async function GET() {
  return Response.json(projetos);
}