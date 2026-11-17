import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { buscarCep } from "@/lib/ViaCep";
import { db } from "@/lib/Firebase";

export async function consultarCep(cep) {
  console.log("consultarCep chamada com:", cep); // remover depois do teste

  const digitos = cep.replace(/\D/g, "");
  if (digitos.length !== 8) throw new Error("CEP inválido. Deve conter 8 dígitos.");

  const dados = await buscarCep(digitos);
  if (dados.erro) throw new Error("CEP não encontrado.");

  try {
    await addDoc(collection(db, "ceps"), {
      cep: digitos,
      dados,
      criadoEm: serverTimestamp(),
    });
  } catch (erro) {
    console.error("Erro ao salvar CEP:", erro);
    throw new Error("Não foi possível salvar o CEP. Tente novamente.");
  }

  return dados;
}