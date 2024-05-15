'use client'
import Cover from '@/app/_components/cover/cover'
import React from 'react'
import Faq from '@/app/_components/faq/faq'
import image1Frame from '@/../public/assets/images/payment-plan/1.jpg'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Image from 'next/image'
import ApplyNow from '../_components/apply-now/apply-now'
import "@/app/(Operator_layout)/(Main_layout)/operators/layout.css";
import imageOne from "@/../public/assets/images/payment-plan/1.jpg"
import imageTwo from "@/../public/assets/images/payment-plan/2.jpg"
import imageThree from "@/../public/assets/images/payment-plan/3.jpg"

import Style from './style.module.css'
import Footer from '../(Operator_layout)/Footer/Footer'
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
    <div className={Style.paymentPlan}>
      <div className={`${Style.topContainerHeading}`}>
        KV-Dienste sicher vertreten lassen
      </div>
      <Container className="py-5 my-5">
        <Row>
          <Col>
            <div className="section-heading">So funktioniert es</div>
            <div className="mt-2 section-title">
              Dienstüberlassung für Praxen mit einem oder mehreren Ärzten
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <div className={Style.detailBody}>
              <p>
                Niedergelassene Ärzte übernehmen oft KV-Dienste, die jedoch oft
                mit ihrem Alltag kollidieren. Moderne Ärzte setzen daher auf die
                Dienstüberlassung an Vertretungsärzte über arztpool24.de.
              </p>
              <p>
                Unabhängig von Ihrer Praxisart - sei es eine Einzelpraxis,
                Gemeinschaftspraxis, Berufsausübungsgemeinschaft oder
                Praxisgemeinschaft - arztpool24.de kümmert sich um Ihre
                Bereitschaftsdienste. Über Ihren Account verwalten und
                organisieren Sie bequem alle Ärzte und KV-Dienste zentral.
              </p>
              <p>
                Profitieren Sie von zahlreichen Vorteilen und überlassen Sie
                Ihre KV-Dienste zuverlässig arztpool24.de.
              </p>
            </div>
            <Button className="button-primary my-4 py-2 px-2">
              Jetzt KV-Dienste übernehmen
            </Button>
          </Col>
          <Col>
            <iframe
              width="438"
              height="246"
              src={"https://www.youtube.com/embed/vR-q1wPEp90"}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Col>
        </Row>
      </Container>
      <Container>
        <div className="row justify-content-center my-5">
          <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
            <div
              style={zoomStyle}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <Image
                src={imageOne}
                width={368}
                height={207}
                alt=""
                style={imageStyle}
              />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
            <div
              style={zoomStyle}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <Image
                src={imageTwo}
                width={368}
                height={207}
                alt=""
                style={imageStyle}
              />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
            <div
              style={zoomStyle}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <Image
                src={imageThree}
                width={368}
                height={207}
                alt=""
                style={imageStyle}
              />
            </div>
          </div>
        </div>
        {/* <Row className="my-5 d-flex flex-row">
          <div className="d-flex justify-content-center gap-5 flex-wrap">
            <Col xs={12} md={6} lg={3}>
          <div
            style={zoomStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <Image
              src={imageOne}
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
              src={imageTwo}
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
              src={imageThree}
              width={368}
              height={207}
              alt=""
              style={imageStyle}
            />
          </div>
          </Col>
          </div>
        </Row> */}
      </Container>
      <Container className="py-5 section-highlight-shade" fluid>
        <Container>
          <Row>
            <Col>
              <div className="section-title mb-5">
                Das passende Paket für Sie
              </div>
              <div className="d-flex justify-content-start">
                <Image src="/assets/images/payment-plan.svg" width={1000} height={1000} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className="py-5 my-4">
        <Row>
          <Col>
            <div className="section-title">
              Abrechnungsfähige Leistungen der KV-Dienste
            </div>
          </Col>
        </Row>
        <Row className="mt-5 gx-5">
          <Col xs={12} md={7} className="user-select-none">
            <Image
              className="user-select-none"
              src="/assets/images/payment-plan-table.svg"
              width={1000}
              height={100}
              alt=""
            />

            <div>
              <div className="mt-4">
                zzgl. Vermittlungsgebühr an arztpool, in Abhängigkeit des
                Paketpreises
              </div>

              <ol className="mt-4">
                <li className="py-1">
                  Die Zahlen basieren auf den Erfahrungen und Auswertungen der
                  vergangenen 10 Jahre.
                </li>
                <li className="py-1">
                  <div>
                    Durchschnittliches EBM-Honorar pro behandelten Patienten:
                  </div>
                  <ul className="mt-2">
                    <li className="py-1">
                      Fahrdienst 100€ (EBM 01212 + 01418)
                    </li>
                    <li className="py-1">Sitzdienst 15€ (EBM 01212)</li>
                  </ul>
                </li>
              </ol>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className={Style.sideTitle}>
              <strong>arztpool24</strong> vermittelt Ihnen persönliche
              Vertreter, welche zwei große Vorteile haben
            </div>

            <div className="mt-4">
              <ul className={Style.noDisc}>
                <li className="py-1">
                  <div className="d-flex">
                    <div className={`${Style.discCount} me-3`}>1</div>
                    <div className="w-100">
                      <div>
                        Der Vertreter ist in Ihrem Auftrag und auf Ihre Rechnung
                        tätig.
                      </div>

                      <div>
                        Das bedeutet, dass Sie das EBM-Honorar des gesamten
                        Dienstes bei Ihrer KV als Gegenfinanzierung abrechnen
                        können.
                      </div>
                    </div>
                  </div>
                </li>
                <li className="py-1">
                  <div className="d-flex">
                    <div className={`${Style.discCount} me-3`}>2</div>
                    <div className="w-100">
                      Bei einer persönlichen Vertretung besteht keinerlei
                      Gefahr, dass Ihr Vertreter sozialversicherungspflichtig
                      wird.
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="py-5 section-highlight">
        <Container className="py-3">
          <Row className="py-5">
            <Col xs={12} md={{ span: 4 }} className="py-2">
              <div className="section-title">
                Ihre Vorteile bei KV- Dienst-Vertretungen
              </div>
              <div className={`py-4 ${Style.ctaPrompt}`}>
                Bereits ab 99€ KV-Dienste vertreten lassen
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
                        width={20}
                        height={20}
                        className="me-3"
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
                        width={20}
                        height={20}
                        className="me-3"
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
                        width={20}
                        height={20}
                        className="me-3"
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
                        width={20}
                        height={20}
                        className="me-3"
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
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
      <ApplyNow />
      <Cover />
      <Faq />
      <Footer />
    </div>
  )
}

export default MapsPage
