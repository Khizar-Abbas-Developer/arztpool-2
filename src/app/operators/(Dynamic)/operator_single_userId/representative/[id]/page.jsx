'use client'
import React, { useEffect, useState } from 'react'
import SecondLayout from '@/app/operators/(Dynamic)/(Components)/representativeComponents/secondLayout/secondLayout'
import FirstLayout from '@/app/operators/(Dynamic)/(Components)/representativeComponents/firstLayout/firstLayout'
import ThirdLayout from '@/app/operators/(Dynamic)/(Components)/representativeComponents/thirdLayout/thirdLayout'
import FourthLayout from '@/app/operators/(Dynamic)/(Components)/representativeComponents/fourthLayout/FourthLayout'
import { useSelector } from 'react-redux'
import axios from 'axios'
import SecondLast from '@/app/operators/(Dynamic)/(Components)/representativeComponents/secondLast/SecondLast'
import SixthLayout from '@/app/operators/(Dynamic)/(Components)/representativeComponents/sixthLayout/SixthLayout'
import FouthLayout from '@/app/operators/(Dynamic)/(Components)/representativeComponents/fouthA/FouthA'
import SeventhLayout from '@/app/operators/(Dynamic)/(Components)/representativeComponents/fifthLayout/FifthLayout'
import NinethLayout from '@/app/operators/(Dynamic)/(Components)/representativeComponents/fourthLayout/FourthLayout'
import EighthLayout from '@/app/operators/(Dynamic)/(Components)/representativeComponents/secondLast/SecondLast'
import FifthLayout from '@/app/operators/(Dynamic)/(Components)/representativeComponents/FifthA/FifthA'
import { ClipLoader } from 'react-spinners'

const Page = ({ params }) => {
  const [userBasicDetails, setIsUserBasicDetails] = useState({})
  const [userAddresDetails, setIsUserAddressDetails] = useState({})
  const [userBillingAddress, setUserBillingAddress] = useState({})
  const [userBankDetails, setUserBankDetails] = useState({})
  const [userSpecializationDetails, setUserSpecializationDetails] = useState({})
  const [userInsuranceDetails, setUserInsuranceDetails] = useState({})
  const [memos, setMemos] = useState({})
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
    const fetchData = async () => {
      try {
        const response = await axios.get(fetchUserDetailAPI, {
          headers: { Authorization: `Bearer ${userAccessToken}` },
        })
        setIsUserBasicDetails(response.data.data.user_basic_details)
        setIsUserAddressDetails(response.data.data.userAddress)
        setUserBillingAddress(response.data.data.userBillingAddress)
        setUserBankDetails(response.data.data.userBank)
        setUserSpecializationDetails(response.data.data.userSpecilization)
        setUserInsuranceDetails(response.data.data.userInsurance)
        setMemos(response.data.data.userMemo)
        setLoading(false) // Move setLoading inside the try block to ensure it's set to false only after data retrieval
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
  console.log(userAddresDetails)
  return (
    <>
      {loading ? (
        <ClipLoader color="#36d7b7" />
      ) : (
        <>
          {userBasicDetails && (
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
            />
          )}

          {memos && <SecondLayout userId={userId} memos={memos.memos} />}
          {userAddresDetails && (
            <ThirdLayout
              userId={userId}
              city_name={userAddresDetails.city_name}
              street={userAddresDetails.street}
              post_code={userAddresDetails.post_code}
              house={userAddresDetails.house}
            />
          )}
          {/* //Billing Address */}
          {userBillingAddress && (
            <FouthLayout
              userId={userId}
              city_name={userBillingAddress.city_name}
              post_code={userBillingAddress.post_code}
              street={userBillingAddress.street}
              house={userBillingAddress.house}
            />
          )}
          {/* //Billing Address */}
          {userBankDetails && (
            <FifthLayout
              userId={userId}
              account_owner={userBankDetails.account_owner}
              iban={userBankDetails.iban}
              bank={userBankDetails.bank}
              bic={userBankDetails.bic}
              tex_number={userBankDetails.tex_number}
            />
          )}
          {userSpecializationDetails && (
            <SixthLayout
              userId={userId}
              specilization_name={userSpecializationDetails.specilization_name}
              status={userSpecializationDetails.status}
              url={userSpecializationDetails.url}
            />
          )}
          {userInsuranceDetails && (
            <SeventhLayout
              userId={userId}
              company_name={userInsuranceDetails.company_name}
              policy_number={userInsuranceDetails.policy_number}
              start_date={userInsuranceDetails.start_date}
              expiry_date={userInsuranceDetails.expiry_date}
              file_url={userInsuranceDetails.file_url}
            />
          )}
        </>
      )}

      {/* /////////////// */}
      {/* //ThirdLayotut */}
      {/* fifthLayout */}
      {/* fifthLayout */}
      <EighthLayout />
      {/* //FourthLayotut */}
      <NinethLayout />
      {/* //FourthLayotut */}
    </>
  )
}

export default Page
