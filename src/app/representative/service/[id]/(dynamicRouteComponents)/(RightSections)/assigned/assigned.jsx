import React from 'react'
import { RiVerifiedBadgeFill } from "react-icons/ri";

const AssignedService = () => {
  return (
    <>
      <div className="bg-[#FDF0E6] border mb-8 flex h-[102px] justify-start items-center rounded-md">
        <div className="h-full flex justify-center items-center w-20">
          <RiVerifiedBadgeFill className='text-3xl text-[#ED6D05]' />
        </div>
        <div className="text-[#ED6D05]">Herzlichen Glückwunsch, Sie sind der Vertreter für diesen KV-Dienst.</div>
      </div>
      <div className="flex flex-col gap-3 mb-2">
        <div className="flex justify-between mb-2">
          <div className="">Ihr Honorar</div>
          <div className=""></div>
        </div>
        <div className="flex justify-between mb-2">
          <div className="">Ihr Honorar</div>
          <div className="">0€</div>
        </div>
        <div className="flex justify-between mb-2">
          <div className="">Ihr Honorar</div>
          <div className="">0€</div>
        </div>
      </div>
      <hr />
      <div className="py-[26px] tet">Erst nach erfolgreicher Vermittlung dieses Dienstes fällt eine Vermittlungsgebühr von 9,99€ an.</div>
      <hr />
      <div className="py-[26px] tet">Sie können nun Nachrichten mit Ihrem Auftraggeber austauschen und den Dienstvertretungsvertrag herunterladen.</div>
      <div className="w-full mt-36 flex justify-end">
        <button className='px-8 py-[10px] rounded-md bg-[#173968] text-white'>Details zum Dienst anzeigen</button>
      </div>
    </>
  )
}

export default AssignedService;