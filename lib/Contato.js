import { db } from "./Firebase";
import { collection,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
  addDoc} from "firebase/firestore";
export async function criarContato(nome) {
  await addDoc(collection(db, "contatos"), {
    nome,
    criadaEm: serverTimestamp(),
  });
}

export function ouvirContatos(callback) {
  const q = query(collection(db, "contatos"), orderBy("criadaEm", "asc"));
  return onSnapshot(q, (snapshot) => {
    const contatos = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    callback(contatos);
  });
}
