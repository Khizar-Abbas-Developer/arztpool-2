import './thirdLayout.css'
import React from 'react'
//DatePicker imports
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'
import { useState } from 'react'
import { FaPlusCircle } from 'react-icons/fa'
//
import Form from 'react-bootstrap/Form'
import { useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import toast from 'react-hot-toast'

const ThirdLayout = ({ userId, city_name, house, post_code, street }) => {
  const [loading, setLoading] = useState(false)
  const currentUser = useSelector((state) => state.user.currenUser)
  const userAccessToken = currentUser?.accessToken
  const URL = process.env.NEXT_PUBLIC_BACK_END_API_URL
  const updateUserDetailsAPI = `${URL}/api/user/v1/update_address/${userId}`
  const [listOfFederalStates, setListOfFederalStates] = useState([])
  const [data, setData] = useState({
    street: street || '',
    house: house || '',
    post_code: post_code || '',
    city_name: city_name || '',
    address_type: 1,
  })
  const apiUrl = process.env.NEXT_PUBLIC_BACK_END_API_URL
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }
  // const handleFormSubmit = (e) => {
  //     e.preventDefault();
  //     console.log(data);
  // }
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

  const handleBirthDateChange = (newDate) => {
    setData({
      ...data,
      birth_date: newDate ? dayjs(newDate).format('DD-MM-YYYY') : '',
    })
  }
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value
    setData({ ...data, federal_state: selectedValue })
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${URL}/api/v1/federal_states_list`)
        setListOfFederalStates(response.data.data) // Update the state with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [URL])
  return (
    <>
      <div className="header-containerst">
        <form className="second-containerst" onSubmit={handleFormSubmit}>
          <div className="top-info-container-dynamic my-3">
            <div className="font-[600]">Rechnungsadresse</div>
          </div>
          <hr />
          {/*  */}
          <div className="row justify-content-between mt-[50px]">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="sub-container">
                <div className="entryarea">
                  <input
                    className="input-item-k"
                    type="text"
                    name={'city_name'}
                    value={data.city_name}
                    onChange={handleInputChange}
                    required
                    autoComplete="off"
                  />
                  <div className="labelline bg-transparent">{'Ort'}</div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12">
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
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="sub-container">
                <div className="entryarea">
                  <input
                    className="input-item-k"
                    type="text"
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
            <div className="col-lg-2 col-md-6 col-sm-12">
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
          {/* added by hammad */}

          {/* // */}
          <div className="flex justify-end mr-8 mt-16">
            <button className="py-[10px] px-[32px] rounded-md text-white bg-[#ED6D05] text-[16px] font-[500]">
              Speichern
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default ThirdLayout
