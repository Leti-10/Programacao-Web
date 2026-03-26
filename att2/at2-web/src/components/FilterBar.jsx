export default function FilterBar({
  filterCategory,
  setFilterCategory,
  sortBy,
  setSortBy,
}) {
  return (
    <div className="filters">
      <select
        value={filterCategory}
        onChange={(e) => setFilterCategory(e.target.value)}
      >
        <option>Todas</option>
        <option>Trabalho</option>
        <option>Estudos</option>
        <option>Pessoal</option>
      </select>

      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="data">Ordenar por Data</option>
        <option value="prioridade">Ordenar por Prioridade</option>
      </select>
    </div>
  );
}