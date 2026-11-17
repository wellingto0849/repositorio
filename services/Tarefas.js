import { db } from "@/lib/Firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

const colecao = collection(db, "tarefas");

export async function criarTarefa(texto) {
  const limpo = texto.trim();
  if (!limpo) throw new Error("Escreva a tarefa.");
  if (limpo.length > 200) throw new Error("Máximo de 200 letras.");

  await addDoc(colecao, {
    texto: limpo,
    feita: false,
    criadaEm: serverTimestamp(),
  });
}

export function ouvirTarefas(aoMudar) {
  const consulta = query(colecao, orderBy("criadaEm", "asc"));
  return onSnapshot(consulta, (snapshot) => {
    aoMudar(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
  });
}

export function alternarTarefa(id, feita) {
  return updateDoc(doc(db, "tarefas", id), { feita: !feita });
}

export function removerTarefa(id) {
  return deleteDoc(doc(db, "tarefas", id));
}