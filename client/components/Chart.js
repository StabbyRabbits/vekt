import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
} from 'recharts';
import Title from './Title';

const hardcodeData = [
  { date: '2024-01-01', time: '01:00 AM', amount: 80 },
  { date: '2024-01-02', time: '02:00 AM', amount: 160 },
  { date: '2024-01-03', time: '03:00 AM', amount: 170 },
  { date: '2024-01-04', time: '04:00 AM', amount: 120 },
  { date: '2024-01-05', time: '05:00 AM', amount: 190 },
  { date: '2024-01-06', time: '06:00 AM', amount: 110 },
];

export default function Chart() {
    const theme = useTheme();
    const [data, setData] = useState(
      hardcodeData.map(item => {
        const dateConvert = new Date(`${item.date} ${item.time}`);
        const options = {
          weekday: 'short',
          month: 'numeric',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
        };
        const formattedDate = dateConvert.toLocaleString('en-US', options);
        return { dateTime: formattedDate, amount: item.amount };
      })
    );
  
  //   useEffect(() => {
  //     fetch('http://localhost:3000/api/homepage/bloodsugar')
  //       .then((response) => response.json())
  //       .then((apiData) => {
  //         const formattedData = apiData.map((item) => {
  //           const dateObject = new Date(item.date);
  //           const options = {
  //             weekday: 'short',
  //             month: 'numeric',
  //             day: 'numeric',
  //             hour: 'numeric',
  //             minute: 'numeric',
  //           };
  //           const formattedDate = dateObject.toLocaleString('en-US', options);
  //           return { time: formattedDate, amount: item.bloodSugar };
  //         });
  //         setData(formattedData);
  //       })
  //       .catch((error) => console.log('Error fetching data:', error));
  //   }, []);

  return (
    <React.Fragment>
      <Title>Blood Sugar</Title>
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
            dataKey= 'dateTime'
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
            // tickFormatter={(datetime) =>
            //   new Date(datetime).toLocaleTimeString('en-US', {
            //     hour: 'numeric',
            //     minute: 'numeric',
            //   })
            // }
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
       
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}

// import React, { useState, useEffect } from 'react';
// import { useTheme } from '@mui/material/styles';
// import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
// import Title from './Title';

// export default function BloodPressureChart() {
//   const theme = useTheme();
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:3000/api/homepage/bloodpressure') // Assuming you have a route for blood pressure
//       .then((response) => response.json())
//       .then((apiData) => {
//         const formattedData = apiData.map((item) => {
//           const dateObject = new Date(item.date);
//           const options = {
//             weekday: 'short',
//             month: 'numeric',
//             day: 'numeric',
//             hour: 'numeric',
//             minute: 'numeric',
//           };
//           const formattedDate = dateObject.toLocaleString('en-US', options);
//           return { time: formattedDate, systolic: item.sysPressure, diabolic: item.diaPressure };
//         });
//         setData(formattedData);
//       })
//       .catch((error) => console.log('Error fetching data:', error));
//   }, []);

//   return (
//     <React.Fragment>
//       <Title>Blood Sugar</Title>
//       <ResponsiveContainer>
//         <LineChart
//           data={data}
//           margin={{
//             top: 16,
//             right: 16,
//             bottom: 0,
//             left: 24,
//           }}
//         >
//           <XAxis
//             dataKey="time"
//             stroke={theme.palette.text.secondary}
//             style={theme.typography.body2}
//           />
//           <YAxis
//             stroke={theme.palette.text.secondary}
//             style={theme.typography.body2}
//           >
//             <Label
//               angle={270}
//               position="left"
//               style={{
//                 textAnchor: 'middle',
//                 fill: theme.palette.text.primary,
//                 ...theme.typography.body1,
//               }}
//             >
//               Blood Pressure
//             </Label>
//           </YAxis>
//           <Line
//             isAnimationActive={false}
//             type="monotone"
//             dataKey="systolic"
//             stroke={theme.palette.primary.main}
//             dot={false}
//             name="Systolic Blood Pressure"
//           />
//           <Line
//             isAnimationActive={false}
//             type="monotone"
//             dataKey="diabolic"
//             stroke={theme.palette.secondary.main}
//             dot={false}
//             name="Diabolic Blood Pressure"
//           />
//         </LineChart>
//       </ResponsiveContainer>
//     </React.Fragment>
//   );
// }
