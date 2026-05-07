import Sidebar from "../components/common/Sidebar";
import Navbar from "../components/common/Navbar";
import StatsCard from "../components/dashboard/StatsCard";
import XPBar from "../components/dashboard/XPBar";
import ProgressChart from "../components/dashboard/ProgressChart";

function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-6 grid gap-6">
          <div className="grid md:grid-cols-3 gap-4">
            <StatsCard title="XP Points" value="2400" />
            <StatsCard title="Level" value="12" />
            <StatsCard title="Daily Streak" value="9 Days" />
          </div>

          <XPBar />
          <ProgressChart />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;