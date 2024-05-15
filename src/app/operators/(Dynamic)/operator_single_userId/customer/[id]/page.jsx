'use client'
import React, { useEffect, useState } from 'react'

import SecondLayout from '../../../(Components)/customerComponents/secondLayout/secondLayout'
import FirstLayout from '../../../(Components)/customerComponents/firstLayout/firstLayout'
import ThirdLayout from '../../../(Components)/customerComponents/thirdLayout/thirdLayout'
import FourthLayout from '../../../(Components)/customerComponents/fourthLayout/FourthLayout'
import FifthLayout from '../../../(Components)/customerComponents/fifthLayout/FifthLayout'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { ClipLoader } from 'react-spinners'

const Page = ({ params }) => {
  const [userBasicDetails, setIsUserBasicDetails] = useState({})
  const [userBillingAddress, setUserBillingAddress] = useState({})
  const [userFurnishings, setUserFurnishings] = useState({})
  const [isUserData, setIsUserData] = useState(false)
  const userId = params.id
  const [isUserId, setIsUserId] = useState(false)
  const [loading, setLoading] = useState(false)
  const currentUser = useSelector((state) => state.user.currenUser)
  const userAccessToken = currentUser?.accessToken
  const URL = process.env.NEXT_PUBLIC_BACK_END_API_URL
  const fetchUserDetailAPI = `${URL}/api/user/v1/user_detail?user_id=${userId}`
  const updateUserDetailsAPI = `${URL}/api/user/v1/update_user_info/${userId}`
  useEffect(() => {
    setIsUserId(params.id !== '')
  }, [params.id])

  useEffect(() => {
    let fetchDataTimeout // Declare a variable to store the setTimeout reference
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await axios.get(fetchUserDetailAPI, {
          headers: { Authorization: `Bearer ${userAccessToken}` },
        })
        console.log(response)
        setUserBillingAddress(response.data.data.billingAddress)
        setIsUserBasicDetails(response.data.data.user_basic_details)
        setUserFurnishings(response.data.data.furnishings)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error)
        setLoading(false)
      }
    }
    if (userId) {
      setLoading(true)
      fetchData()
    }
  }, [userId, userAccessToken, fetchUserDetailAPI])
  console.log(userFurnishings)
  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center">
          <ClipLoader color="#36d7b7" />
        </div>
      ) : (
        userBasicDetails && (
          <>
            <FirstLayout
              userId={userId}
              title={userBasicDetails.title}
              first_name={userBasicDetails.first_name}
              last_name={userBasicDetails.last_name}
              email={userBasicDetails.email}
              land_line={userBasicDetails.land_line}
              cell_phone_1={userBasicDetails.cell_phone_1}
              birth_date={userBasicDetails.birth_date}
              cell_phone_2={userBasicDetails.cell_phone_2}
              fax_number={userBasicDetails.fax_number}
              customer_number={userBasicDetails.customer_number}
              id={userBasicDetails.id}
              created_at={userBasicDetails.created_at}
              // Pass other necessary props here
            />
            {userFurnishings && (
              <SecondLayout
                userId={userId}
                surname={userFurnishings.surname}
                plant_number={userFurnishings.plant_number}
                street={userFurnishings.street}
                house={userFurnishings.house}
                post_code={userFurnishings.post_code}
                location={userFurnishings.location}
                state_id={userFurnishings.state_id}
              />
            )}
            {userBillingAddress && (
              <ThirdLayout
                userId={userId}
                post_code={userBillingAddress.post_code}
                house={userBillingAddress.house}
                street={userBillingAddress.street}
                location={userBillingAddress.location}
              />
            )}
            <FifthLayout />

            <FourthLayout />
          </>
        )
      )}
    </>
  )
}

export default Page
