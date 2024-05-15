import React, { useEffect } from 'react'
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { Form } from 'react-bootstrap';
import MySlider from '@/app/_components/home/slider';

const WatchListRightSection = () => {
  return (
    <>
      <div className="mb-4 h-[122px] flex flex-col justify-between py-2">
        <div className="text-[#173968] font-bold">Ihr Honorar pro Stunde</div>
        <div className="text-[#173968]">Geben Sie bitte an, zu welchem Stundenhonorar Sie diesen KV-Dienst vertreten möchten. Mit Ihrer Bewerbung verpflichten Sie sich, den Dienst zu übernehmen, sofern Ihre Bewerbung angenommen wird.</div>
      </div>
      <div>
        {/* <Form.Range
            className="px-4 py-1 text-red-500"
            min={0}
            max={150}
            step={1}
          /> */}
        <MySlider />
        {/* <div className="ps-1 d-flex justify-content-between">
            <div className='text-[#173968]'>45€/Std.</div>
            <div className='text-[#173968]'>110€/Std.</div>
          </div> */}
      </div>
      {/* //////////////// */}
      <div className="py-[26px] text-[#173968]">Erst nach erfolgreicher Vermittlung dieses Dienstes fällt eine Vermittlungsgebühr von 9,99€ an.</div>
      <div className="w-full mt-4 flex justify-center gap-6">
        <button className='py-[10px] px-9 rounded-md bg-[white] text-[#173968] border-1 border-[#173968] drop-shadow-lg'>Von Merkliste entfernen</button>
        <button className='py-[10px] px-9 rounded-md bg-[#ED6D05] text-white drop-shadow-lg'>Verbindlich bewerben</button>
      </div>
      {/* //second section of right section */}
      <div className="bg-[#E8F8FD] px-12 h-[292px] py-4 mt-12">
        <div className="text-[#173968] font-[600]">Sie möchten den Dienst unbedingt haben? Wählen Sie die Sofort-Zusage, um sich den Dienst direkt und ohne Wartezeit zu sichern.</div>
        <div className="h-[122px] w-full flex flex-col justify-between py-2">
          <div className="flex flex-col gap-3 my-4">
            <div className="flex justify-between mb-2">
              <div className="text-[#173968]">Honorar pro Stunde</div>
              <div className="text-[#173968]">45€</div>
            </div>
            <div className="flex justify-between mb-2">
              <div className="text-[#173968]">Honorar für gesamte Dienstzeit (23h)</div>
              <div className="text-[#173968]">1.035€</div>
            </div>
            <div className='flex justify-end mt-2'>
              <div className="bg-[#173968] flex items-center px-4 py-2 rounded text-white gap-2 drop-shadow-xl" style={{ width: "max-content" }}>
                <div className="h-2 w-2 flex justify-center items-center">
                  <svg data-v-6ffcad67="" className="text-white svg-inline--fa fa-bolt fa-w-10 mdi v-icon notranslate v-theme--light v-icon--size-default" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bolt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"></path></svg>
                </div>
                <div className="">Sofort-Zusage verbindlich wählen</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WatchListRightSection;