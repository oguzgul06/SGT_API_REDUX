import React from "react";
import "./Navbar.css";
import DnsIcon from "@mui/icons-material/Dns";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <div className="navbar">
      <motion.div
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        whileHover={{ scale: 1.1 }}
        className="navbar__left"
      >
        <DnsIcon />
        <h2>BİLGE</h2>
      </motion.div>

      <motion.div
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        whileHover={{ scale: 1.1 }}
        className="navbar__right"
      >
        <AdminPanelSettingsIcon />
      </motion.div>
    </div>
  );
}

export default Navbar;
