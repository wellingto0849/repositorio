import { projetos } from "@/componentes/dados";

export function listarProjetos() {
  return projetos;
}

export function buscarProjetoPorId(id) {
  return projetos.find((projeto) => String(projeto.id) === String(id)) ?? null;
}