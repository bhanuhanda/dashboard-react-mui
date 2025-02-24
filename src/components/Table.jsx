import React from 'react';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Box,
  Button,
  TextField,
  Paper,
  Typography,
} from '@mui/material';

const CustomTable = ({ heading, data }) => {
  const columns = data && data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <Paper>
      <Box
        sx={{
          p: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box>
          <Typography variant="h5" fontWeight={'bold'}>
            {heading}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button variant="contained" size="small">
            All
          </Button>
          <Button variant="outlined" size="small">
            New
          </Button>
          <TextField size="small" placeholder="Search..." />
        </Box>
      </Box>
      <TableContainer sx={{ p: 2, height: '324px' }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              {columns.map((col) => (
                <TableCell key={col}>{col}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {columns.map((col) => (
                  <TableCell
                    key={col}
                    sx={{
                      whiteSpace: 'normal',
                      wordBreak: 'break-word',
                    }}
                  >
                    {row[col]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default CustomTable;
