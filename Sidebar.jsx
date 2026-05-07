import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 bg-black/30 backdrop-blur-xl border-r border-white/10 p-6 hidden md:block">
      <h1 className="text-3xl font-bold text-cyan-400">TaskVerse</h1>

      <div className="mt-10 flex flex-col gap-4">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/tasks">Tasks</Link>
      </div>
    </div>
  );
}

export default Sidebar;