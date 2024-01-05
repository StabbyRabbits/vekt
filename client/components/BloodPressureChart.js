import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';





const hardcodedData = [
    { date: '2024-01-02', time: '01:00 AM', systolic: 120, diastolic: 100 },
    { date: '2024-01-03', time: '02:00 AM', systolic: 140, diastolic: 86 },
    { date: '2024-01-04', time: '03:00 AM', systolic: 130, diastolic: 100 },
    { date: '2024-01-05', time: '06:00 AM', systolic: 160, diastolic: 70 },
    { date: '2024-01-06', time: '07:00 AM', systolic: 160, diastolic: 70 },
    { date: '2024-01-07', time: '08:00 AM', systolic: 160, diastolic: 70 },
  ];


export default function BloodPressureChart() {
  const theme = useTheme();
  const [data, setData] = useState(hardcodedData);

  useEffect(() => {
    const formattedData = hardcodedData.map((item) => {
      const dateTime = new Date(`${item.date} ${item.time}`);
      const options = {
        weekday: 'short',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      };
      const formattedDateTime = dateTime.toLocaleString('en-US', options);
      return { dateTime: formattedDateTime, systolic: item.systolic, diastolic: item.diastolic };
    });

    setData(formattedData);
  }, []);

  return (
    <React.Fragment>
      <Title>Blood Pressure</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="dateTime"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
           <XAxis
            dataKey="date"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
  
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="systolic"
            stroke={theme.palette.primary.main}
            dot={false}
            name="Systolic Blood Pressure"
          />
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="diastolic"
            stroke={theme.palette.secondary.main}
            dot={false}
            name="diastolic Blood Pressure"
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}