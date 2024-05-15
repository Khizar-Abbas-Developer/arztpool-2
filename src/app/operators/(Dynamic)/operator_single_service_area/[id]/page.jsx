'use client'
import React, { useEffect, useState } from 'react'
import FirstLayout from '../../(ServiceAreaComponents)/ServiceAreaFirstLayout/FirstLayout'
import SecondLayout from '../../(ServiceAreaComponents)/ServiceAreaFourthLayout/ServiceAreaFouthLayout'
import ThirdLayout from '../../(ServiceAreaComponents)/ServiceAreaThirdLayout/ThirdLayout'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { ClipLoader } from 'react-spinners'
import FouthLayout from '../../(ServiceAreaComponents)/ServiceAreaFourthLayout/ServiceAreaFouthLayout'

const Page = ({ params }) => {
  const [serviceAreaInfo, setServiceAreaInfo] = useState({})
  const [drivingServiceArea, setDrivingServiceArea] = useState({})
  const [sittingServiceArea, setSittingServiceArea] = useState({})
  const userId = params.id
  const [isUserId, setIsUserId] = useState(false)
  const [loading, setLoading] = useState(false)
  const currentUser = useSelector((state) => state.user.currenUser)
  const userAccessToken = currentUser?.accessToken
  const URL = process.env.NEXT_PUBLIC_BACK_END_API_URL
  const fetchServicesAreaDetails = `${URL}/api/v1/service_area_details?id=${userId}`
  useEffect(() => {
    setIsUserId(params.id !== '')
  }, [params.id])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(fetchServicesAreaDetails, {
          headers: { Authorization: `Bearer ${userAccessToken}` },
        })
        console.log(response)
        setServiceAreaInfo(response.data.data.service_area_info)
        setDrivingServiceArea(response.data.data.driving_services)
        setSittingServiceArea(response.data.data.sitting_service)
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
  }, [userId, userAccessToken, fetchServicesAreaDetails])
  console.log(sittingServiceArea)
  return (
    <>
      {loading ? (
        <ClipLoader color="#36d7b7" />
      ) : (
        <>
          {serviceAreaInfo && (
            <FirstLayout
              userId={userId}
              description={serviceAreaInfo.description}
              expiry_date={serviceAreaInfo.expiry_date}
              federal_state={serviceAreaInfo.federal_state}
              federal_state_id={serviceAreaInfo.federal_state_id}
              start_date={serviceAreaInfo.start_date}
              status={serviceAreaInfo.status}
              surname={serviceAreaInfo.surname}
            />
          )}
          {sittingServiceArea && (
            <FouthLayout
              userId={userId}
              // surname={drivingServiceArea.surname}
              // abbreviation={drivingServiceArea.abbreviation}
              // coordinates={drivingServiceArea.coordinates}
              // legacy_id={drivingServiceArea.legacy_id}
              // comments={drivingServiceArea.comments}
              // confidential_comments={drivingServiceArea.confidential_comments}
              sittingServicesAreaArray={sittingServiceArea}
            />
          )}
          {drivingServiceArea && (
            <ThirdLayout
              userId={userId}
              // surname={drivingServiceArea.surname}
              // abbreviation={drivingServiceArea.abbreviation}
              // coordinates={drivingServiceArea.coordinates}
              // legacy_id={drivingServiceArea.legacy_id}
              // comments={drivingServiceArea.comments}
              // confidential_comments={drivingServiceArea.confidential_comments}
              drivingServicesAreaArray={drivingServiceArea}
            />
          )}
        </>
      )}
    </>
  )
}

export default Page
