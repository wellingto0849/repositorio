export async function GET() {
  return Response.json({ mensagem: "Use POST para enviar o contato" });
}
export async function POST(request) {
  const dados = await request.json();
  if (!dados.nome) {
    return Response.json({ erro: "Nome obrigatório" }, { status: 400 });
  }
  console.log(dados);
  return Response.json({ ok: true }, { status: 200 });
  
}