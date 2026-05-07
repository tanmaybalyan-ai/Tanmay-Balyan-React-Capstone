function KanbanBoard() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-white/10 rounded-2xl p-4">
        <h1 className="text-2xl font-bold mb-4">Todo</h1>
      </div>

      <div className="bg-white/10 rounded-2xl p-4">
        <h1 className="text-2xl font-bold mb-4">In Progress</h1>
      </div>

      <div className="bg-white/10 rounded-2xl p-4">
        <h1 className="text-2xl font-bold mb-4">Completed</h1>
      </div>
    </div>
  );
}

export default KanbanBoard;