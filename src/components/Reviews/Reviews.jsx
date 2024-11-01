import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiStarSmileFill } from 'react-icons/ri';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { reviews } from '../../data';
import './Reviews.css';


export default function Reviews({ isDarkMode, textAnimation }) {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); 

  
  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };

  const reviewsAnimation = {
    hidden: (direction) => ({
      opacity:0,
      x: direction > 0 ? (isMobile ? 350 : 900) : (isMobile ? -350 : -900),
    }),
    visible: {
      x: 0,
      opacity:1,
      transition: { duration: 0.5 },
    },
    exit: (direction) => ({
      opacity:0,
      x: direction < 0 ? (isMobile ? 350 : 900) : (isMobile ? -350 : -900),
      transition: { duration: 0.5 },
    }),
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);


    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="reviews"
    id='reviews-section'>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={textAnimation}
        viewport={{ once: true }}
        className={`reviews-box ${isDarkMode ? 'darkMode' : 'lightMode'}`}
      >
        <AnimatePresence initial={true} custom={direction} mode="popLayout">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={reviewsAnimation}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="review-slide"
          >
            <p>{reviews[currentIndex].description}</p>
            <div className="testimonial-author">
              <img
                src={reviews[currentIndex].img}
                alt={reviews[currentIndex].name}
                className="author-image"
              />
              <h4>{reviews[currentIndex].name}</h4>
            </div>
              <pre>{reviews[currentIndex].proffesia}</pre>
          </motion.div>
        </AnimatePresence>
        <div className="arrows">
          <FaArrowLeft onClick={handlePrev} className='arrow' />
          {currentIndex + 1}
          <FaArrowRight onClick={handleNext} className='arrow'/>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={textAnimation}
        viewport={{ once: true }}
        className={`about-reviews ${isDarkMode ? 'darkMode' : 'lightMode'}`}
      >
        <RiStarSmileFill size={25} style={{ padding: '5px' }} />
        <RiStarSmileFill size={25} style={{ padding: '5px' }} />
        <RiStarSmileFill size={25} style={{ padding: '5px' }} />
        <RiStarSmileFill size={25} style={{ padding: '5px' }} />
        <RiStarSmileFill size={25} style={{ padding: '5px' }} />
        <h1>
          <br />A few kind words from friends and acquaintances working in web development.
        </h1>
      </motion.div>
    </div>
  );
}
