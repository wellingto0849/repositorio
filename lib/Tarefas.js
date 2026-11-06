import {
  collection,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "./Firebase";

export async function criarTarefa(texto) {
  await addDoc(collection(db, "tarefas"), {
    texto,
    feita: false,
    criadaEm: serverTimestamp(),
  });
}

export function ouvirTarefas(callback) {
  const q = query(collection(db, "tarefas"), orderBy("criadaEm", "asc"));
  return onSnapshot(q, (snapshot) => {
    callback(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
  });
}

export async function marcarTarefa(id, feita) {
  await updateDoc(doc(db, "tarefas", id), { feita });
}

export async function alternarTarefa(id, feita) {
    await updateDoc(doc(db, "tarefas", id), {
    feita: !feita,
  });
}

export async function removerTarefa(id) {
    await deleteDoc(doc(db, "tarefas", id));
}