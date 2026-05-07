function XPBar() {
  return (
    <div className="bg-white/10 rounded-2xl p-6">
      <div className="flex justify-between mb-2">
        <span>XP Progress</span>
        <span>70%</span>
      </div>

      <div className="w-full bg-gray-700 rounded-full h-4">
        <div className="bg-cyan-400 h-4 rounded-full w-[70%]"></div>
      </div>
    </div>
  );
}

export default XPBar;