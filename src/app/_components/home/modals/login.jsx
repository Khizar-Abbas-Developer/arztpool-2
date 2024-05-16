'use client'
import '../../../../assets/css/_components/home/modals/login.css'
import React, { useState } from 'react'
import axios from 'axios'
import {
  signInStart,
  singInSuccess,
  singInFailure,
} from '@/redux/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-hot-toast'
import Input from '@/app/_components/Input'
import { ImCross } from 'react-icons/im'
import Password from '@/app/_components/Password'
import { useRouter } from 'next/navigation'

const Sample = ({ clickFunctionProp }) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const url = process.env.NEXT_PUBLIC_BACK_END_API_URL
  const loginUrl = `${url}/api/user/v1/login`
  // State object to hold the values of the input fields
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  // Handler functions to update the state when input values change
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault()
    clickFunctionProp()

    if (data.email === '' || data.password === '') {
      if (data.email === '') {
        toast.error('Enter your email address!')
      } else if (data.password === '') {
        toast.error('Enter your password')
      }
    } else {
      try {
        dispatch(signInStart())
        const response = await axios.post(loginUrl, data)
        // console.log(response.data.message);
        router.push('/representative/dashboard')
        toast.success(response.data.message)
        console.log(response.data.data)
        dispatch(singInSuccess(response.data.data))
      } catch (error) {
        console.log(error)
        if (error && error.response) {
          console.error(error.response.data.message)
          toast.error(error.response.data.message)
          dispatch(singInFailure(error.response.data.message))
        } else {
          dispatch(singInFailure(error))
          dispatch(singInFailure())
          console.error('An unexpected error occurred:', error.message)
          toast.error('An unexpected error occurred')
          dispatch(singInFailure('An unexpected or Internal Server Error!'))
        }
      }
    }
  }
  return (
    <>
      <div
        className="modal-content"
        style={{ width: `100%`, backgroundColor: 'white' }}
      >
        <form
          className="modal-content-containerregister"
          onSubmit={handleSubmit}
        >
          <div className="heading-container">
            <h1>Willkommen!</h1>
          </div>
          <div className="flex flex-col">
            <div className="">
              <Input
                name="email"
                label={'E-Mail'}
                value={data.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="">
              <Password
                name="password"
                label={'Passwort'}
                value={data.password}
                onChange={handleInputChange}
              />
            </div>
            <div className="major-btn-and-input">
              <div className="checkInput-container">
                <input type="checkbox" />
                <span>Angemeldet bleiben</span>
              </div>
              <button type="submit" className="btn-1-s bg-orange-500">
                Anmelden
              </button>
            </div>
            <div className="forgot-containers">
              <span>Passwort vergessen?</span>
            </div>
          </div>
          <div className="ending-container">
            <hr />
            <div className="heading-text">Ich bin neu hier.</div>
            <div className="">
              Mit Erstellung eines Accounts stimmen Sie unseren{' '}
              <span className="special-spans">AGB</span> <span>und</span>
              <span className="special-spans">Datenschutzbestimmungen</span> zu.
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Sample
