import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./Firebase";

const colecao = collection(db, "tarefas");

export async function criarTarefa(texto) {
    await addDoc(colecao, {
        texto,
        feita: false,
        criadaEm: serverTimestamp(),
    });
}