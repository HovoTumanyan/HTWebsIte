import { projectData } from '../../data';
import { motion } from 'framer-motion';
import { MoreOutlined, EyeOutlined } from '@ant-design/icons';
import { Card, Row, Col } from 'antd';
import { useState } from 'react';

export default function Projects({ isDarkMode, textAnimation }) {
  const { Meta } = Card;
  const [expandedProject, setExpandedProject] = useState(null);

  const handleProjectClick = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  const handleIconClick = (url) => {
    if (url && url !== '#!') {
      window.open(url, '_blank');
    } else {
      console.log('No valid URL available for this project');
    }
  };

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={textAnimation}
        viewport={{ once: true }}
        className={`projects ${isDarkMode ? 'darkMode' : 'lightMode'}`}
        id='projects-section'
      >
        <Row gutter={[16, 16]}>
          {projectData.map((project, index) => (
            <Col key={project.id} xs={24} sm={12} md={8}>
              <div
                className={`project-card ${
                  expandedProject === project.id ? 'project-expanded' : ''
                }`}
              >
                {/* Обертываем Card в motion.div */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={textAnimation}
                  viewport={{ once: true }}
                >
                  <Card
                    style={{ backgroundColor: '#242424' }}
                    className="custom-class"
                    cover={<img alt={project.title} src={project.imageUrl} />}
                    actions={[
                      <EyeOutlined
                        title="View project"
                        style={{
                          fontSize: '20px',
                          color: 'white',
                          cursor: project.url && project.url !== '#!' ? 'pointer' : 'not-allowed',
                          opacity: project.url && project.url !== '#!' ? 1 : 0.5,
                          pointerEvents: project.url && project.url !== '#!' ? 'auto' : 'none',
                        }}
                        onClick={() => handleIconClick(project.url)}
                      />,
                      <MoreOutlined
                        title="View details"
                        style={{
                          fontSize: '20px',
                          color: 'white',
                          cursor:
                            project.description && project.description !== ''
                              ? 'pointer'
                              : 'not-allowed',
                          opacity: project.description && project.description !== '' ? 1 : 0.5,
                          pointerEvents:
                            project.description && project.description !== '' ? 'auto' : 'none',
                        }}
                        onClick={() => handleProjectClick(project.id)}
                      />,
                    ]}
                  >
                    <Meta title={project.title} />
                  </Card>
                </motion.div>

                <div className="project-description" onClick={() => setExpandedProject(null)}>
                  <p>{project.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </motion.div>
    </>
  );
}
