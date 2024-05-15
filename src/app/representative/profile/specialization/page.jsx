"use client"
import "./specialization.css"
import Input from '@/app/_components/Input';
import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
//DatePicker imports
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'
import { PiOfficeChair } from "react-icons/pi";

const Specialization = () => {
  const percentage = 100;
  return (
    <>
      <form className="px-[90px] py-[80px]">
        <h1 className='text-[24px] font-[600] text-[#173968]'>Qualifikation/Ausstattung</h1>
        <div className="my-6 mx-3">
          <div className="text-[16px] leading-[24px] text-[#173968] mb-8">Hier können Sie alle Informationen bearbeiten, die Ihnen helfen über arztpool KV Dienste zu finden. Einige davon sind für einen besseren Austausch mit den Ärzten, die Sie vertreten, hilfreich, andere helfen uns, Sie besser für Dienste zu vermitteln.</div>
        </div>
        <div className="">
          <div className="text-[16px] text-[#173968] font-[600] leading-[24px] my-3">Ihre Fachrichtung</div>
          <div className="text-[16px] text-[#173968] leading-[24px] my-3">Über Ihre Fachrichtung finden Sie passende KV Dienste. Allgemeinärztliche Bereitschaftsdienste können wir an jede hier angegebene Fachrichtung vermitteln, spezialisierte Fachrichtungen vermitteln wir nur an Vertreter, die uns hier eine entsprechende Spezialisierung mitteilen.</div>
        </div>
        <div className="">
          <div className="text-[16px] flex gap-16 text-[#173968] font-[600] leading-[24px] my-3">
            <div className="">Ihre momentan hinterlegte Fachrichtung</div>
            <div className="font-[400]">Allgemeinmedizin</div>
          </div>

          <div className="text-[16px] flex justify-between w-full text-[#173968] leading-[24px] my-3">
            <div className="w-[70%]">Hiermit bestätige ich, dass ich mich mindestens im dritten Jahr meiner ärztlichen Weiterbildung befinde oder diese bereits abgeschlossen habe</div>
            <div className="flex justify-end mr-8">
              <button className="py-[10px] px-[32px] rounded-md text-white bg-[#ED6D05] text-[16px] font-[500]">Bestätigen</button>
            </div>
          </div>
        </div>
        <div className="sub-pdf-input-fields-container">
          <div className="text-[16px] flex justify-between w-full text-[#173968] leading-[24px] my-3">Bitte laden Sie hier, sofern vorhanden, Ihre Facharzturkunde hoch.</div>
          {/* //Input Fields */}
          {/* //Upload Document Field */}
          <div className="flex gap-3 justify-start items-center my-6">
            <div className="mb-6">
              <div className="h-10 w-10">
                <svg className="h-full w-full text-[#173968] svg-inline--fa fa-file-pdf fa-w-12 mdi v-icon notranslate v-theme--light v-icon--size-default v-icon--clickable" role="button" aria-hidden="true" aria-label="Haftpflichtversicherungsurkunde vorangestellte Aktion" focusable="false" data-prefix="fal" data-icon="file-pdf" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zm-22.6 22.7c2.1 2.1 3.5 4.6 4.2 7.4H256V32.5c2.8.7 5.3 2.1 7.4 4.2l83.9 83.9zM336 480H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h176v104c0 13.3 10.7 24 24 24h104v304c0 8.8-7.2 16-16 16zm-22-171.2c-13.5-13.3-55-9.2-73.7-6.7-21.2-12.8-35.2-30.4-45.1-56.6 4.3-18 12-47.2 6.4-64.9-4.4-28.1-39.7-24.7-44.6-6.8-5 18.3-.3 44.4 8.4 77.8-11.9 28.4-29.7 66.9-42.1 88.6-20.8 10.7-54.1 29.3-58.8 52.4-3.5 16.8 22.9 39.4 53.1 6.4 9.1-9.9 19.3-24.8 31.3-45.5 26.7-8.8 56.1-19.8 82-24 21.9 12 47.6 19.9 64.6 19.9 27.7.1 28.9-30.2 18.5-40.6zm-229.2 89c5.9-15.9 28.6-34.4 35.5-40.8-22.1 35.3-35.5 41.5-35.5 40.8zM180 175.5c8.7 0 7.8 37.5 2.1 47.6-5.2-16.3-5-47.6-2.1-47.6zm-28.4 159.3c11.3-19.8 21-43.2 28.8-63.7 9.7 17.7 22.1 31.7 35.1 41.5-24.3 4.7-45.4 15.1-63.9 22.2zm153.4-5.9s-5.8 7-43.5-9.1c41-3 47.7 6.4 43.5 9.1z"></path></svg>
              </div>
            </div>
            {/* //Input Fields */}
            <div className="flex mb-4 justify-center items-center">
              <div className="sub-containers">
                <div className="entryarea">
                  <label htmlFor="fileInput" className="custom-file-upload">
                    <input id="fileInput" className="input-item-k" type="file" accept=".pdf" required />
                    <div className="labelline">
                      {"Facharzturkunde"}
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="text-[16px] flex justify-between w-full text-[#173968] leading-[24px] my-3">Bitte laden Sie hier, sofern vorhanden, Ihre Facharzturkunde hoch.</div>
          {/* //Input Fields */}
          {/* //Upload Document Field */}
          <div className="flex gap-3 justify-start items-center my-6">
            <div className="mb-6">
              <div className="h-10 w-10">
                <svg className="h-full w-full text-[#173968] svg-inline--fa fa-file-pdf fa-w-12 mdi v-icon notranslate v-theme--light v-icon--size-default v-icon--clickable" role="button" aria-hidden="true" aria-label="Haftpflichtversicherungsurkunde vorangestellte Aktion" focusable="false" data-prefix="fal" data-icon="file-pdf" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zm-22.6 22.7c2.1 2.1 3.5 4.6 4.2 7.4H256V32.5c2.8.7 5.3 2.1 7.4 4.2l83.9 83.9zM336 480H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h176v104c0 13.3 10.7 24 24 24h104v304c0 8.8-7.2 16-16 16zm-22-171.2c-13.5-13.3-55-9.2-73.7-6.7-21.2-12.8-35.2-30.4-45.1-56.6 4.3-18 12-47.2 6.4-64.9-4.4-28.1-39.7-24.7-44.6-6.8-5 18.3-.3 44.4 8.4 77.8-11.9 28.4-29.7 66.9-42.1 88.6-20.8 10.7-54.1 29.3-58.8 52.4-3.5 16.8 22.9 39.4 53.1 6.4 9.1-9.9 19.3-24.8 31.3-45.5 26.7-8.8 56.1-19.8 82-24 21.9 12 47.6 19.9 64.6 19.9 27.7.1 28.9-30.2 18.5-40.6zm-229.2 89c5.9-15.9 28.6-34.4 35.5-40.8-22.1 35.3-35.5 41.5-35.5 40.8zM180 175.5c8.7 0 7.8 37.5 2.1 47.6-5.2-16.3-5-47.6-2.1-47.6zm-28.4 159.3c11.3-19.8 21-43.2 28.8-63.7 9.7 17.7 22.1 31.7 35.1 41.5-24.3 4.7-45.4 15.1-63.9 22.2zm153.4-5.9s-5.8 7-43.5-9.1c41-3 47.7 6.4 43.5 9.1z"></path></svg>
              </div>
            </div>
            {/* //Input Fields */}
            <div className="flex mb-4 justify-center items-center">
              <div className="sub-containers">
                <div className="entryarea">
                  <label htmlFor="fileInput" className="custom-file-upload">
                    <input id="fileInput" className="input-item-k" type="file" accept=".pdf" required />
                    <div className="labelline">
                      {"Approbation"}
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* //Upload Document Field */}
        <div className="my-6 text-[16px] font-[700] text-[#173968]">Arzttasche</div>
        <div className="mb-10 text-[16px] text-[#173968] w-[86.3%]">Für die Durchführung eines KV Dienstes empfehlen wir eine ausreichend bestückte Arzttasche. Hier können Sie den Ärzten, auf deren Dienste Sie sich bewerben mitteilen, dass Sie eine entsprechende Arzttasche besitzen.</div>
        <div className="">
          <div className="checkbox-section-1-container flex hm-check-2">
            <div className="">
              <input type="checkbox" className='checkbox-1-section-1' name="" id="" />
            </div>
            <div className="icon-and-text-container-section-1">
              <span>Arzttasche vorhanden</span>
            </div>
          </div>
        </div>
        <div className="flex justify-end mr-8">
          <button className="py-[10px] px-[32px] rounded-md text-white bg-[#ED6D05] text-[16px] font-[500]">Speichern</button>
        </div>
      </form>
    </>
  )
}

export default Specialization;