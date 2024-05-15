import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { Form, Button } from 'react-bootstrap'

import RadioTypeSelect from '@/app/_components/home/calculator/_components/radio-type-select'
import { FloatingLabel } from 'react-bootstrap'

import { Nav, Tab } from 'react-bootstrap'
import { FaUserDoctor } from 'react-icons/fa6'

import QuickStartFormOne from './_components/quick-start-form-one'
import QuickStartFormTwo from './_components/quick-start-form-two'

import Style from '@/assets/css/_components/home/calculator/calculator.module.css'
import { useState } from 'react'

export default function Calculator() {
  const [percentage, setPercentage] = useState(0)
  const [valueToShow, setValueToShow] = useState(10)
  const [rangeValue, setRangeValue] = useState(0)
  const [checked, setChecked] = useState('fahrdienst')
  const [displayCont, setDisplayCont] = useState('none')
  const [activeTab, setActiveTab] = useState('first')
  const handleMouseEnter = (e) => {
    setDisplayCont('block')
  }
  const handleMouseLeave = (e) => {
    setDisplayCont('none')
  }
  const handleRangeChange = (event) => {
    const newValue = parseInt(event.target.value)
    setRangeValue(newValue)


    // Adjusting value to show based on percentage
    if (newValue === 20) {
      setValueToShow(11)
      setPercentage(5)
    }
    if (newValue === 40) {
      setValueToShow(12)
      setPercentage(8)
    }
    if (newValue === 60) {
      setValueToShow(13)
      setPercentage(10)
    }
    if (newValue === 80) {
      setValueToShow(14)
      setPercentage(12)
    }
    if (newValue === 100) {
      setValueToShow(14)
      setPercentage(15)
    }
    if (newValue === 120) {
      setValueToShow(15)
      setPercentage(18)
    }
    if (newValue === 140) {
      setValueToShow(16)
      setPercentage(22)
    }
  }
  return (
    <>
      <div className={`${Style.calculator}`} style={{ position: 'relative' }}>
        <div
          className={`${Style.overlay}`}
          style={{
            width: '430px',
            height: '343px',
            position: 'absolute',
            zIndex: '9',
            display: displayCont,
            top: '90px',
            left: '12px',
            right: '12px',
            backgroundColor: 'white',
          }}
        >
          <div className={`${Style.textContainer}`}>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloremque nam itaque laboriosam ea, explicabo nulla molestiae.
              Inventore sequi provident pariatur ipsa dignissimos, repellendus
              debitis optio rerum? Accusantium eos quaerat error!
            </p>
          </div>
          <div
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              width: 130,
              height: 200,
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
              marginTop: '3px',
            }}
          >
            <CircularProgressbar value={percentage} strokeWidth={6} />
            <div style={{ position: 'absolute', top: '70px', left: '40px', display: "flex", justifyContent: "center", alignItems: "center" }}>
              <div className="">
                <FaUserDoctor className={`${Style.doctorIcon}`} />
              </div>
              <div className="">

              </div>
              <span className={`${Style.dynamicNumber}`} style={{ marginTop: '10px', marginTop: '2px' }}>
                {valueToShow}
              </span>
            </div>
          </div>
        </div>
        <Tab.Container className="bg-white">
          <Nav
            variant="pills"
            className="flex"
            fill
            style={{ alignItems: 'flex-end' }}
          >
            <Nav.Item
              key={1}
              className={activeTab === 'first' ? Style.activeFirst : ''}
            >
              <Nav.Link
                bsPrefix={`${Style.tabLink} nav-link`}
                eventKey="first"
                active={activeTab === 'first'}
                onClick={() => setActiveTab('first')}
              >
                Dienst vertreten lassen
              </Nav.Link>
            </Nav.Item>
            <Nav.Item key={2} className={Style.activeSecond}>
              <Nav.Link
                bsPrefix={`${Style.tabLink} nav-link`}
                eventKey="second"
                active={activeTab === 'second'}
                onClick={() => setActiveTab('second')}
              >
                Dienst übernehmen
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content className={`${Style.tabContent} bg-white`}>
            <Tab.Pane
              eventKey="first"
              active={activeTab === 'first'}
            >
              {/* // */}
              <Form className="pt-1 px-3 d-flex flex-column justify-content-between ">
                <div className="p-3 customk">
                  <RadioTypeSelect
                    list={[
                      {
                        label: 'Fahrdienst',
                        value: 'fahrdienst',
                      },
                      {
                        label: 'Transport',
                        value: 'transport',
                      },
                      {
                        label: 'Reise',
                        value: 'reise',
                      },
                    ]}
                    type="radio"
                    checked={checked}
                    setChecked={setChecked}
                  />

                  <div className="border-bottom my-4 d-flex align-items-center customk2">
                    <svg
                      height={20}
                      width={20}
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fal"
                      data-icon="map-marker-alt"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M192 96c-52.935 0-96 43.065-96 96s43.065 96 96 96 96-43.065 96-96-43.065-96-96-96zm0 160c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64zm0-256C85.961 0 0 85.961 0 192c0 77.413 26.97 99.031 172.268 309.67 9.534 13.772 29.929 13.774 39.465 0C357.03 291.031 384 269.413 384 192 384 85.961 298.039 0 192 0zm0 473.931C52.705 272.488 32 256.494 32 192c0-42.738 16.643-82.917 46.863-113.137S149.262 32 192 32s82.917 16.643 113.137 46.863S352 149.262 352 192c0 64.49-20.692 80.47-160 281.931z"
                      ></path>
                    </svg>
                    <FloatingLabel className="w-100" label="Bundesland">
                      <Form.Select className="border-0">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </FloatingLabel>
                  </div>

                  <div className="border-bottom my-4 d-flex align-items-center">
                    <svg
                      height={20}
                      width={20}
                      className="svg-inline--fa fa-calendar-check fa-w-14 mdi v-icon notranslate v-theme--light v-icon--size-default"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fal"
                      data-icon="calendar-check"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M400 64h-48V12c0-6.627-5.373-12-12-12h-8c-6.627 0-12 5.373-12 12v52H128V12c0-6.627-5.373-12-12-12h-8c-6.627 0-12 5.373-12 12v52H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zM48 96h352c8.822 0 16 7.178 16 16v48H32v-48c0-8.822 7.178-16 16-16zm352 384H48c-8.822 0-16-7.178-16-16V192h384v272c0 8.822-7.178 16-16 16zm-66.467-194.937l-134.791 133.71c-4.7 4.663-12.288 4.642-16.963-.046l-67.358-67.552c-4.683-4.697-4.672-12.301.024-16.985l8.505-8.48c4.697-4.683 12.301-4.672 16.984.024l50.442 50.587 117.782-116.837c4.709-4.671 12.313-4.641 16.985.068l8.458 8.527c4.672 4.709 4.641 12.313-.068 16.984z"
                      ></path>
                    </svg>
                    <FloatingLabel className="w-100" label="Dienstbeginn">
                      <Form.Control className="border-0" type="date" />
                    </FloatingLabel>
                  </div>

                  <div className="border-bottom my-4 d-flex align-items-center">
                    <svg
                      height={20}
                      width={20}
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fal"
                      data-icon="calendar-check"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M400 64h-48V12c0-6.627-5.373-12-12-12h-8c-6.627 0-12 5.373-12 12v52H128V12c0-6.627-5.373-12-12-12h-8c-6.627 0-12 5.373-12 12v52H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zM48 96h352c8.822 0 16 7.178 16 16v48H32v-48c0-8.822 7.178-16 16-16zm352 384H48c-8.822 0-16-7.178-16-16V192h384v272c0 8.822-7.178 16-16 16zm-66.467-194.937l-134.791 133.71c-4.7 4.663-12.288 4.642-16.963-.046l-67.358-67.552c-4.683-4.697-4.672-12.301.024-16.985l8.505-8.48c4.697-4.683 12.301-4.672 16.984.024l50.442 50.587 117.782-116.837c4.709-4.671 12.313-4.641 16.985.068l8.458 8.527c4.672 4.709 4.641 12.313-.068 16.984z"
                      ></path>
                    </svg>
                    <FloatingLabel className="w-100" label="Dienstende">
                      <Form.Control className="border-0" type="date" />
                    </FloatingLabel>
                  </div>

                  <div className={`${Style.targetHover}`}>
                    <div className="d-inline-flex align-items-center">
                      <svg
                        width={20}
                        height={20}
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fal"
                        data-icon="coins"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M336 32c-48.6 0-92.6 9-124.5 23.4-.9.4-51.5 21-51.5 56.6v16.7C76.1 132.2 0 163.4 0 208v192c0 44.2 78.8 80 176 80s176-35.8 176-80v-16.4c89.7-3.7 160-37.9 160-79.6V112c0-37-62.1-80-176-80zm-16 368c0 13.9-50.5 48-144 48S32 413.9 32 400v-50.1c31.8 20.6 84.4 34.1 144 34.1s112.2-13.5 144-34.1V400zm0-96c0 13.9-50.5 48-144 48S32 317.9 32 304v-50.1c31.8 20.6 84.4 34.1 144 34.1s112.2-13.5 144-34.1V304zm-144-48c-81 0-146.7-21.5-146.7-48S95 160 176 160s146.7 21.5 146.7 48S257 256 176 256zm304 48c0 13.1-45 43.6-128 47.3v-64.1c52.8-2.2 99.1-14.6 128-33.3V304zm0-96c0 13.1-45.1 43.4-128 47.2V208c0-5.6-1.7-11-4.1-16.3 54.6-1.7 102.4-14.5 132.1-33.8V208zm-144-48c-7.3 0-14-.5-20.9-.9-36.9-21.7-85-28.2-115.6-30-6.3-5.3-10.1-11-10.1-17.1 0-26.5 65.7-48 146.7-48s146.7 21.5 146.7 48S417 160 336 160z"
                        ></path>
                      </svg>
                      <span className="ps-2">
                        Honorar für Ihren Vertreter €/Std.
                      </span>
                    </div>
                    <div
                      className="my-4"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Form.Range
                        className="px-4"
                        min={0}
                        max={150}
                        step={1}
                        value={rangeValue}
                        onChange={handleRangeChange}
                      />
                      <div className="ps-1 d-flex justify-content-between">
                        <div>45€/Std.</div>
                        <div>120€/Std.</div>
                        <div>200€/Std.</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-1">
                  <Button type="submit" className="w-100">
                    Weiter
                  </Button>
                </div>
              </Form>
              {/* // */}
            </Tab.Pane>
            <Tab.Pane
              eventKey="second"
              className="h-100"
              active={activeTab === 'second'}
            >
              <QuickStartFormTwo />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </>
  )
}
