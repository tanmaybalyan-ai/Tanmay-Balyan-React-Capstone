function StatsCard({ title, value }) {
  return (
    <div className="bg-white/10 border border-white/10 rounded-2xl p-6">
      <h2 className="text-gray-400">{title}</h2>
      <h1 className="text-4xl font-bold mt-2">{value}</h1>
    </div>
  );
}

export default StatsCard;