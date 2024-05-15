import React from "react";
import './price.css'
const Pricing=()=>{
    const Pricing=[
        {
         id:"1",
         title:"Express-Auftrag",
         subTitle:"3 Tage oder weniger Vorlauf",
         desc:"Sie übergeben uns digital die Dienstdaten, wir kümmern uns den Rest: Dabei erhalten Sie alle Vorteile des Eil-Auftrags. Zudem organisieren wir für Sie die Bewerberanfragen im Rahmen Ihrer Honorarvorgaben.",
         price:179
       },
       {
         id:"2",
         title:"Eil-Auftrag",
         subTitle:"4 bis 14 Tage Vorlauf",
         desc:"Sie erhalten alle Vorzüge des Standard-Auftrags. Zusätzlich stellen wir Ihnen einen persönlichen Ansprechpartner für Ihren KV-Dienst zu Seite. Damit Sie das Maxumum herausholen, erhalten Sie eine Anleitung zur Optimierung Ihrer Inseraten mit Checkliste (Material,..)",
         price:149
       },
       {
         id:"3",
         title:"Standard-Auftrag",
         subTitle:"15 - ∞ Tage Vorlauf",
         desc:"Wir vermitteln Ihnen schnell und papierlos geprüfte Vertretungsärzte - Dienstvertretungsvertragsvorlage inklusive. Sie haben die Kontrolle über die Auswahl des Vertreters. Über Ihren persönlichen Zugang verwalten Sie Ihre Betriebsstätten, Ärzte und Dienste und können Statusinformationen einsehen. Bei Notfällen erreichen Sie uns 24/7.",
         price:99
       },
       {
         id:"4",
         title:"Rundum-Sorglos-Paket",
         subTitle:"Möglich ab 15 Tagen Vorlauf",
         desc:"Sie erhalten alle Vorteile des Express-Auftrags. Darüber hinaus organisieren wir für Sie die rechtzeitige Versendung von KL und Unterlagen..",
         price:199
       },
     ]
 return (
    <>
     <div className="text-[24px] mb-8 font-[600] text-[#20416E] mt-5 " >
             Unsere flexiblen Preismodelle
        </div>
         <div className="container-fluid service-pricing">
                       <div className="row">
              {Pricing.map((item, index)=>{
                return   <div key={index} className="col-md-3 service-pricing-card">
                          <h4 className="text-[20px]  font-[500] text-[#20416E] mb-4 ">{item.title}</h4>
                          <p className="text-[17px]  font-[400] mb-3">{item.subTitle}</p>
                          <p className="text-[15px]  font-[300] mt-2">{item.desc}</p>
                          <h3 className='price'>{item.price}€</h3>
                </div>
              })}
            
            </div>
         </div>
    </>
 )
}
export default Pricing