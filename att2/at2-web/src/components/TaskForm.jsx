import React, { useState } from "react";

export default function TaskForm({ onAdd }) {

  const [name, setName] = useState("");
  const [category, setCategory] = useState("Estudos");
  const [priority, setPriority] = useState("Média");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !date) {
      alert("Preencha todos os campos");
      return;
    }

    onAdd({ name, category, priority, date });

    setName("");
    setDate("");
  };

  return (
    <div className="card">

      <h2 className="letras">
        Nova tarefa
      </h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Nome da tarefa"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Estudos</option>
          <option>Trabalho</option>
          <option>Pessoal</option>
        </select>

 <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option>Alta</option>
          <option>Média</option>
          <option>Baixa</option>
        </select>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <button type="submit">
          Adicionar tarefa
        </button>

      </form>

    </div>
  );
}