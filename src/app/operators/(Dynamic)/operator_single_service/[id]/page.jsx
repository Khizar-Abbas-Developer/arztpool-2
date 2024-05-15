"use client"
import React, { useEffect, useState } from 'react'
import FirstLayout from '../../(ServiceComponents)/firstLayout/FirstLayout';
import SecondLayout from '../../(ServiceComponents)/secondLayout/SecondLayout';
import ThirdLayout from '../../(ServiceComponents)/thirdLayout/ThirdLayout';
import FourthLayout from '../../(ServiceComponents)/fouthLayout/FourthLayout';
import FifthLayout from '../../(ServiceComponents)/fifthLayout/FifthLayout';
import SixthLayout from '../../(ServiceComponents)/sixthLayout/SixthLayout';
import SeventhLayout from '../../(ServiceComponents)/seventhLayout/seventhLayout';
import EightLayout from '../../(ServiceComponents)/eigthLayout/eigthLayout';
import NinethLayout from '../../(ServiceComponents)/ninethLayout.jsx/NinethLayout';
import TenthLayout from '../../(ServiceComponents)/tenthLayout/TenthLayout';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';

const Page = ({ params }) => {
    const [serviceInfo, setServiceInfo] = useState({});
    const [userInfo, setUserInfo] = useState({});
    const [userFurnishings, setUserFurnishings] = useState();
    const [isUserData, setIsUserData] = useState(false);
    const serviceId = params.id;
    const [isserviceId, setIsserviceId] = useState(false);
    const [loading, setLoading] = useState(false);
    const currentUser = useSelector((state) => state.user?.currentUser);
    const userAccessToken = currentUser?.accessToken;
    const URL = process.env.NEXT_PUBLIC_BACK_END_API_URL;
    const fetchUserDetailAPI = `${URL}/api/service/v1/service_details?id=${serviceId}`;
    useEffect(() => {
        setIsserviceId(params.id !== "");
    }, [params.id]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(fetchUserDetailAPI, {
                    headers: { Authorization: `Bearer ${userAccessToken}` }
                });
                console.log(response);
                setServiceInfo(response.data.data.service_info);
                setUserInfo(response.data.data.user_info)
                setUserFurnishings(response.data.data.user_furnishing)
                setTimeout(() => {
                    setLoading(false);
                }, 200);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };
        if (serviceId) {
            setLoading(true);
            fetchData();
        }
    }, [serviceId, userAccessToken, fetchUserDetailAPI]);
    return (
        <>
            {loading ? (
                <ClipLoader color="#36d7b7" />
            ) : (
                <>
                    {serviceInfo && (
                        <FirstLayout
                            serviceId={serviceId}
                            service_type={serviceInfo.service_type}
                            created_at={serviceInfo.created_at}
                            id={serviceInfo.id}
                            from_date={serviceInfo.from_date}
                            till_date={serviceInfo.till_date}
                            emergency_fee={serviceInfo.emergency_fee}
                            minimum_fee={serviceInfo.minimum_fee}
                            maximum_fee={serviceInfo.maximum_fee}
                        />
                    )}
                    {serviceInfo && (
                        <SecondLayout
                            serviceId={serviceId}
                            comments={serviceInfo.comments}
                            memos={serviceInfo.memos}
                        />
                    )}
                    {serviceInfo && (
                        <ThirdLayout
                            serviceId={serviceId}
                        />
                    )}
                    {
                        serviceInfo && (
                            <FourthLayout
                                serviceId={serviceId}
                                permanent_establishment={serviceInfo.permanent_establishment}
                                userFurnishings={userFurnishings}
                            />
                        )
                    }
                    {
                        userInfo && (
                            <FifthLayout
                                serviceId={serviceId}
                                userInfo={userInfo}
                                permanent_establishment={serviceInfo.permanent_establishment}
                            />
                        )
                    }
                    <SixthLayout />
                    <SeventhLayout />
                    <EightLayout />
                    {serviceInfo && (
                        <NinethLayout
                            serviceId={serviceId}
                            num_of_death_insured={serviceInfo.num_of_death_insured}
                            num_of_legal_insured={serviceInfo.num_of_legal_insured}
                            num_of_privately_insured={serviceInfo.num_of_privately_insured}
                            num_of_telephone_consultations={serviceInfo.num_of_telephone_consultations}
                        />
                    )
                    }
                    <TenthLayout />
                </>
            )}
        </>
    )
}

export default Page;