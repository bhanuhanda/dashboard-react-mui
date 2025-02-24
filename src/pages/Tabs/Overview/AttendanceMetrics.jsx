import { Box, Divider, Grid2, Paper, Typography } from '@mui/material';
import { Gauge, gaugeClasses } from '@mui/x-charts';
import React from 'react';

const AttendanceMetrics = () => {
  const punchedIn = 3;
  const totalEmployees = 9;

  return (
    <Grid2 container sx={{ height: '338px' }} spacing={2}>
      {/* stats - left column */}
      <Grid2 size={{ xs: 12, md: 6 }}>
        <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>
          Realtime Dashboard
        </Typography>

        {/* two columns layout in left column */}
        <Grid2 container spacing={2} size={12}>
          {/* chart column */}
          <Grid2 sx={{ flex: 1 }}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h5" fontWeight={'bold'}>
                Real Time Dashboard
              </Typography>
              <Divider />

              <Grid2 container sx={{ height: '100%', width: '100%' }}>
                <Gauge
                  height={243}
                  value={(punchedIn / totalEmployees) * 100}
                  startAngle={-90}
                  endAngle={90}
                  sx={(theme) => ({
                    [`& .${gaugeClasses.valueText}`]: {
                      fontSize: 14,
                      transform: 'translate(0px, -20px)',
                    },
                    [`& .${gaugeClasses.valueArc}`]: {
                      fill: theme.palette.brand.pink,
                    },
                  })}
                  text={() => `${totalEmployees}\nAll Employees`}
                />
              </Grid2>
            </Paper>
          </Grid2>

          {/* Right column: two stacked elements, occupies other half */}
          <Grid2 container sx={{ flex: 1 }} direction="column" spacing={2}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="subtitle1">Punched In (Inactive)</Typography>
              <Typography
                variant="h4"
                sx={{ mt: 1, py: 3, textAlign: 'center' }}
              >
                3
              </Typography>
            </Paper>
            <Paper sx={{ p: 2 }}>
              <Typography variant="subtitle1">Staffing Strength</Typography>
              <Typography
                variant="h4"
                sx={{ mt: 1, py: 3, textAlign: 'center' }}
              >
                0 / 0
              </Typography>
            </Paper>
          </Grid2>
        </Grid2>
      </Grid2>

      {/* attendance - right column */}
      <Grid2
        size={{ xs: 12, md: 6 }}
        sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}
      >
        <Typography
          variant="h4"
          sx={{ mb: 2, fontWeight: 'bold', textAlign: 'right' }}
        >
          Attendance Status
        </Typography>

        <Paper sx={{ p: 2, flex: 1 }}>
          <Typography variant="h5" fontWeight={'bold'}>
            Teamwise Attendance
          </Typography>
          <Divider />
          <Box sx={{ mt: 1 }}>
            <Typography variant="body2">Bond: 2</Typography>
            <Typography variant="body2">default: 0</Typography>
            <Typography variant="body2">Om Bhagwan: 1</Typography>
          </Box>
        </Paper>
      </Grid2>
    </Grid2>
  );
};

export default AttendanceMetrics;
