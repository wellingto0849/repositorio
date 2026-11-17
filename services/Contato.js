import { db } from "@/lib/Firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export async function criarContato(nome, email, cpf) {
  const nomeLimpo = nome.trim();
  const emailLimpo = email.trim();
  const cpfLimpo = cpf.replace(/\D/g, "");

  if (nomeLimpo.length < 3) throw new Error("Digite seu nome completo.");
  if (!emailLimpo.includes("@")) throw new Error("Digite um e-mail válido.");
  if (cpfLimpo.length !== 11) throw new Error("O CPF deve ter 11 números.");

  try {
    await addDoc(collection(db, "contatos"), {
      nome: nomeLimpo,
      email: emailLimpo,
      cpf: cpfLimpo,
      criadoEm: serverTimestamp(),
    });
  } catch (erro) {
    console.error("Erro ao salvar contato:", erro);
    throw new Error("Não foi possível enviar. Tente novamente.");
  }
}