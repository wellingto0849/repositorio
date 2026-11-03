import { projetos } from "../projetos/contatos/dados.js";

export async function GET() {
  return Response.json(projetos);
}