import React from 'react';
import { Chip, Paper, Stack, Typography } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const StatCardView = ({
  heading,
  value,
  increasePercentage,
  previousValue,
}) => {
  return (
    <Paper sx={{ p: 2, width: '100%' }}>
      <Typography variant="h5" fontWeight={'bold'}>
        {heading}
      </Typography>
      <Stack direction={'row'} sx={{ alignItems: 'flex-end', gap: 1, my: 1.8 }}>
        <Typography variant="h3" fontWeight={'bold'}>
          {value}
        </Typography>
        <Typography
          variant="h6"
          sx={(theme) => ({ color: theme.palette.brand.main })}
        >
          <ArrowUpwardIcon sx={{ fontSize: 14 }} />
          {`${increasePercentage}%`}
        </Typography>
      </Stack>
      <Chip label={previousValue + ' Yesterday'} variant="outlined" />
    </Paper>
  );
};

export default StatCardView;
