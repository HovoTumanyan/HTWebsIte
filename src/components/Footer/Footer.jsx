import { motion } from "framer-motion";
import { useContext } from "react";
import { MenuContext } from "../AppProvider/MenuProvider";
import "./Footer.css";

export default function Footer({ setIsWhatsAppVisible }) {
  const { setShowMenu } = useContext(MenuContext);

  return (
    <motion.footer
      className="footer"
      onViewportEnter={() => setShowMenu(false)}
      onViewportLeave={() => setShowMenu(true)}
    >
      <motion.div
        className="current-year"
        onViewportEnter={() => setIsWhatsAppVisible(false)}
        onViewportLeave={() => setIsWhatsAppVisible(true)}
      >
        <p>© 2024 Hovo Tumanyan</p>
      </motion.div>
      <div className="links">
        <a
          href="https://www.facebook.com/TumanyanHovo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>{" "}
        <a
          href="https://www.linkedin.com/in/hovo-tumanyan-b50341247/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>{" "}
        <a
          href="https://t.me/HovoTumanyan"
          target="_blank"
          rel="noopener noreferrer"
        >
          Telegram
        </a>
      </div>

      <div className="creator">
        <p>Designed by Me (Inspired). Built by Me.</p>{" "}
      </div>
    </motion.footer>
  );
}
