import { motion } from 'framer-motion';
import { FaFileDownload, FaEye, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

export default function SocialIcons({ CV, isDarkMode, iconAnimation }) {

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
      >
        <FaEye size={30} style={{ color: !isDarkMode && 'black' }} />
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
        <FaFileDownload size={30} style={{ color: !isDarkMode && 'black' }} />
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
        <SiGmail size={30} style={{ color: !isDarkMode && 'black' }} />
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
        <FaLinkedin size={30} style={{ color: !isDarkMode && 'black' }} />
      </motion.a>

      {/* <motion.a
        href="https://wa.me/+37433303354?text=Hello, I want to get in touch with you!"
        target="_blank"
        rel="noopener noreferrer"
        custom={5}
        initial="hidden"
        whileInView="visible"
        variants={iconAnimation}
        viewport={{ amount: 0.9, once: true }}
      >
        <FaWhatsapp size={30} style={{ color: !isDarkMode && 'black' }} />
      </motion.a> */}
    </div>
  );
}
