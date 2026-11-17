export async function buscarCep(cep) {
  let resposta;
  try {
    resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  } catch {
    throw new Error("Sem conexão. Verifique sua internet e tente novamente.");
  }
  if (!resposta.ok) throw new Error("Não foi possível consultar o CEP.");
  return resposta.json();
}