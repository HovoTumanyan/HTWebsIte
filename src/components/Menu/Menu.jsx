import { useState, useRef, useCallback } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';
import useOutsideClick from '../../customHooks/useOutsideClick';
import './Menu.css';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const selectorRef = useRef();

  const handleCloseMenu = useCallback(() => {
    if (isOpen) setIsOpen(false);
  }, [isOpen]);

  useOutsideClick(selectorRef, handleCloseMenu, isOpen);

  const scrollToSection = useCallback((sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  }, []);

  const menuItems = [
    { label: 'Hello', sectionId: 'hello-section' },
    { label: 'Languages I speak', sectionId: 'languages-i-speak-section' },
    { label: 'Full-Stack Development', sectionId: 'fullstack-section' },
    { label: 'My short way', sectionId: 'shortway-section' },
    { label: 'Projects', sectionId: 'projects-section' },
    { label: 'Working with me', sectionId: 'working-with-me-section' },
    { label: 'Reviews', sectionId: 'reviews-section' },
  ];

  const menuVariants = {
    hidden: { visibility: 'hidden', x:0 },
    visible: {
      visibility: 'visible',
      x: 5,
      transition: { duration: 0.4, delay: 0.4 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 10 },
  };

  const closeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  const textVariants = {
    initial: { opacity: 0, y: -5 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 5 },
    transition: { duration: 0.3 },
  };

  return (
    <div className='menu-container'>
      <div ref={selectorRef} className={`menu ${isOpen ? 'expanded' : ''}`} aria-expanded={isOpen}>
        <motion.p
          className="menu-button"
          style={{ cursor: !isOpen ? 'pointer' : '' }}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? 'Jump to title' : 'Menu'}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          key={isOpen ? 'Jump to title' : 'Menu'}
        >
          <AnimatePresence mode="wait">
            <motion.span
              {...textVariants}
              key={isOpen ? 'Jump to title' : 'Menu'}
            >
              {isOpen ? 'Jump to title' : 'Menu'}
            </motion.span>
          </AnimatePresence>
        </motion.p>

        {isOpen && (
          <>
            <motion.div
              className="close"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={closeVariants}
            >
              <IoIosCloseCircleOutline onClick={() => setIsOpen(false)} aria-label="Close menu" />
            </motion.div>

            <motion.div
              className="menu-list"
              initial="hidden"
              animate="visible"
              variants={menuVariants}
            >
              {menuItems.map(({ label, sectionId }) => (
                <motion.a
                  key={sectionId}
                  onClick={() => scrollToSection(sectionId)}
                  aria-label={`Scroll to ${label}`}
                  variants={itemVariants}
                >
                  {label} <FaArrowRight />
                </motion.a>
              ))}
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
}
