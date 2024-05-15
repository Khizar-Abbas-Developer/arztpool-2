import React, { useEffect, useState } from 'react'
import './FifthA.css'
// import "./Input.css";
import { IoMdCloseCircle } from 'react-icons/io'
import Input from '../Input/Input'
import moment from 'moment'
//DatePicker imports
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'
import { useSelector } from 'react-redux'
import axios from 'axios'
import toast from 'react-hot-toast'
import { ClipLoader } from 'react-spinners'

const FifthLayout = ({
  userId,
  account_owner,
  iban,
  bank,
  bic,
  tex_number,
  name,
  label,
  value,
  onChange,
  type = 'text',
}) => {
  const [loading, setLoading] = useState(false)
  const currentUser = useSelector((state) => state.user?.currentUser)
  // console.log(currentUser);
  const userAccessToken = currentUser?.accessToken
  // console.log(userId);
  const URL = process.env.NEXT_PUBLIC_BACK_END_API_URL
  const updateUserDetailsAPI = `${URL}/api/user/v1/update_user_bank_details/${userId}`
  const [data, setData] = useState({
    account_owner: account_owner || '',
    bank: bank || '',
    bic: bic || '',
    iban: iban || '',
    tex_number: tex_number || '',
  })
  const date = data.created_at
  // Format the date using moment.js
  const formattedDateToShow2 = moment(date).format('MMMM DD, YYYY')
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }
  const handleUpdateForm = async (e) => {
    e.preventDefault()
    console.log(data)
    const config = {
      headers: {
        Authorization: `Bearer ${userAccessToken}`,
        'Content-Type': 'application/json', // Specify content type as JSON
      },
    }
    try {
      const responseTwo = await axios.patch(updateUserDetailsAPI, data, config)
      console.log(responseTwo)
      if (responseTwo.data.success === true) {
        toast.success('Updated successfully')
      } else {
        if (responseTwo.data.success === false) {
          toast.error("Can't update user")
        } else {
          toast.error('Internal Server Error!')
        }
      }
    } catch (error) {
      console.error(error)
    }
  }

  const handleBirthDateChange = (newDate) => {
    const formattedDate = newDate ? dayjs(newDate).format('YYYY-MM-DD') : '' // Format the date as needed
    setData({
      ...data,
      birth_date: formattedDate,
    })
  }
  // {{localhost3}}user/v1/user_detail?user_id=10
  return (
    <>
      {loading ? (
        <>
          <ClipLoader color="#36d7b7" />
        </>
      ) : (
        <>
          <div className="header-containerst">
            <form className="second-containerst" onSubmit={handleUpdateForm}>
              <div className="top-info-container-dynamic">
                <p className="text-[18px] font-[600]">
                  Bankverbindung & Steuernummer
                </p>
              </div>
              {/* // */}
              <div className="row justify-content-between mt-6">
                <div className="col-lg-6 col-md-6 col-sm-12 mt-6">
                  <div className="sub-container" style={{ width: '700px' }}>
                    <div className="entryarea">
                      <input
                        className="input-item-k"
                        type={'text'}
                        name={'account_owner'}
                        value={data.account_owner}
                        onChange={handleInputChange}
                        required
                        autoComplete="off"
                      />
                      <div className="labelline bg-transparent">
                        {'Kontoinhaber'}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 mt-6">
                  <div className="sub-container" style={{ width: '700px' }}>
                    <div className="entryarea">
                      <input
                        className="input-item-k"
                        type="text"
                        name={'iban'}
                        value={data.iban}
                        onChange={handleInputChange}
                        required
                        autoComplete="off"
                      />
                      <div className="labelline bg-transparent">{'IBAN'}</div>
                    </div>
                  </div>
                </div>

                {/* 2nd Container of input fields */}
                <div className="col-lg-6 col-md-6 col-sm-12 mt-20">
                  <div className="sub-container" style={{ width: '700px' }}>
                    <div className="entryarea">
                      <input
                        className="input-item-k"
                        type="text"
                        name={'bank'}
                        value={data.bank}
                        onChange={handleInputChange}
                        required
                        autoComplete="off"
                      />
                      <div className="labelline bg-transparent">{'Bank'}</div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 mt-20">
                  <div className="sub-container" style={{ width: '700px' }}>
                    <div className="entryarea">
                      <input
                        className="input-item-k"
                        type="text"
                        name={'bic'}
                        value={data.bic}
                        onChange={handleInputChange}
                        required
                        autoComplete="off"
                      />
                      <div className="labelline bg-transparent">{'BIC'}</div>
                    </div>
                  </div>
                </div>
                {/* 3rd Container of input fields */}
                <div className="col-lg-6 col-md-6 col-sm-12 mt-20">
                  <div className="sub-container" style={{ width: '700px' }}>
                    <div className="entryarea">
                      <input
                        className="input-item-k"
                        type="text"
                        name={'tex_number'}
                        value={data.tex_number}
                        onChange={handleInputChange}
                        required
                        autoComplete="off"
                      />
                      <div className="labelline bg-transparent">
                        {'Steuernummer'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* // */}
              <div className="flex justify-end mr-8 mt-10">
                <button className="py-[10px] px-[32px] rounded-md text-white bg-[#ED6D05] text-[16px] font-[500]">
                  Speichern
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  )
}

export default FifthLayout
