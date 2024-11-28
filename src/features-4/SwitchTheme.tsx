import React, { FC, useEffect } from 'react';
import { useTheme } from '../app-1/context/ThemeConext';
import { MaterialUISwitch } from '../shared-6/ui/SwitchIcon';

const SwitchTheme: FC = () => {
  const { toggleTheme, theme } = useTheme();

  const handleToggle = () => {
    toggleTheme();
  };

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <MaterialUISwitch
      checked={theme === 'dark'}
      onChange={handleToggle}
      inputProps={{ 'aria-label': 'theme switch' }}
    />
  );
};

export default SwitchTheme;
