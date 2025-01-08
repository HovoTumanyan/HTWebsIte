import { motion } from "framer-motion";
import { FaFileDownload, FaEye, FaLinkedin,FaGithub  } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { logEvent } from "../../analytics";

export default function SocialIcons({ CV, isDarkMode, iconAnimation }) {
  const handleViewResumeClick = () => {
    logEvent("click", "Resume", "View Resume", 1);
  };

  return (
    <div className="social-icons">
      <motion.a
        href={CV}
        target="_blank"
        rel="noopener noreferrer"
        title="View resume"
        custom={1}
        initial="hidden"
        whileInView="visible"
        variants={iconAnimation}
        viewport={{ amount: 0.9, once: true }}
        onClick={handleViewResumeClick}
      >
        <FaEye size={30} style={{ color: !isDarkMode && "black" }} />
      </motion.a>

      <motion.a
        href={CV}
        download="Hovo_Tumanyan_Resume.pdf"
        title="Download resume"
        custom={2}
        initial="hidden"
        whileInView="visible"
        variants={iconAnimation}
        viewport={{ amount: 0.9, once: true }}
      >
        <FaFileDownload size={30} style={{ color: !isDarkMode && "black" }} />
      </motion.a>

      <motion.a
        href="https://mail.google.com/mail/?view=cm&to=hovotumanyan@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        custom={3}
        initial="hidden"
        whileInView="visible"
        variants={iconAnimation}
        viewport={{ amount: 0.9, once: true }}
      >
        <SiGmail size={30} style={{ color: !isDarkMode && "black" }} />
      </motion.a>

      <motion.a
        href="https://www.linkedin.com/in/hovo-tumanyan-b50341247/"
        target="_blank"
        rel="noopener noreferrer"
        custom={4}
        initial="hidden"
        whileInView="visible"
        variants={iconAnimation}
        viewport={{ amount: 0.9, once: true }}
      >
        <FaLinkedin size={30} style={{ color: !isDarkMode && "black" }} />
      </motion.a>

      <motion.a
        href="https://github.com/HovoTumanyan"
        target="_blank"
        rel="noopener noreferrer"
        custom={4}
        initial="hidden"
        whileInView="visible"
        variants={iconAnimation}
        viewport={{ amount: 0.9, once: true }}
      >
        <FaGithub size={30} style={{ color: !isDarkMode && "black" }} />
      </motion.a>
    </div>
  );
}
