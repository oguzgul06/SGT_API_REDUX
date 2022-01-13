import "./App.css";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Usercard from "./components/Usercard";

function App() {
  return (
    <div className="app">
      <Navbar />
      <motion.h1 initial={{ y: -200 }} animate={{ y: 0 }}>
        SGT API
      </motion.h1>
      <Usercard />
    </div>
  );
}

export default App;
