import { useTheme } from '@hooks';
import { Box, Tab, Tabs } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { ITabsContainer } from './types';

export const TabsContainer = ({ labels, children }: ITabsContainer) => {
  const [currentTab, setCurrentTab] = useState(0);

  const themeContext = useTheme();

  const handleTabChange = (event: ChangeEvent<{}>, tabIndex: number) => {
    setCurrentTab(tabIndex);
  };

  return (
    <>
      <Tabs
        value={currentTab}
        onChange={handleTabChange}
        sx={{
          marginTop: '10px',
          width: '100%',
          backgroundColor: themeContext.theme.colors.secundary,
          transition: '0.2s ease',
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
        }}
      >
        {labels.map((label, index) => (
          <Tab
            label={label}
            key={index}
            sx={{ color: themeContext.theme.colors.fontDefault, transition: '0.2s ease' }}
          />
        ))}
      </Tabs>
      {children.map((child, index) => (
        <Box
          key={index}
          sx={{
            width: '100%',
            display: currentTab === index ? 'flex' : 'none',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            backgroundColor: themeContext.theme.colors.secundary,
            color: themeContext.theme.colors.fontText,
            transition: '0.2s ease',
            borderBottomLeftRadius: '10px',
            borderBottomRightRadius: '10px',
          }}
        >
          {child}
        </Box>
      ))}
    </>
  );
};
