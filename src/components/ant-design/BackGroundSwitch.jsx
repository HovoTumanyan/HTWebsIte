import { useContext, useEffect } from 'react';
import { Space, Switch } from 'antd';
import { MdDarkMode, MdSunny } from 'react-icons/md';
import { ThemeContext } from '../AppProvider/ThemeProvider';

function BackGroundSwitch() {
    const { isDarkMode, setIsDarkMode } = useContext(ThemeContext)
    
  useEffect(() => {
    if (isDarkMode) {
      document.body.style.backgroundColor = '#242424';
      document.body.style.color = 'white';
    } else {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = '#242424';
    }
  }, [isDarkMode]);

  const toggleBackground = (checked) => {
    setIsDarkMode(checked);
  };

  return (
    <Space direction="vertical">
      <Switch
        checkedChildren={
          <MdDarkMode
            style={{
              fontSize: '24px',
              color: 'white',
              backgroundColor: isDarkMode ? 'black' : 'white',
              borderRadius: '100%',
            }}
          />
        }
        unCheckedChildren={
          <MdSunny
            style={{
              fontSize: '24px',
              color: 'black',
              backgroundColor: 'white',
              borderRadius: '100%',
            }}
          />
        }
        defaultChecked={isDarkMode}
        onChange={toggleBackground}
        style={{
          backgroundColor: '#e8e8e8',
        }}
      />
    </Space>
  );
}

export default BackGroundSwitch;
