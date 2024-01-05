import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Draggable from 'react-draggable';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { InputAdornment } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';

function FoodLog(props) {
  const body = window.loginInfo;
  const username = body;
  console.log('username props: ', body);

  const [entryData, setEntryData] = useState({
    username: username,
    date: '',
    bloodSugar: '',
    sysPressure: '',
    diaPressure: '',
    time: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEntryData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('EntryData found at handleSubmit:', entryData);
    try {
      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(entryData),
      };

      const response = await fetch('http://localhost:3000/api/entry', options);
      console.log('Entry Posted successfully ', response);
      navigate('/homepage');
    } catch (error) {
      console.error('Error in front-end:', error.message);
    }
  };

  const saveEntryBtnStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '30px 70px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight: '10px',
    width: '400px',
    marginTop: '20px',
  };

  const closeBtnStyle = {
    backgroundColor: '#f44336',
    color: 'white',
    padding: '30px 70px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
    width: '400px',
  };

  const mealBtnStyle = {
    backgroundColor: '#f44336',
    color: 'white',
    padding: '20px 40px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
    width: '400px',
  };

  const today = new Date();

  return props.trigger ? (
    <Draggable>
      <div
        display="flex"
        className="entries-form-container"
        component="form"
        alingItems="center"
      >
        <form className="entries-form" onSubmit={handleSubmit}>
          <div className="entries" alignContent="center">
            <TextField
              type="time"
              name="time"
              value={entryData.time}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              type="date"
              name="date"
              value={entryData.date}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <InputLabel>Blood Sugar</InputLabel>
            <Input
              id="bloodSugar"
              type="text"
              name="bloodSugar"
              value={entryData.bloodSugar}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="standard"
            />

            <InputLabel htmlFor="sysPressure">Blood Pressure</InputLabel>
            <Input
              id="sysPressure"
              type="text"
              name="sysPressure"
              value={entryData.sysPressure}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="standard"
            />

            <InputLabel htmlFor="diaPressure">Dia Pressure</InputLabel>
            <Input
              id="diaPressure"
              type="text"
              name="diaPressure"
              value={entryData.diaPressure}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="standard"
            />

            <Button
              className="meal-log-button"
              style={mealBtnStyle}
              alignContent="center"
            >
              Meal Log
            </Button>
            <Button
              alingContent="center"
              className="save-entry-btn"
              type="submit"
              style={saveEntryBtnStyle}
            >
              Save Entry
            </Button>
            <Button
              className="popup-close-btn"
              onClick={() => props.setTrigger(false)}
              style={closeBtnStyle}
            >
              Close
            </Button>
            {props.children}
          </div>
        </form>
      </div>
    </Draggable>
  ) : (
    ''
  );
}

export default FoodLog;
