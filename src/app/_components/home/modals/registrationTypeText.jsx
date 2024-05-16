'use client'
import React, { useEffect, useState } from 'react'
// import '@/assets/css/_components/home/modals/registrationTypeText.css';
import '../../../../assets/css/_components/home/modals/registrationTypeText.css';
import Input from '@/app/_components/Input';
import { ImCross } from 'react-icons/im'
import Link from 'next/link'

const Modal2 = ({ clickFunctionProp }) => {
  return (
    <>
      <div className="modal-content-containers">
        <div className="">
          <h1 className="heading-texts">
            KV-Dienste so einfach organisieren wie online shoppen? Das geht.
          </h1>
        </div>
        <div className="">
          <p className="paragraph-texts">
            arztpool setzt einen neuen Standard und unterstützt Sie dabei,Ihre
            Praxisab-läufe zu vereinfachen.
          </p>
        </div>
      </div>
    </>
  )
}

export default Modal2
