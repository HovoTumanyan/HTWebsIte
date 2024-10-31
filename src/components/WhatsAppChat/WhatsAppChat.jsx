import { useState,useRef,useCallback } from 'react';
import { motion,AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import useOutsideClick from '../../customHooks/useOutsideClick';
import './WhatsAppChat.css';

export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);

  const selectorRef = useRef(null);
  const handleCloseMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  useOutsideClick(selectorRef, handleCloseMenu, isOpen);

  const whatsappIconAnimaton = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,
      
      transition: { delay: 0.5, duration: 0.5 },
    },
  };

  const phoneNumber = '+37433303354';
  const defaultMessage = 'Hello! I would like to know more about your services.';

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="whatsapp-chat" ref={selectorRef}>
      {isOpen && (
        <div className="chat-box">
          <a
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Message on WhatsApp
          </a>
        </div>
      )}
      <motion.button
        initial="hidden"
        whileInView="visible"
        variants={whatsappIconAnimaton}
        viewport={{ once: false }}
        onClick={toggleChat}
        className="whatsapp-button"
      >
        <FaWhatsapp  />
      </motion.button>
    </div>
  );
}
