import KanbanBoard from "../components/tasks/KanbanBoard";

function TaskBoard() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <h1 className="text-4xl font-bold mb-6">Task Board</h1>
      <KanbanBoard />
    </div>
  );
}

export default TaskBoard;