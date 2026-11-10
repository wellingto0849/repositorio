// app/api/contato/route.js
import { criarContato } from "@/lib/Contato";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ mensagem: "Use POST para enviar o contato" });
}

export async function POST(request) {
  let dados;
  try {
    dados = await request.json();
  } catch {
    return NextResponse.json(
      { erro: "Corpo da requisição inválido." },
      { status: 400 }
    );
  }

  const nome = typeof dados?.nome === "string" ? dados.nome.trim() : "";
  const email = typeof dados?.email === "string" ? dados.email.trim() : "";
  const cpf = typeof dados?.cpf === "string" ? dados.cpf.trim() : "";

  if (nome.length < 3) {
    return NextResponse.json(
      { erro: "Informe um nome com pelo menos 3 caracteres." },
      { status: 400 }
    );
  }
  if (!email.includes("@")) {
    return NextResponse.json({ erro: "E-mail inválido." }, { status: 400 });
  }
  if (!cpf) {
    return NextResponse.json({ erro: "CPF obrigatório." }, { status: 400 });
  }

  try {
    await criarContato(nome, email, cpf);
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (erro) {
    console.error("Erro ao salvar contato:", erro);
    return NextResponse.json(
      { erro: "Não foi possível salvar o contato." },
      { status: 500 }
    );
  }
}