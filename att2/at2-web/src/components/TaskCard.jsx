export default function TaskCard({ task, onToggle, onDelete }) {

  const priorityClass = {
    Alta: "alta",
    Média: "media",
    Baixa: "baixa",
  };

  return (
    <div
      className={`task-card ${priorityClass[task.priority]}`}
      style={{
        opacity: task.completed ? 0.6 : 1,
        textDecoration: task.completed ? "line-through" : "none",
      }}
    >
      <strong>{task.name}</strong>

      <div>
        📅 {task.date}
      </div>

      <div>
        🏷️ {task.category}
      </div>

      <div>
        ⭐ {task.priority}
      </div>

      <button onClick={() => onToggle(task.id)}>
        {task.completed ? "Desfazer" : "Concluir"}
      </button>

      <button
        onClick={() => onDelete(task.id)}
        style={{ marginTop: "6px", background: "#ff8c8c" }}
      >
        Excluir
      </button>

    </div>
  );
}