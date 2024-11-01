import { motion } from 'framer-motion';
import { Card, Row, Col } from 'antd';
import { steps } from '../../data';
import './WorkingWithMe.css';

export default function WorkingWithMe({ isDarkMode, textAnimation, setIsWhatsAppVisible }) {
  return (
    <motion.div
      className="working-with-me"
      id="working-with-me-section"
      onViewportEnter={() => setIsWhatsAppVisible(true)}
    >
      <Row gutter={[16, 16]}>
        {steps.map((step, index) => (
          <Col key={index} xs={24} sm={12} md={12}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={textAnimation}
              viewport={{ once: true }}
            >
              <Card className={`custom-card ${isDarkMode ? 'darkMode' : 'lightMode'}`}>
                {step.title && <h1>{step.title}</h1>}
                {step.description && <p>{step.description}</p>}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0, filter: 'grayscale(100%)' }}
                  whileInView={{ scale: 1, opacity: 1, filter: 'none' }}
                  transition={{
                    scale: { duration: 0.4, ease: 'easeOut' },
                    opacity: { duration: 0.4, ease: 'easeOut' },
                    filter: { delay: 0.4, duration: 0.4, ease: 'easeOut' },
                  }}
                  viewport={{ once: true }}
                  className="work-image"
                >
                  {step.process && <img src={step.process} alt="Process Image" />}
                </motion.div>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </motion.div>
  );
}
