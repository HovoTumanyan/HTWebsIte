import { ProjectQuiz, FuturePlans } from './assets';
import ScoolAnim from './assets/School.json';
import FinanceAnim from './assets/Finance.json';
import DevelopmentAnim from './assets/Development.json';
import ManagerAnim from './assets/Manager.json';
import CarWashAnim from './assets/CarWash.json';
import MarketingAnim from './assets/Marketing.json';

import Lottie from 'react-lottie';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

import { SiExpress, SiMongodb, SiMysql } from 'react-icons/si';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaCircleNotch } from 'react-icons/fa';

const Slide = ({ animationData, height, width }) => {
  const [view, setView] = useState(false);
  const lottieRef = useRef(null);

  useEffect(() => {
    if (view) {
      lottieRef.current.play();
    } else {
      lottieRef.current.stop();
    }
  }, [view]);

  return (
    <motion.div onViewportEnter={() => setView(true)} onViewportLeave={() => setView(false)}>
      <Lottie
        ref={lottieRef}
        height={height}
        width={width}
        options={{
          animationData,
          loop: true,
          autoplay: false,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
          },
        }}
      />
    </motion.div>
  );
};

export const slides = [
  {
    journey: 'My short way',
    way: 'Study and working experience',
  },
  {
    year: '1998-2008',
    title: 'PRIMARY SCHOOL NO. 6 NAMED AFTER HAKOB KARAPENTS',
    animate: <Slide animationData={ScoolAnim} height={300} width={300} />,
  },
  {
    year: '2014',
    title: 'TELETRADE FINANCIAL TRAINING CENTER',
    animate: <Slide animationData={FinanceAnim} height={300} width={300} />,
  },
  {
    year: '2022-2023',
    title: 'SMART CODE DEVELOPMENT SCHOOL',
    animate: <Slide animationData={DevelopmentAnim} height={300} width={300} />,
  },
  {
    year: '2010-2011',
    title: 'SALES MANAGER',
    animate: <Slide animationData={ManagerAnim} height={300} width={300} />,
  },
  {
    year: '2012-2014',
    title: 'PRIVATE BUSINESS (CAR WASH STATION)',
    animate: <Slide animationData={CarWashAnim} height={300} width={300} />,
  },
  {
    year: '2012-2022',
    title: 'NETWORK BUSINESS SPECIALIST (QNET E-COMMERCE DIRECT SELLING), NETWORK MARKETING',
    animate: <Slide animationData={MarketingAnim} height={300} width={300} />,
  },
  {
    year: '',
    title: '',
    image: '',
  },
];

export const frontendSkills = [
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'React', icon: <FaReact /> },
];

export const backendSkills = [
  { name: 'Node.js', icon: <FaNodeJs />, study: <FaCircleNotch /> },
  { name: 'Express', icon: <SiExpress />, study: <FaCircleNotch /> },
  { name: 'MongoDB', icon: <SiMongodb />, study: <FaCircleNotch /> },
  { name: 'SQL', icon: <SiMysql />, study: <FaCircleNotch /> },
];

export const projectData = [
  {
    id: 0,
    title: 'Quiz (DEMO)',
    description: `Users can choose from various question categories, 
    test their knowledge, 
    and receive instant results. 
    The system offers ease of use with 
    an attractive interface and the
    ability to track progress`,
    version: 'Demo',
    avatarUrl: 'https://api.dicebear.com/7.x/miniavs/svg?seed=8',
    imageUrl: ProjectQuiz,
    url: 'https://quiz-t1.web.app/',
  },
  {
    id: 1,
    title: 'Educational Platform for Kids',
    description:
      'Interactive educational platform for children, offering engaging lessons, personalized learning plans, progress tracking, and a secure environment for learning.',
    avatarUrl: 'https://api.dicebear.com/7.x/miniavs/svg?seed=9',
    imageUrl: FuturePlans,
    url: '#!',
  },
  {
    id: 2,
    title: 'Online Course Platform',
    description:
      'Developing a website where users can take online courses on various topics, such as programming, design, marketing, and more. The platform will offer interactive lessons, quizzes, and certificates upon completion, providing a flexible learning experience for users',
    avatarUrl: 'https://api.dicebear.com/7.x/miniavs/svg?seed=9',
    imageUrl: FuturePlans,
    url: '#!',
  },
  {
    id: 3,
    title: 'Book Exchange Platform',
    description:
      'A website where users can swap books, leave reviews, and connect with new friends who share similar interests. This platform will encourage a community of book lovers, promoting the sharing of literature and fostering discussions around favorite reads.',
    avatarUrl: 'https://api.dicebear.com/7.x/miniavs/svg?seed=9',
    imageUrl: FuturePlans,
    url: '#!',
  },
];
