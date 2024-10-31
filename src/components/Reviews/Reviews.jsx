import { RiStarSmileFill } from 'react-icons/ri';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GorAReview,KarenTReview,DianaTReview,GorMReview } from '../../assets';

import './Reviews.css';

export default function Reviews({ isDarkMode, textAnimation }) {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); 

  const reviews = [
    {
      description:
        'Hovo is a goal-oriented person who achieves his goals. He is responsible and very smart in his field. He will be able to turn your dreams into reality.',
      name: 'Gor A.',
      proffesia: ' Full-Stack Developer',
      img: GorAReview,
    },{
      description:
        'I had the opportunity to work with this man, and I want to say that he works great in a team. There are no unsolved problems for him, and he does it with love, which, to me, is the most important quality of a good programmer.',
      name: 'Karen T.',
      proffesia: ' Front-End Developer',
      img: KarenTReview,
    },
    {
      description:
        'I can say that he is one of the most responsible and talented front-end developers I have worked with. He not only solves tasks quickly but also offers truly high-quality solutions. He always keeps up with current technologies and approaches, which makes our project look modern and function flawlessly. As a full-stack developer, I appreciate that I can rely on the front end—everything is done thoroughly and with attention to detail.',
      name: 'Gor M.',
      proffesia: ' Full-Stack Developer',
      img: GorMReview,
    },{
      description:
        'I had a great experience working with Hovo. He was highly responsive and always ensured that the UI/UX was implemented accurately. His attention to detail, especially in maintaining the design system, was impressive. He was proactive in suggesting solutions for improving user interactions and resolving technical constraints without compromising the design vision. Looking forward to collaborating again!',
      name: 'Diana T.',
      proffesia: ' UI/UX Designer',
      img: DianaTReview,
    },
    {
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis tempora architecto amet molestias quisquam voluptas nam reprehenderit fuga ad. Non neque sint alias, magnam dignissimos magni, facilis voluptas hic, exercitationem aut officia ex eum voluptatem!',
      name: 'Michael B.',
      proffesia: '',
      img: 'https://via.placeholder.com/50',
    },{
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis tempora architecto amet molestias quisquam voluptas nam reprehenderit fuga ad. Non neque sint alias, magnam dignissimos magni, facilis voluptas hic, exercitationem aut officia ex eum voluptatem!',
      name: 'Anna L.',
      proffesia: '',
      img: 'https://via.placeholder.com/50',
    },
  ];
  


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
