'use client'
import { ImCross } from 'react-icons/im'
import React, { useEffect, useState } from 'react'
import "../../css/registerType.css";
// import '@/assets/css/_components/home/modals/registerType.css';
import Input from '@/app/_components/Input'
import Modal2 from '@/app/_components/home/modals/registrationTypeText'
import Sample from './login'
import Link from 'next/link'

const Modal = ({ clickFunctionProp }) => {
  const [modalOne, setModalOne] = useState(true);
  const [modalTwo, setModalTwo] = useState(false);
  const [modalVisible, setModalVisible] = useState(true) // Controls visibility of first modal
  const [modalRegisterVisible, setModalRegisterVisible] = useState(false) // Controls visibility of second modal

  // Function to show the second modal when "Registrieren" button is clicked
  const showRegisterModal = () => {
    // Hide the first modal and show the second modal
    setModalOne(false);
    setModalTwo(true);
  }

  // Function to handle closing Modal2 and resetting Modal1 visibility
  const handleModal2Close = () => {
    setModalRegisterVisible(false)
    setModalVisible(false) // Reset visibility of Modal1
  }
  return (
    <>
      {modalVisible && (
        <>
          <div className="modal-container">
            <div className="modal-content" style={{ width: `${modalOne ? "40%" : "70%"}` }}>
              <span className="close" onClick={clickFunctionProp}>
                <span>Schließen</span>
                <ImCross className="cross-icon" />
              </span>
              {/* {hide ? ( */}
              <div style={{ display: `${modalOne ? "block" : "none"}` }}>
                <Sample clickFunctionProp={clickFunctionProp} />
                <div className="register-btn-container34">
                  <button onClick={showRegisterModal}>Registrieren</button>
                </div>
              </div>
              <div style={{ display: `${modalTwo ? "block" : "none"}` }}>
                <Modal2 />
                <div className="buttons-container">
                  <Link href={"/wizard/partner"}>
                    <button className="btns-1" onClick={clickFunctionProp}>
                      Ich möchte KV-Dienste vertreten lassen.
                    </button>
                  </Link>
                  <Link href={'/wizard/substitute'}>
                    <button className="btns-2" onClick={clickFunctionProp}>
                      Ich möchte KV-Dienste übernehmen.
                    </button>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </>
      )}
      {/* Render Modal2 if modalRegisterVisible is true */}
      {modalRegisterVisible && <Modal2 clickFunctionProp={handleModal2Close} />}
    </>
  )
}
export default Modal
