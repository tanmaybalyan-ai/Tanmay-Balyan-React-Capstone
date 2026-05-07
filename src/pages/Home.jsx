import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 to-cyan-950 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 text-center shadow-2xl max-w-2xl"
      >
        <h1 className="text-6xl font-bold text-white">
          🚀 TaskVerse AI
        </h1>

        <p className="text-gray-300 mt-6 text-lg">
          Premium Gamified AI Productivity Platform
        </p>

        <button
          onClick={() => navigate("/dashboard")}
          className="mt-8 bg-cyan-500 hover:bg-cyan-400 px-8 py-4 rounded-2xl text-white font-bold transition"
        >
          Get Started
        </button>
      </motion.div>
    </div>
  );
}

export default Home;