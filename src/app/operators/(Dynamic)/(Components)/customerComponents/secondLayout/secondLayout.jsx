import React from 'react'
import './secondLayout.css'
import Select from '@mui/joy/Select'
import Option from '@mui/joy/Option'
//DatePicker imports
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'
import { useState } from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import ServiceModal from '@/app/operators/(components)/modals/ServiceModal'

//
import Form from 'react-bootstrap/Form'
import { useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import toast from 'react-hot-toast'
const SecondLayout = ({
  userId,
  type = 'text',
  name,
  label,
  value,
  onChange,
  surname,
  plant_number,
  street,
  house,
  post_code,
  location,
  state_id,
}) => {
  const [loading, setLoading] = useState(false)
  const currentUser = useSelector((state) => state.user.currenUser)
  // console.log(currentUser);
  const userAccessToken = currentUser?.accessToken
  const URL = process.env.NEXT_PUBLIC_BACK_END_API_URL
  const updateUserDetailsAPI = `${URL}/api//user/v1/update_furnishings/${userId}`
  const [isModalOneVisible, setIsModalOneVisible] = useState(false)
  const [listOfFederalStates, setListOfFederalStates] = useState([])
  const [data, setData] = useState({
    surname: surname || '',
    plant_number: plant_number || '',
    street: street || '',
    house: house || '',
    post_code: post_code || '',
    location: location || '',
    state_id: state_id || '',
  })
  const apiUrl = process.env.NEXT_PUBLIC_BACK_END_API_URL
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSelectChange = (option) => {
    setData({ ...data, federal_state: option })
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/v1/federal_states_list`)
        setListOfFederalStates(response.data.data) // Update the state with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [apiUrl])
  const toggleModalFunction = () => {
    if (isModalOneVisible === false) {
      setIsModalOneVisible(!isModalOneVisible)
    }
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    // Remove specified key-value pairs
    const config = {
      headers: {
        Authorization: `Bearer ${userAccessToken}`,
        'Content-Type': 'application/json', // Specify content type as JSON
      },
    }
    try {
      console.log(data)
      const responseTwo = await axios.patch(updateUserDetailsAPI, data, config)
      console.log(responseTwo)
      if ((responseTwo.data.message = 'Success')) {
        toast.success('Updated successfully')
      }
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/v1/federal_states_list`)
        setListOfFederalStates(response.data.data) // Update the state with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [apiUrl])

  const toggleModal = () => {
    setIsModalOneVisible(!isModalOneVisible)
  }
  return (
    <>
      <div className="header-containerst">
        <form className="second-containerst" onSubmit={handleFormSubmit}>
          <div className="top-info-container-dynamic my-3">
            <div className="font-[600]">Einrichtung</div>
          </div>
          <hr />
          <div className="top-info-container-dynamic my-3 pr-10">
            <div className="first-container">
              <span>Einzelpraxis</span>
              <span>KV Sitze insgesamt: 1</span>
            </div>
            <div className="first-container">
              <a
                href={`https://www.google.com/search?q=%20${'Erik'}%20${'Faller'}%20${'Karlsruhe'}`}
                target="_blank"
                className="text-blue-500 font-[600]"
              >
                Auf Google suchen
              </a>
            </div>
            <div className="">Einrichtung bereits verifiziert.</div>
          </div>
          <hr />
          {/* // */}
          <div className="row justify-content-between mt-4">
            <div className="col-lg-8 col-md-6 col-sm-12 mt-6">
              <div className="sub-container">
                <div className="entryarea">
                  <input
                    className="input-item-k"
                    type={'text'}
                    name={'surname'}
                    value={data.surname}
                    onChange={handleInputChange}
                    required
                    autoComplete="off"
                  />
                  <div className="labelline bg-transparent">{'Name'}</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mt-6">
              <div className="sub-container">
                <div className="entryarea">
                  <input
                    className="input-item-k"
                    type="text"
                    name={'plant_number'}
                    value={data.plant_number}
                    onChange={handleInputChange}
                    required
                    autoComplete="off"
                  />
                  <div className="labelline bg-transparent">
                    {'Betriebsstättennummer'}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="row justify-content-between">
            <div className="col-lg-8 col-md-6 col-sm-12 mt-[70px]">
              <div className="sub-container">
                <div className="entryarea">
                  <input
                    className="input-item-k"
                    type={'text'}
                    name={'street'}
                    value={data.street}
                    onChange={handleInputChange}
                    required
                    autoComplete="off"
                  />
                  <div className="labelline bg-transparent">{'Straße'}</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mt-[70px]">
              <div className="sub-container">
                <div className="entryarea">
                  <input
                    className="input-item-k"
                    type="text"
                    name={'house'}
                    value={data.house}
                    onChange={handleInputChange}
                    required
                    autoComplete="off"
                  />
                  <div className="labelline bg-transparent">{'Hausnummer'}</div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="row justify-content-between">
            <div className="col-lg-4 col-md-6 col-sm-12 mt-[70px]">
              <div className="sub-container">
                <div className="entryarea">
                  <input
                    className="input-item-k"
                    type="text"
                    name={'post_code'}
                    value={data.post_code}
                    onChange={handleInputChange}
                    required
                    autoComplete="off"
                  />
                  <div className="labelline bg-transparent">
                    {'Postleitzahl'}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-6 col-sm-12 mt-[70px]">
              <div className="sub-container">
                <div className="entryarea">
                  <input
                    className="input-item-k"
                    type={'text'}
                    name={'location'}
                    value={data.location}
                    onChange={handleInputChange}
                    required
                    autoComplete="off"
                  />
                  <div className="labelline bg-transparent">{'Ort'}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16">
            <div className="set z-50">
              <Select
                placeholder="All"
                className="seletedf"
                sx={{
                  width: 350,
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
                <Option
                  value={state_id}
                  onClick={() => handleSelectChange(state_id)}
                >
                  {state_id === 1 ? 'Berlin' : 'Lahore'}
                </Option>
                {listOfFederalStates.map((state, i) => {
                  return (
                    <React.Fragment key={i}>
                      <Option
                        value={state.id}
                        onClick={() => handleSelectChange(state.id)}
                      >
                        {state.title}
                      </Option>
                    </React.Fragment>
                  )
                })}
              </Select>
            </div>
          </div>
          {/* // */}
          <div className="button-containers">
            <div className="button-containers-alpha">
              <div
                className="btn-1 px-8 py-[12px] gap-2"
                onClick={toggleModalFunction}
              >
                <FaPlusCircle className="plus-icons" />
                <span>Neuen Dienst anlegen</span>
              </div>
            </div>
            <button className="btn-2">Speichern</button>
          </div>
        </form>
      </div>
      {isModalOneVisible ? (
        <ServiceModal clickFunctionProp={toggleModal} />
      ) : (
        ''
      )}
    </>
  )
}

export default SecondLayout
