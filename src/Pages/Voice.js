import React from 'react';
import IconButton from '@mui/material/IconButton';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import { assetsImages } from '../Constant/images';

function Voice() {
  return (
    <div className='row justify-content-center align-items-center voice '>
      
      
          
      <div className='row justify-content-center voice'>
          <IconButton >
      
            <KeyboardVoiceIcon  
            
              style={{ fill: '#0072ea' ,fontSize:"50px"}}
            />
        </IconButton>
    </div> 
   
    </div>
  )
}

export default Voice;