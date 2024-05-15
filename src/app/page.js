'use client'

import React from 'react'
import bg from '../../public/temp-image.jpg';
import Faq from '@/app/_components/home/faq'
import Image from 'next/image';
import euroSymbol from "../assets/Images/euroSymbol.png";
import bggImage from "../assets/Images/bggImage.jpg";
import { Container, Row, Col } from 'react-bootstrap'
import { GoVerified } from "react-icons/go";
import { FaArrowRight } from 'react-icons/fa'
import HomeFifthSection from '../app/_components/home/homefifithsection';

import Location from '../app/_components/home/location/location';
import BehindUs from '@/app/_components/home/behind-us';
import Calculator from '@/app/_components/home/calculator/calculator';
import Link from 'next/link'
import specialImg from '@/app/../../public/assets/images/special.jpg'
import Marque from '@/app/_components/home/news_slider';
import Cover from '@/app/_components/home/cover'
import Feedback from '@/app/_components/home/feedback'
import DefaultHeader from '@/app/_components/home/header';
import arztpool from "@/assets/Images/arztpool.svg"
import TempHeader from './_components/home/tempHeader';


function Home() {
  const handleScrollDown = () => {
    window.scrollTo({
      top: 1100,
      behavior: 'smooth', // Add smooth scrolling behavior
    })
  }
  return (
    <>
      <TempHeader />
      {/* <DefaultHeader /> */}

      <Marque
        title="News"
        list={[
          'KV-Dienstvertretung durch arztpool24 ist nicht sozialversicherungspflichtig',
          'KV-Vertreter bei arztpool24, die rechtssichere Alternative zum Poolarzt',
        ]}
      />

      <div className="union-section-one-and-two">
        <div className="home-section-1-outer">
          <div className="home-section-1 d-flex justify-content-center align-items-center">
            <div className='container'>
              <div className="home-section-1-inner d-flex align-items-center gap-5 flex-wrap">
                <div className="home-section-1-modal">
                  <Calculator />
                </div>
                <div className=" d-flex flex-column justify-content-center align-items-start gap-2">
                  <h1 className="text-white fs-1 fw-bolder ps-4">
                    Ihr Vermittlungsportal für <br /> KV-Dienste
                  </h1>
                  <span className="text-white fs-3 fw-bold ps-4">
                    Unabhängig. Zuverlässig. Digital.
                  </span>
                  <div className="link-and-image-container pt-5 ps-4 gap-15">
                    <button onClick={handleScrollDown} className="link-btn-image">
                      <FaArrowRight />
                      <span>Mehr Informationen</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Home-Section-2 */}
          <div className="home-Section-2  mb-4">
            <div className="home-Section-2-inner">
              <div className=" d-flex flex-column justify-content-center align-items-center">
                <p className="text-white home-Section-2-heading">knapp 500.000</p>
                <p className="text-center">
                  Dienststunden <br />
                  vermittelt pro Jahr
                </p>
              </div>
              <div className=" d-flex flex-column justify-content-center align-items-center">
                <h2 className="text-white">über 2.500</h2>
                <p className="text-center">
                  erfolgreiche <br />
                  Vermittlungen
                </p>
              </div>
              <div className=" d-flex flex-column justify-content-center align-items-center">
                <h2 className="text-white">über 99%</h2>
                <p>
                  Dienststunden <br />
                  vermittelt pro Jahr
                </p>
              </div>
              <div className=" d-flex flex-column justify-content-center align-items-center">
                <h2 className="text-white">10 Jahre</h2>
                <p className="text-center">
                  erfolgreich <br />
                  am Markt
                </p>
              </div>
              <div className="symbol-image-container">
                <Image
                  src={euroSymbol}
                  width={200}

                  className="symbol-image"
                  height={200}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className="third-login-section pe-2 my-5">
          <div className="third-login-section-head">
            <p className="teaser">Was macht arztpool</p>
            <p className="heading">
              KV-Bereitschaftsdienste koordinieren mit arztpool
            </p>
          </div>
          <div className="third-login-section-body d-flex flex-wrap justify-content-center align-items-center">
            <div className="third-login-section-left description d-flex flex-column justify-content-center align-items-start pe-3">
              <p className="">
                KV-Dienste sind Bereitschaftsdienste, welche von zugelassenen
                Ärzten in einem Medizinischen Versorgungszentrum oder von
                niedergelassenen Ärzten mit Mitgliedschaft in der Kassenärztlichen
                Vereinigung (KV) übernommen werden. Das Ziel der
                Bereitschaftsdienste der KV ist es, Kassen- sowie Privatpatienten
                außerhalb regulärer Praxis-Öffnungszeiten ambulant ärztlich zu
                versorgen.
              </p>
              <div className="d-flex flex-column">
                <Link href={'/payment-plan'}>
                  <button className="third-login-section-btn">
                    Ich möchte KV-Dienste abgeben
                  </button>
                </Link>
                <Link href={'/maps'}>
                  <button className="" style={{ marginTop: "10px", padding: "8px 40px", backgroundColor: "transparent", fontSize: "16px", width: "100%", borderRadius: "4px", cursor: "pointer", color: "#173968", border: "1px solid #173968" }}>
                    Jetzt Dienst vertreten
                  </button>
                </Link>
              </div>
            </div>
            <div className="third-login-section-right pe-2">
              <iframe
                src="https://www.youtube.com/embed/gqrY5N7fLko"
                className="border-0"
                title="arztpool"
                width="94%"
                height="311px"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Home-Section-4 */}
      <div className="fourth-login-section-main pt-5">
        <div className='container'>
          <div className="fourth-login-section mt-5">
            <div className="fourth-login-section-head px-2">
              <p className="teaser">Unsere Services für Sie</p>
              <p className="heading">Wie können wir Ihnen helfen?</p>
            </div>
            <div className="fourth-login-section-body d-flex flex-wrap justify-content-center align-items-center">
              <div className="service-card">
                <div className="service-card-inner">
                  <p className="title">Ich möchte KV-Dienste abgeben</p>
                  <div className="text">
                    Services für Einzel- und Gemeinschaftspraxen
                  </div>
                  <a href="" className="text-decoration-none">
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
                    Mehr Informationen
                  </a>
                </div>
              </div>
              <div className="service-card">
                <div className="service-card-inner">
                  <p className="title">Ich möchte KV-Dienste abgeben</p>
                  <div className="text">
                    Services für Einzel- und Gemeinschaftspraxen
                  </div>
                  <a href="" className="text-decoration-none">
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
                    Mehr Informationen
                  </a>
                </div>
              </div>
              <div className="service-card">
                <div className="service-card-inner">
                  <p className="title">Ich möchte KV-Dienste abgeben</p>
                  <div className="text">
                    Services für Einzel- und Gemeinschaftspraxen
                  </div>
                  <a href="" className="text-decoration-none">
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
                    Mehr Informationen
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Home-Section-5 */}
      <div className='container'>
        <div className="home-section-fifith mt-5 bg-white">
          <div className="fifth-home-section-head d-flex flex-column justify-content-center align-items-center">
            <p className="home-section-teaser">KV-Dienste einfach delegieren:</p>
            <p className="home-section-heading">So gehts</p>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <HomeFifthSection />
          </div>
        </div>
      </div>

      <div className="home-section-fifth">
        <div className='container'>
          <div className="home-section-fifth-inner d-flex justify-content-between align-items-center flex-wrap">
            <div className=" d-flex justify-content-center align-items-center">
              <div className='me-2'>
                <GoVerified style={{ fontSize: "25px", color: "white" }} />
              </div>
              <span className="home-section-fifth-text">
                {' '}
                Marktführer-Vorteile nutzen
              </span>
            </div>

            <div className=" d-flex justify-content-center align-items-center">
              <div className='me-2'>
                <GoVerified style={{ fontSize: "25px", color: "white" }} />
              </div>            <span className="home-section-fifth-text">
                {' '}
                Deutschlandweit zuverlässige Garantie
              </span>
            </div>

            <div className=" d-flex justify-content-center align-items-center">
              <div className='me-2'>
                <GoVerified style={{ fontSize: "25px", color: "white" }} />
              </div>            <span className="home-section-fifth-text">
                {' '}
                Qualitätssicherung: interne Prüfverfahren
              </span>
            </div>
          </div>
        </div>
      </div>


      {/* Home-Section-6 */}
      <Location />
      <Cover />

      {/* Home-Section-7 */}

      <Feedback />
      <BehindUs />
      <Faq />

      {/* footer */}
      <section className="hm-footer" style={{ background: "#173968    " }}>
        <div className='container py-3' style={{ borderTop: "1px solid white" }}>
          <div className='d-flex justify-between text-white'>
            <div>
              <span>© 2024 arztpool24 GmbH - Alle Rechte vorbehalten. (v2.5.4)</span>
            </div>
            <div className='d-flex gap-3'>
              <span>Impressum</span>
              <span>Datenschutz</span>
              <span>AGB</span>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Home
