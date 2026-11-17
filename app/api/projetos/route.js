import { projetos } from "@/lib/dados";

export async function GET() {
  return Response.json(projetos);
}