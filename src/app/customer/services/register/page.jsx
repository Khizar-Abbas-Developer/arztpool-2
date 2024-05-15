import React from 'react'
import { BsPlusCircle } from 'react-icons/bs'
import './register.css'
import Link from 'next/link'
import Pricing from '@/app/_components/home/price/page'


const page = () => {
  const CardData = [
    {
      id: 1,
      name: 'Einzelnen KV-Dienst eintragen',
      desc: '  Schnelle, papierlose Vermittlung von geprüften Vertretungsärzten. Ideal, um arztpool24.de zu testen.',
      link: "/customer/services/individual-service",
    },
    {
      id: 2,
      name: 'Mehrere KV-Dienste eintragen',
      desc: 'Tragen Sie mehrere KV-Dienste gleichzeitig ein und profitieren Sie von einem vergünstigten Tarif, wenn Sie drei oder mehr Dienste bei arztpool inserieren.',
      link:"/customer/services/serveral-service"
    },
  ]
  
  // Pricing Model Data
 
  return (
    <>
      <div className="pt-20  register-services-container">
        <div className="text-[30px] mb-8 font-[600] text-[#20416E]">
          Tragen Sie neue KV-Dienste ein
        </div>
        <p className=" text-[#697f9d]">
          Nutzen Sie unsere neue Ausschreibungssoftware: Wir vermitteln Ihnen
          schnell, zuverlässig und papierlos passende Vertretungsärzte. Und Sie
          behalten die Kontrolle und den Überblick. Probieren Sie es aus und
          überzeugen Sie sich von unserer 99%-igen Erfolgsquote.
        </p>
       <div className='create-service-cards mb-5'>
       {CardData.map((item, i) => {
    return (
        <div key={i} className="create-service-card m-2 mt-5">
            {item.link ? ( // Check if item.link exists
                <Link href={item.link} className="w-full mb-2">
                    <BsPlusCircle className="font-[700] text-[20px] text-[#20416E]" />
                </Link>
            ) : (
                <BsPlusCircle className="font-[700] text-[20px] text-[#20416E]" /> // Render without Link if item.link is undefined
            )}

            <br />
            <h6 className="text-[18px] font-[600] text-[#20416E]  mt-4">
                {item.name}
            </h6>
            <p className="text-[#697f9d] mt-2 mb-2 text-[15px]">
                {item.desc}
            </p>
        </div>
    )
})}
       </div>
      {/* Our Flexible Models */}
     <Pricing />
        
      </div>
    </>
  )
}
export default page
