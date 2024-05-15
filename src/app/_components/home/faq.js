'use client'

import Accordion from 'react-bootstrap/Accordion'
import React, { useState } from 'react'
import { FaPlus, FaMinus } from "react-icons/fa";
import '@/assets/css/_components/home/faq.css' 
import { Container, Button } from 'react-bootstrap'
import datab from './content.js'

export default function Homeeigntsection() {
  const [selected, setSelected] = useState(null);
  // const [openAccordionId, setOpenAccordionId] = useState(null)

  // const handleAccordionClick = (id) => {
  //   setOpenAccordionId(openAccordionId === id ? null : id)
  // }
  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null)
    }
    setSelected(i)
  }
  return (
    <section className="faq" style={{background : "#173968    "}}>
      <Container>
        <div className="faq-section d-flex flex-wrap">
          <div className="faq-section__left d-flex flex-column align-items-start">
            <p className="home-section-teaser">FAQ</p>
            <p className="faq-section__head ">Häufige Fragen</p>
            <p className="faq-section__text mt-3">
              Wenn Sie zusätzliche Fragen haben, zögern Sie nicht, uns zu
              kontaktieren. Wir werden Ihr Anliegen umgehend bearbeiten.
            </p>
            <div className="d-flex align-items-center justify-content-center">
              <a href="">
                <svg
                  data-v-dfad6e40=""
                  className="svg-inline--fa fa-arrow-right fa-w-14 mdi v-icon notranslate v-theme--light v-icon--size-default me-4"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fal"
                  data-icon="arrow-right"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M216.464 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887L209.393 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L233.434 36.465c-4.686-4.687-12.284-4.687-16.97 0z"
                  ></path>
                </svg>{' '}
                Nachricht schreiben
              </a>
            </div>
          </div>
          {/* //target */}
          <div className="accordion-k">
            <div className="accordion" style={{width : "100%"}}>
              {feqData.map((item, i) => {
                return (
                  <div className="item" key={i}>
                    <div className="title p-2" onClick={() => toggle(i)}>
                      <h2 className='question-heading'>{item.question}</h2>
                      <span>{selected == i ? <FaPlus /> : <FaPlus />}</span>
                    </div>
                    <hr className='horizontal-line' />
                    <div className={selected == i ? "content show" : "content"}>{item.answer}</div>
                  </div>
                )
              })}
            </div>
          </div>
          {/* //target */}
        </div>
      </Container>
    </section>
  )
}
const feqData = [
  {
    question: 'Wie kann die Vertretung meiner KV-Dienste von Berlin aus funktionieren?',
    answer:
      'arztpool24 ist seit vielen Jahren in der Vertretung fürKassenärztliche Bereitschaftsdienste aktiv, alle Mitarbeiterverfügen über mehrjährige Expertise. Über die Jahre haben wiruns ein deutschlandweites Netzwerk an Dienstvertretungsärztenaufgebaut, die auch Ihren Dienst übernehmen können, egal auswelchem Bundesland Sie als Kunde zu uns kommen. arztpool24 istdeutschlandweit aktiv.',
  },
  {
    question:
      'Welche Kosten kommen als Kunde/ Partner von arztpool24 für die Vermittlung meiner Bereitschaftsdienste auf mich zu?',
    answer:
      'Wir berechnen lediglich eine Vermittlungsgebühr pro vermittelten Dienst, die sich nach der Länge des Dienstes berechnet. Sollte der Vertretungsarzt keinen Arztkoffer besitzen und Sie ihm auch keinen zur Verfügung stellen können, dann können wir mit Ihrem Einverständnis dem Vertreter eine Mappe mit einer Grundausstattung schicken. Ihnen berechnen wir nur den Versand, nicht den Koffer selbst.',
  },
  {
    question:
      'Wie kann die Vertretung meiner KV-Dienste von Berlin aus funktionieren?',
    answer:
      'Wenn Sie Ihren Dienst auf unserer Plattform eingetragen haben, schreiben wir ihn auf dem Marktplatz aus. Sobald wir einen Arzt gefunden haben, und Sie als Kunde und der Vertreter dem Dienstvertretungsvertrag zugestimmt haben, teilen wir Ihnen alle relevanten Daten mit, sodass Sie ihn als Ihren Vertreter bei der KV melden können.',
  },
  {
    question:
      'Wie bekommt mein Vertreter die Unterlagen für seinen Dienst?',
    answer:
      'Ja, sobald wir Ihnen den Vertreter mitgeteilt haben, müssen Sie ihn auch bei der KV melden, sodass es nicht zu Missverständnissen, etwa bei der Dienstanmeldung kommt und man den Vertreter nicht als solchen akzeptiert. Ihre KV hat dafür normalerweise eigene Formulare. Nähere Informationen bekommen Sie von der für Sie zuständigen KV.',
  },
  {
    question:
      'Muss ich meinen Vertreter der KV melden?',
    answer:
      'Ja, sobald wir Ihnen den Vertreter mitgeteilt haben, müssen Sie ihn auch bei der KV melden, sodass es nicht zu Missverständnissen, etwa bei der Dienstanmeldung kommt und man den Vertreter nicht als solchen akzeptiert. Ihre KV hat dafür normalerweise eigene Formulare. Nähere Informationen bekommen Sie von der für Sie zuständigen KV.',
  },
  {
    question:
      'Wie ist die Haftungsfrage während des Dienstes geregelt?',
    answer:
      'Grundsätzlich haften Sie als der zum Dienst verpflichtete und eingeteilte Arzt. Kommen Sie aber Ihrer Sorgfaltspflicht nach und vergewissern sich, dass der eingeteilte Arzt über die notwendigen Qualifikationen (Approbation, Berufshaftpflichtversicherung) verfügt, dann geht die Haftung auf den Vertretungsarzt über. Wenn Sie unsere Dienstleistung in Anspruch nehmen, übernehmen wir für Sie die (Sicht-)Prüfung von Approbation und Berufshaftpflichtversicherung.',
  },
]
