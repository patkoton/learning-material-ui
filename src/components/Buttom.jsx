import React from 'react'
import { Button } from '@mui/material/'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import top100Films from '../data'
import '../index.css';

const Buttom = () => {
  return (
    <div>
      <Button variant='contained' style={{margin: "50px 0px"}}>Hello!</Button>

      <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="See list of Movies to watch" />}
            />
    </div>
  )
}

export default Buttom
