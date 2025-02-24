import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';

import { tabsData } from '../constants';

export default function Dashboard() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', p: 2 }}>
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        textColor="inherit"
        indicatorColor="primary"
      >
        {tabsData.map((tab, index) => (
          <Tab key={index} label={tab.label} />
        ))}
      </Tabs>
      <Box sx={{ mt: 2 }}>
        {tabsData[tabValue] && tabsData[tabValue].content}
      </Box>
    </Box>
  );
}
