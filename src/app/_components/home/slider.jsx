import React, { useState } from 'react'
import Slider from '@mui/material/Slider'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const MySlider = ({ typo }) => {
 
  const [sliderValue, setSliderValue] = useState(0)
  const [firstUI, setFirstUI] = useState(45)
  const [secondUI, setSecondUI] = useState(396)
  const [price, setPrice] = useState(33)

  const handleSliderChange = (event, newValue) => {
    setFirstUI(newValue + 10)
    setPrice(newValue + 10)
    setSliderValue(newValue)
  }

  const marks = [
    {
      value: 0,
      label: '33€/Std.',
    },
    {
      value: 50,
      label: '',
    },
    {
      value: 100,
      label: '110€/Std.',
    },
  ]

  const formatLabel = (value) => {
    return `${value}€/Std.`
  }

  return (
    <>
      <style>
        {`
          .MuiSlider-track {
            background: #173968;
            background: linear-gradient(90deg, #1fb9e5, #173968);
            border: "none"
          }

          .MuiSlider-rail {
            border: "none"
            background-color: #ccc; /* Change the color of the rail if needed */
          }
        `}
      </style>
      <div className="h-[122px] flex flex-col justify-between py-2">
        <div className="my-1">
          <Box
            sx={{ position: 'relative', width: 460, marginLeft: 3, height: 10 }}
          >
            <Slider
              style={{ height: '12px' }}
              aria-label="Restricted values"
              value={sliderValue}
              onChange={handleSliderChange}
              valueLabelDisplay="off" // Turn off default tooltip
              marks={marks}
              color="#fff"
            />
            {/* Custom tooltip */}
            {!typo===false && (
              <Typography
                variant="body2"
                sx={{
                  position: 'absolute',
                  left: `calc(${sliderValue}% - 16px)`, // Position tooltip based on slider value
                  top: '-30px', // Adjust vertical position as needed
                  whiteSpace: 'nowrap',
                  pointerEvents: 'none', // Ensure tooltip doesn't interfere with slider interaction
                  fontSize: '18px', // Increase font size
                }}
              >
                {formatLabel(`${price}`)}
              </Typography>
            )}
          </Box>
        </div>
      </div>
     {!typo==false&& <>
      <div className="flex flex-col gap-3 my-4">
     <div className="flex justify-between mb-2">
       <div className="text-[#173968]">Honorar pro Stunde</div>
       <div className="text-[#173968]">{`${firstUI}€`}</div>
     </div>
     <div className="flex justify-between mb-2">
       <div className="text-[#173968]">
         Honorar für gesamte Dienstzeit (23h)
       </div>
       <div className="text-[#173968] text-2xl font-[600]">{`${secondUI}€`}</div>
     </div>
   </div>
   <hr />
   </>}
    </>
  )
}

export default MySlider
