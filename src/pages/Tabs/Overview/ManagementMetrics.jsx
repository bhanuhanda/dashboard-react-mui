import { Divider, Grid2, Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import StatCardView from '../../../components/StatCardView';
import { BarChart, Gauge, gaugeClasses, PieChart } from '@mui/x-charts';

const ManagementMetrics = () => {
  return (
    <Grid2>
      <Grid2 container spacing={2} mt={2} height={'300px'}>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Stack direction={'row'} gap={2}>
            <StatCardView
              heading={'Forms Filled'}
              value={0}
              increasePercentage={0}
              previousValue={0}
            />
            <StatCardView
              heading={'Photos Uploaded'}
              value={5}
              increasePercentage={400}
              previousValue={1}
            />
          </Stack>
          <Stack direction={'row'} mt={2} gap={2}>
            <StatCardView
              heading={'New Clients'}
              value={0}
              increasePercentage={0}
              previousValue={0}
            />
            <StatCardView
              heading={'Orders Submitted'}
              value={0}
              increasePercentage={0}
              previousValue={0}
            />
          </Stack>
        </Grid2>
        <Grid2
          size={{ xs: 12, md: 6 }}
          sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}
        >
          <Paper sx={{ p: 2, flex: 1 }}>
            <Typography variant="h5" fontWeight={'bold'}>
              Expense Overview
            </Typography>
            <Divider />
            <PieChart
              sx={{ mt: 2 }}
              series={[
                {
                  data: [
                    { id: 0, value: 100, label: 'Pending Expenses' },
                    { id: 1, value: 0, label: 'Approved Expenses' },
                    { id: 2, value: 0, label: 'Rejected Expenses' },
                    { id: 3, value: 0, label: 'Paid Out' },
                  ],
                },
              ]}
              height={243}
            />
          </Paper>
        </Grid2>
      </Grid2>
      <Grid2 container spacing={2} mt={2} height={'300px'}>
        <Grid2
          size={{ xs: 12, md: 6 }}
          sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}
        >
          <Paper sx={{ p: 2, flex: 1 }}>
            <Typography variant="h5" fontWeight={'bold'}>
              Daily Average Working Hours
            </Typography>
            <Divider />
            <BarChart
              xAxis={[
                { scaleType: 'band', data: ['group A', 'group B', 'group C'] },
              ]}
              series={[
                { data: [4, 3, 5] },
                { data: [1, 6, 3] },
                { data: [2, 5, 6] },
              ]}
              height={243}
            />
          </Paper>
        </Grid2>
        <Grid2
          size={{ xs: 12, md: 6 }}
          sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}
        >
          <Paper sx={{ p: 2, flex: 1 }}>
            <Typography variant="h5" fontWeight={'bold'}>
              Task Status Overview
            </Typography>
            <Divider />
            <Gauge
              height={243}
              value={100}
              startAngle={-90}
              endAngle={90}
              sx={(theme) => ({
                [`& .${gaugeClasses.valueText}`]: {
                  fontSize: 14,
                  fontWeight: 'bold',
                  transform: 'translate(0px, -20px)',
                },
                [`& .${gaugeClasses.valueArc}`]: {
                  fill: theme.palette.brand.pink,
                },
              })}
              text={() => `1\nTotal Tasks`}
            />
          </Paper>
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default ManagementMetrics;
