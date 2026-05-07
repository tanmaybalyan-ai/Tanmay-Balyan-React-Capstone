import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", xp: 20 },
  { day: "Tue", xp: 50 },
  { day: "Wed", xp: 40 },
  { day: "Thu", xp: 80 },
  { day: "Fri", xp: 60 },
];

function ProgressChart() {
  return (
    <div className="bg-white/10 rounded-2xl p-6 h-[350px]">
      <h1 className="text-2xl font-bold mb-4">
        Weekly Productivity
      </h1>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="xp" stroke="#22d3ee" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ProgressChart;