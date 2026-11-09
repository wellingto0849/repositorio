import { criarContato } from "@/lib/Contato";

export async function GET() {
  return Response.json({ mensagem: "Use POST para enviar o contato" });
}

export async function POST(request) {
  let dados;
  try {
    dados = await request.json();
  } catch {
    return Response.json({ erro: "Corpo da requisição inválido." }, { status: 400 });
  }

  const nome = typeof dados?.nome === "string" ? dados.nome.trim() : "";
  if (nome.length < 3) {
    return Response.json({ erro: "Informe um nome com pelo menos 3 caracteres." }, { status: 400 });
  }

  try {
    await criarContato(nome);
    return Response.json({ ok: true }, { status: 201 });
  } catch (erro) {
    console.error("Erro ao salvar contato:", erro);
    return Response.json({ erro: "Não foi possível salvar o contato." }, { status: 500 });
  }
}