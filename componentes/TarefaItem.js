export default function TarefaItem({ tarefa, onAlternar, onRemover }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={Boolean(tarefa.feita)}
          onChange={onAlternar}
        />
        <span>{tarefa.texto}</span>
      </label>
      <button type="button" className="B1" onClick={onRemover}>
        Remover
      </button>
    </li>
  );
}