import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Lottie from 'react-lottie';

import {
  ProjectQuiz,
  FuturePlans,
  GorAReview,
  KarenTReview,
  DianaTReview,
  GorMReview,
  Discous,
  ResponsiveDesign,
  BestPractices,
  PersonalizedApproach,
  MelPReview
} from './assets';

import ScoolAnim from './assets/School.json';
import FinanceAnim from './assets/Finance.json';
import DevelopmentAnim from './assets/Development.json';
import ManagerAnim from './assets/Manager.json';
import CarWashAnim from './assets/CarWash.json';
import MarketingAnim from './assets/Marketing.json';

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


export const getSteps = (t) =>  [
  {
    title:  t('WorkingWithMe.title1'),
    description:
    t('WorkingWithMe.description1'),
  },
  {
    process: ResponsiveDesign,
  },
  {
    title:  t('WorkingWithMe.title2'),
    description:
    t('WorkingWithMe.description2'),
  },
  {
    process: PersonalizedApproach,
  },
  {
    title:  t('WorkingWithMe.title3'),
    description:
    t('WorkingWithMe.description3'),

  },
  {
    process: BestPractices,
  },

  {
    title:  t('WorkingWithMe.title4'),
    description:
    t('WorkingWithMe.description4'),

  },
  {
    process: Discous,
  },
];

export const reviews = [
  {
    description:
      'Hovo is a goal-oriented person who achieves his goals. He is responsible and very smart in his field. He will be able to turn your dreams into reality.',
    name: 'Gor A .',
    proffesia: ' Full-Stack Developer',
    img: GorAReview,
  },
  {
    description:
      'I had the opportunity to work with this man, and I want to say that he works great in a team. There are no unsolved problems for him, and he does it with love, which, to me, is the most important quality of a good programmer.',
    name: 'Karen T .',
    proffesia: ' Front-End Developer',
    img: KarenTReview,
  },
  {
    description:
      'I can say that he is one of the most responsible and talented front-end developers I have worked with. He not only solves tasks quickly but also offers truly high-quality solutions. He always keeps up with current technologies and approaches, which makes our project look modern and function flawlessly. As a full-stack developer, I appreciate that I can rely on the front end—everything is done thoroughly and with attention to detail.',
    name: 'Gor M .',
    proffesia: ' Full-Stack Developer',
    img: GorMReview,
  },
  {
    description:
      'I had a great experience working with Hovo. He was highly responsive and always ensured that the UI/UX was implemented accurately. His attention to detail, especially in maintaining the design system, was impressive. He was proactive in suggesting solutions for improving user interactions and resolving technical constraints without compromising the design vision. Looking forward to collaborating again!',
    name: 'Diana T .',
    proffesia: ' UI/UX Designer',
    img: DianaTReview,
  },
  {
    description:
      'I had the chance to work with him, and it was a great experience! He’s easygoing, reliable, and always puts in the effort to get things done the right way. He’s a quick learner and doesn’t shy away from tackling new challenges.Would definitely work with him again.',
    name: 'Mel P .',
    proffesia: 'Photojournalist/Linguist',
    img: MelPReview,
  },
];

export const menuItems = [
  { label: 'Hello', sectionId: 'hello-section' },
  { label: 'Languages I speak', sectionId: 'languages-i-speak-section' },
  { label: 'Full-Stack Development', sectionId: 'fullstack-section' },
  { label: 'My short way', sectionId: 'shortway-section' },
  { label: 'Projects', sectionId: 'projects-section' },
  { label: 'Working with me', sectionId: 'working-with-me-section' },
  { label: 'Reviews', sectionId: 'reviews-section' },
];
