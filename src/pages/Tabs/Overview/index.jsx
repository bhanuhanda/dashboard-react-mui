import React from 'react';
import { Box, Grid2 } from '@mui/material';

import { employeesData, offDutyData } from '../../../constants';

import CustomTable from '../../../components/Table';
import AttendanceMetrics from './AttendanceMetrics';
import ManagementMetrics from './ManagementMetrics';

export default function OverviewTab() {
  return (
    <Box sx={{ p: 2 }}>
      {/* attendance metrics row */}
      <AttendanceMetrics />

      {/* tables row */}
      <Grid2 container spacing={2} sx={{ mt: 2 }}>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <CustomTable heading={'Employee (9)'} data={employeesData} />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <CustomTable heading={'Off Duty Employees (1)'} data={offDutyData} />
        </Grid2>
      </Grid2>

      {/* management metrics row */}
      <ManagementMetrics />
    </Box>
  );
}
