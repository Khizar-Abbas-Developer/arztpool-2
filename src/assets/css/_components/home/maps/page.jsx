'use client'
import React from 'react'
import Marque from '@/components/shared/margue/marque'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Location from '@/app/_components/location/location'
import Image from 'next/image'
import ApplyNow from '../_components/apply-now/apply-now';
import imageOnee from "@/../public/assets/images/payment-plan/11.jpg"
import imageTwoo from "@/../public/assets/images/payment-plan/22.jpg"
import imageThreee from "@/../public/assets/images/payment-plan/33.jpg"

import Style from './style.module.css'
import FooterOne from '@/components/LayoutComponents/FooterOne/FooterOne'

const MapsPage = () => {
  const zoomStyle = {
    overflow: 'hidden',
  }

  const imageStyle = {
    transition: 'transform 0.3s ease',
  }

  const handleMouseOver = (event) => {
    event.target.style.transform = 'scale(1.1)'
  }

  const handleMouseOut = (event) => {
    event.target.style.transform = 'scale(1)'
  }
  return (
    <div>
      <div className={`${Style.topContainerHeading}`}>
        KV-Dienste übernehmen
      </div>
      <Location />
      <Container className="pb-5 section-highlight" fluid>
        <Container className="pb-5">
          <Row>
            <Col className="mx-5 py-5">
              <div className="section-title">Preise für Dienstübernahme</div>
              <div className={`mt-3 ${Style.subHeading}`}>
                Gebühr pro vermittelten Dienst
              </div>
              <div className={`mt-1 ${Style.subHeading2}`}>
                abhängig von der Dienstdauer
              </div>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col
              xs={12}
              md={{ span: 10, offset: 1 }}
              className={Style.priceCards}
            >
              <div className="d-flex gap-5 flex-wrap">
                <div className="flex-fill d-flex flex-column align-items-center justify-content-center p-5 border">
                  <div>4,99€*</div>
                  <div className="small mt-2">0-3.5 Std.</div>
                </div>
                <div className="flex-fill d-flex flex-column align-items-center justify-content-center p-5 border">
                  <div>4,99€*</div>
                  <div className="small mt-2">0-3.5 Std.</div>
                </div>
                <div className="flex-fill d-flex flex-column align-items-center justify-content-center p-5 border">
                  <div>4,99€*</div>
                  <div className="small mt-2">0-3.5 Std.</div>
                </div>
              </div>
            </Col>
          </Row>
          <Row className={`mt-2 ${Style.priceCardImps}`}>
            <Col>
              <div className="text-end">
                *Preise sind Nettopreise (zzgl. 19% USt.)
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <ApplyNow />
      <Container className="py-5 my-5 px-5">
        <Row>
          <Col>
            <div className="section-heading">Wie es funktioniert:</div>
            <div className="mt-2 section-title">
              Verdienstmöglichkeiten für Ärzte
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <div className={Style.detailBody}>
              <p>
                Die Übernahme von kassenärztlichen Bereitschaftsdiensten über
                arztpool24.de eröffnet approbierten Ärzten attraktive
                Verdienstmöglichkeiten.
              </p>
              <p>
                Dank garantierten Mindesthonoraren und leistungsabhängigen
                Zusatzvergütungen werden Dienstvertretungsärzte bei
                arztpool24.de stets gerecht entlohnt.
              </p>
              <p>
                Nutzen Sie die vielfältigen Vorteile, wenn Sie KV-Dienste über
                arztpool24.de übernehmen.
              </p>
            </div>
            <Button className="button-primary my-4">
              Jetzt KV-Dienste übernehmen
            </Button>
          </Col>
          <Col>
            <iframe
              src="https://www.youtube.com/embed/YKSTpDrrkzI"
              className="border-0"
              title="arztpool"
              width="565px"
              height="318px"
            ></iframe>
          </Col>
        </Row>
      </Container>
      <Container fluid className="section-highlight py-5 mx-5">
        <Container className="py-3">
          <Row className="py-5">
            <Col xs={12} md={{ span: 4 }} className="py-2">
              <div className="section-title">
                Ihre Vorteile bei KV- Dienst-Vertretungen
              </div>
              <Button className="button-primary my-4">
                Jetzt KV-Dienste übernehmen
              </Button>
            </Col>
            <Col className="py-2">
              <Row className="gy-5">
                <Col xs={12} md={6} className={Style.listOptions}>
                  <div>Verdienst</div>
                  <ul className="mt-3">
                    <li className='flex'>
                      <Image
                        src="/assets/ico-checkFilled.svg"
                        className="me-3"
                        width={20}
                        height={20}
                        alt=""
                      />
                      Honorarbasierte Verdienstmöglichkeit
                    </li>
                    <li className='flex'>
                      <Image
                        src="/assets/ico-checkFilled.svg"
                        width={20}
                        height={20}
                        className="me-3"
                        alt=""
                      />
                      Flexible Arbeitszeiten
                    </li>
                    <li className='flex'>
                      <Image
                        src="/assets/ico-checkFilled.svg"
                        className="me-3"
                        width={20}
                        height={20}
                        alt=""
                      />
                      Einsatzorte in ganz Deutschland
                    </li>
                    <li className='flex'>
                      <Image
                        src="/assets/ico-checkFilled.svg"
                        className="me-3"
                        width={20}
                        height={20}
                        alt=""
                      />
                      Leistungsabhängige Zusatzvergütungen
                    </li>
                  </ul>
                </Col>
                <Col xs={12} md={6} className={Style.listOptions}>
                  <div>Verdienst</div>
                  <ul className="mt-3">
                    <li className='flex'>
                      <Image
                        src="/assets/ico-checkFilled.svg"
                        className="me-3"
                        width={20}
                        height={20}
                        alt=""
                      />
                      Honorarbasierte Verdienstmöglichkeit
                    </li>
                    <li className='flex'>
                      <Image
                        src="/assets/ico-checkFilled.svg"
                        className="me-3"
                        width={20}
                        height={20}
                        alt=""
                      />
                      Flexible Arbeitszeiten
                    </li>
                    <li className='flex'>
                      <Image
                        src="/assets/ico-checkFilled.svg"
                        className="me-3"
                        width={20}
                        height={20}
                        alt=""
                      />
                      Einsatzorte in ganz Deutschland
                    </li>
                    <li className='flex'>
                      <Image
                        src="/assets/ico-checkFilled.svg"
                        width={20}
                        height={20}
                        className="me-3"
                        alt=""
                      />
                      Leistungsabhängige Zusatzvergütungen
                    </li>
                  </ul>
                </Col>
                <Col xs={12} md={6} className={Style.listOptions}>
                  <div>Verdienst</div>
                  <ul className="mt-3">
                    <li className='flex'>
                      <Image
                        src="/assets/ico-checkFilled.svg"
                        width={20}
                        height={20}
                        className="me-3"
                        alt=""
                      />
                      Honorarbasierte Verdienstmöglichkeit
                    </li>
                    <li className='flex'>
                      <Image
                        src="/assets/ico-checkFilled.svg"
                        className="me-3"
                        width={20}
                        height={20}
                        alt=""
                      />
                      Flexible Arbeitszeiten
                    </li>
                    <li className='flex'>
                      <Image
                        src="/assets/ico-checkFilled.svg"
                        className="me-3"
                        width={20}
                        height={20}
                        alt=""
                      />
                      Einsatzorte in ganz Deutschland
                    </li>
                    <li className='flex'>
                      <Image
                        src="/assets/ico-checkFilled.svg"
                        className="me-3"
                        width={20}
                        height={20}
                        alt=""
                      />
                      Leistungsabhängige Zusatzvergütungen
                    </li>
                  </ul>
                </Col>
                <Col xs={12} md={6} className={Style.listOptions}>
                  <div>Verdienst</div>
                  <ul className="mt-3">
                    <li className='flex'>
                      <Image
                        src="/assets/ico-checkFilled.svg"
                        className="me-3"
                        width={20}
                        height={20}
                        alt=""
                      />
                      Honorarbasierte Verdienstmöglichkeit
                    </li>
                    <li className='flex'>
                      <Image
                        src="/assets/ico-checkFilled.svg"
                        className="me-3"
                        width={20}
                        height={20}
                        alt=""
                      />
                      Flexible Arbeitszeiten
                    </li>
                    <li className='flex'>
                      <Image
                        src="/assets/ico-checkFilled.svg"
                        className="me-3"
                        width={20}
                        height={20}
                        alt=""
                      />
                      Einsatzorte in ganz Deutschland
                    </li>
                    <li className='flex'>
                      <Image
                        src="/assets/ico-checkFilled.svg"
                        className="me-3"
                        width={20}
                        height={20}
                        alt=""
                      />
                      Leistungsabhängige Zusatzvergütungen
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container>
        <Row className="my-5">
          <Col>
            <div className="d-flex justify-content-center gap-5 flex-wrap">
              <div
                style={zoomStyle}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <Image
                  src={imageOnee}
                  width={368}
                  height={207}
                  alt=""
                  style={imageStyle}
                />
              </div>
              <div
                style={zoomStyle}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <Image
                  src={imageTwoo}
                  width={368}
                  height={207}
                  alt=""
                  style={imageStyle}
                />
              </div>
              <div
                style={zoomStyle}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <Image
                  src={imageThreee}
                  width={368}
                  height={207}
                  alt=""
                  style={imageStyle}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default MapsPage;