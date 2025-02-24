import React from 'react';
import { Box } from '@mui/material';
import OverviewTab from './pages/Tabs/Overview';

export const GOOGLE_CLIENT_ID =
  '685804882384-8oj31nindcuusb2e4ld0am58m89edve6.apps.googleusercontent.com';

export const employeesData = [
  {
    initials: 'KV',
    name: 'Kumar Vishwas',
    attendance:
      'Never Marked Attendance. This is a long text to demonstrate word wrapping in the attendance column.',
    location:
      'Palm Springs Plaza, Some City, Some State, India. This location text is intentionally long to wrap properly.',
  },
  {
    initials: 'MT',
    name: 'Mayur Tyagi',
    attendance:
      'Punched In: Today at 5:14 PM. Extra long attendance info to show wrapping over multiple lines.',
    location:
      'Vikas Marg, Some City, Some State. This is another long location description to test the layout.',
  },
  {
    initials: 'AB',
    name: 'Alice Brown',
    attendance:
      'Punched In: Yesterday at 10:00 AM with extra details included.',
    location: 'Main Street, Downtown, Metropolis, Some Country',
  },
  {
    initials: 'CD',
    name: 'Chris Doe',
    attendance: 'Punched In: Today at 8:00 AM',
    location: 'City Center, Office Block 5, Some City, Some State',
  },
  {
    initials: 'EF',
    name: 'Emma Frost',
    attendance:
      'Punched In: Today at 9:30 AM, additional information provided here.',
    location: 'Suburban Complex, Some City, Some State',
  },
  {
    initials: 'KV',
    name: 'Kumar Vishwas',
    attendance:
      'Never Marked Attendance. This is a long text to demonstrate word wrapping in the attendance column.',
    location:
      'Palm Springs Plaza, Some City, Some State, India. This location text is intentionally long to wrap properly.',
  },
  {
    initials: 'MT',
    name: 'Mayur Tyagi',
    attendance:
      'Punched In: Today at 5:14 PM. Extra long attendance info to show wrapping over multiple lines.',
    location:
      'Vikas Marg, Some City, Some State. This is another long location description to test the layout.',
  },
  {
    initials: 'AB',
    name: 'Alice Brown',
    attendance:
      'Punched In: Yesterday at 10:00 AM with extra details included.',
    location: 'Main Street, Downtown, Metropolis, Some Country',
  },
  {
    initials: 'CD',
    name: 'Chris Doe',
    attendance: 'Punched In: Today at 8:00 AM',
    location: 'City Center, Office Block 5, Some City, Some State',
  },
];

export const offDutyData = [
  {
    initials: 'RS',
    name: 'Rahul Singh',
    teamName: 'default',
    status:
      'Weekly Off with additional notes to show how it might wrap in the table cell if the text is long enough.',
  },
];

export const attendanceData = [
  {
    name: 'Bond',
    present: 0,
    absent: 1,
  },
  {
    name: 'default',
    present: 2,
    absent: 5,
  },
  {
    name: 'Om Bhagwan',
    present: 1,
    absent: 0,
  },
];

function TabPage({ tabTitle }) {
  return <Box sx={{ p: 2 }}>{tabTitle} content goes here</Box>;
}

export const tabsData = [
  {
    label: 'Overview',
    content: <OverviewTab />,
  },
  {
    label: 'Live Location',
    content: <TabPage tabTitle="Live Location" />,
  },
  {
    label: 'Timeline',
    content: <TabPage tabTitle="Timeline" />,
  },
  {
    label: 'Card View',
    content: <TabPage tabTitle="Card View" />,
  },
  {
    label: 'Compliance Status',
    content: <TabPage tabTitle="Compliance Status" />,
  },
  {
    label: 'Site Attendance',
    content: <TabPage tabTitle="Site Attendance" />,
  },
];
