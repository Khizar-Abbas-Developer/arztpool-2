'use client'
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import './serveral.css'
import { Select, MenuItem } from '@mui/material'
import 'react-datepicker/dist/react-datepicker.css'
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import MySlider from '@/app/_components/home/slider'
import { GoDatabase } from 'react-icons/go'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import FormControl from '@mui/material/FormControl'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import { IoCarOutline } from 'react-icons/io5'
import { GiOfficeChair } from 'react-icons/gi'

const Serveral=()=> {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [businesPerm, setBusinesPerm] = useState(false)
  const handleBusinessValue = () => {
    // Toggle the value of businesPerm from false to true or true to false
    setBusinesPerm(true)
  }
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="several_main">
        <div className="container">
        <h1 className="text-[18px] mt-5 mb-2  font-[600] text-[#20416E]">
          Zu vertretender Dienst
        </h1>
        <div className="row">
          <div className="col-md-4">
            <div className="set">
              <span className="label-span">Bundesland</span>
              <Select
                placeholder="Fahr- und Sitzdienste"
                className="selectedf"
                sx={{
                  width: 400,
                  height: 57,
                  border: 0,
                  borderBottom: '2px solid #C0C0C0',
                  borderRadius: 0,
                  marginTop: 1,
                  '&:focus-within': {
                    borderColor: '#ffbf00',
                  },
                  fontWeight: 600,
                }}
                onChange={handleBusinessValue}
              >
                <MenuItem value="business">Business</MenuItem>
                <MenuItem value="personal">Personal</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </div>
          </div>
          <div className="col-md-4">
            <div className="set">
              <span className="label-span">Bundesland</span>
              <Select
                placeholder="Fahr- und Sitzdienste"
                className="selectedf"
                sx={{
                  width: 400,
                  height: 57,
                  border: 0,
                  borderBottom: '2px solid #C0C0C0',
                  borderRadius: 0,
                  marginTop: 1,
                  '&:focus-within': {
                    borderColor: '#ffbf00',
                  },
                  fontWeight: 600,
                }}
                defaultValue="business"
                // IconComponent={() => (
                //   <InputAdornment position="start">
                //     {' '}
                //     {/* Change position to "start" */}
                //     <Icon>
                //       <IoCarOutline style={{ fontSize: '30px' }} />
                //     </Icon>
                //   </InputAdornment>
                // )}
              >
                <MenuItem value="business">
                  Allgemeinärztlicher Bereitschaftsdienst
                </MenuItem>
                <MenuItem value="personal">
                  Augenärztlicher Bereitschaftsdienst
                </MenuItem>
                <MenuItem value="other">
                  Kinderärztlicher Bereitschaftsdienst
                </MenuItem>
                <MenuItem value="other">
                  HNO-ärztlicher Bereitschaftsdienst
                </MenuItem>
                <MenuItem value="other">
                  Chirurgischer Bereitschaftsdienst
                </MenuItem>
                <MenuItem value="other">
                  Zahnärztlicher Bereitschaftsdienst
                </MenuItem>
              </Select>
            </div>
          </div>

          <div className="col-md-4">
            <div className="set">
              <span className="label-span">Bundesland</span>
              <Select
                placeholder="Fahr- und Sitzdienste"
                className="selectedf"
                sx={{
                  width: 400,
                  height: 57,
                  border: 0,
                  borderBottom: '2px solid #C0C0C0',
                  borderRadius: 0,
                  marginTop: 1,
                  '&:focus-within': {
                    borderColor: '#ffbf00',
                  },
                  fontWeight: 600,
                }}
              >
                <MenuItem value="business">Business</MenuItem>
                <MenuItem value="personal">Personal</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </div>
          </div>
        </div>
        {/* Render only when any business permisses is selected */}
        {businesPerm && (
          <>
            <div className="row mt-5">
              <p>
                Wählen Sie aus, ob Ihr gewünschtes Dienstgebiet ein Fahr- oder
                Sitzdienstgebiet ist
              </p>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label={
                          <div>
                            <IoCarOutline className="service-icon" />{' '}
                            Fahrdienste
                          </div>
                        }
                      />
                    </div>
                    <div className="col-md-6">
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label={
                          <div>
                            <GiOfficeChair className="service-icon" />{' '}
                            Sitzdienste
                          </div>
                        }
                      />
                    </div>
                  </div>
                </RadioGroup>
              </FormControl>
            </div>

            <p className="mt-2">
              Bitte wählen Sie das korrekte Fahrdienstgebiet oder die
              Bereitschaftspraxis durch anklicken aus.
            </p>

            <div className="service-category-detail">
              <div>
                <IoCarOutline style={{ fontSize: '30px' }} />
              </div>
              <div className="ml-5">
                Zwickau HBD mit verpflichtendem Fahrservice
              </div>
            </div>
            <p className="mt-5">
              Das richtige Dienstgebiet ist noch nicht dabei? Dann geben Sie
              diese entweder hier manuell ein oder fügen Sie eine Dienststätte
              in Ihrem Profil hinzu Zum Profil
            </p>
            
          </>
        )}

      
        <h1 className="text-[18px] mt-5 font-[600] text-[#20416E]">
          Rahmenbedingungen
        </h1>
        <div className="row">
          <div className="col-md-6">
            <span className="label-span">Dienstende</span>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DesktopDatePicker']}>
                <DesktopDatePicker
                  className="datep"
                  name="till_date"
                  format="DD MM YYYY"
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>

          <div className="col-md-6">
            <span className="label-span">Dienstende</span>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DesktopDatePicker']}>
                <DesktopDatePicker
                  className="datep"
                  name="till_date"
                  format="DD MM YYYY"
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-6 ">
            <div className="set">
              <span className="label-span">Bundesland</span>
              <Select
                placeholder="Fahr- und Sitzdienste"
                className="selectedf"
                sx={{
                  width: '100%',
                  height: 57,
                  border: 0,
                  borderBottom: '2px solid #C0C0C0',
                  borderRadius: 0,
                  marginTop: 1,
                  '&:focus-within': {
                    borderColor: '#ffbf00',
                  },
                  fontWeight: 600,
                }}
              >
                <MenuItem value="business">Business</MenuItem>
                <MenuItem value="personal">Personal</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </div>
          </div>

          <div className="col-md-6 ">
            <div className="set">
              <p>
                {' '}
                <GoDatabase className="service-icon" /> Honorar für Ihren
                Vertreter{' '}
              </p>
              <MySlider typo={false} />
            </div>
          </div>
        </div>
        <div className="row">
          <p>
            Hier können Sie Bewerbern für diesen Dienst wichtige
            (entscheidungsrelevante) Informationen mitteilen, die er schon VOR
            einer Bewerbung kennen sollte, wie bestimmte fachliche
            Voraussetzungen, die jeder Bewerber erfüllen muss. Bitte beachten
            Sie, dass die Informationen, die Sie hier ggf. eintragen öffentlich
            sind - bitte geben Sie hier keine Telefonnummern oder ähnliche
            Informationen ein. Hinweise zur Durchführung des Dienstes können Sie
            nach Wahl Ihres Vertreters direkt austauschen, diese brauchen Sie
            hier nicht eingeben.
          </p>
        </div>
        <div className="row mt-2 mb-3">
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-basic">Kommentar</InputLabel>
            <OutlinedInput
              id="outlined-basic"
              label="Outlined"
              sx={{ height: '150px', padding: '10px' }}
            />
          </FormControl>
        </div>

        <button className="btns-1 ">weiter</button>
      </div>
        
        </Box>
      </Modal>
    </div>
  );
}
export default Serveral