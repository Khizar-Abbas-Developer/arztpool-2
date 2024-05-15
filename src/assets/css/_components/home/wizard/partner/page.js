'use client'
import { useState } from 'react'
import './partner.css'
import { toast } from 'react-hot-toast';
import { Progress } from 'react-sweet-progress'
import 'react-sweet-progress/lib/style.css'
import Input from '@/app/(Operator_layout)/components/Input/Input'
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'
import { useRouter } from 'next/navigation'
import * as React from 'react'
import Button from '@mui/joy/Button'
import Select from '@mui/joy/Select'
import Option from '@mui/joy/Option'
import Stack from '@mui/joy/Stack'
import Link from 'next/link'
import Accordian from './(accordian)/_accordian'
import Form from 'react-bootstrap/Form';
import { FaMinus, FaPlus } from 'react-icons/fa';
import Password from '@/app/(Operator_layout)/components/Password/Password';
import axios from "axios";
import { useEffect } from 'react';

const Page = () => {
  const [category, setCategory] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    mvz_name: "",
    lannar: "",
    resource_type: 0,
    title: "",
    federal_state: "",
    service_area: 1
  })
  const [selected, setSelected] = useState(null);
  const [mainLayout, setMainLayout] = useState(true);
  const [secondLayout, setSecondLayout] = useState(false);
  const [thirdLayout, setThirdLayout] = useState(false);
  const [thirdForm, setThirdForm] = useState('flex')
  const [AccordionHeight, setAccordionHeight] = useState("25vh");
  const apiUrl = process.env.NEXT_PUBLIC_BACK_END_API_URL
  const representativeURL = `${apiUrl}/api/auth/v1/register_representative`;
  const [files, setFiles] = useState([]);
  const [listOfFederalStates, setListOfFederalStates] = useState([]);
  const [listOfServiceArea, setListOfServiceArea] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/v1/federal_states_list`);
        setListOfFederalStates(response.data.data); // Update the state with the fetched data
        if (data.federal_state !== "" && listOfServiceArea.length === 0) {
          const response2 = await axios.get(`${apiUrl}/api/v1/service_area?state_id=${data.federal_state}`);
          setListOfServiceArea(response2.data.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [apiUrl, data.federal_state, listOfServiceArea]);
  const handleInputChange = (event) => {
    if (event && event.target) {
      const { name, value } = event.target;
      setData({
        ...data,
        [name]: value
      });
      // console.log(data);
    }
  };
  const handleRadioChangeOne = (event, index, name) => {
    setSelected(index);
    setAccordionHeight("100vh");
    setCategory(name)
    if (name === "mvz") {
      setData(prevData => ({
        ...prevData,
        resource_type: 0
      }));
    } else if (name === "individual") {
      setData(prevData => ({
        ...prevData,
        resource_type: 1
      }));
    }
  };
  const handleRadioChangeTwo = (event, index, name) => {
    setSelected(index);
    setAccordionHeight("100vh");
    setCategory(name)
    if (name === "mvz") {
      setData(prevData => ({
        ...prevData,
        resource_type: 0
      }));
    } else if (name === "individual") {
      setData(prevData => ({
        ...prevData,
        resource_type: 1
      }));
    }
  };
  const handleFirstContinue = () => {
    setSecondLayout(true)
    setThirdLayout(false)
    setMainLayout(false)
  }
  const handleSecondContinue = () => {
    setThirdLayout(true)
    setMainLayout(false)
    setSecondLayout(false)
  }
  const handleSecondBack = () => {
    setMainLayout(true)
    setThirdLayout(false)
    setSecondLayout(false)
  }
  const handleThirdBack = () => {
    setSecondLayout(true)
    setMainLayout(false)
    setThirdLayout(false)
  }
  const handleRepresentatorRegister = async () => {
    try {
      const customerRegisterURL = `${apiUrl}/api/auth/v1/register_customer`
      if (data.password !== confirmPassword) {
        toast.error("password and confirm password should match!")
      }
      console.log(data);
      const response = await axios.post(customerRegisterURL, data);
      toast.success(response.data.message);
      setData({
        name: "",
        email: "",
        password: "",
        mvz_name: "",
        lannar: "",
        resource_type: "",
        title: "",
        federal_state: "",
        service_area: "",
      })
      setConfirmPassword("");
    } catch (error) {
      toast.error(error.response.data.message)
      console.log(error.response.data.message);
    }
  }
  const handleSelectChange = (option) => {
    setData({ ...data, federal_state: option });
    console.log(data);
  };
  const handleServiceArea = (option) => {
    setData({ ...data, service_area: option })
    console.log(data);
  }
  return (
    <>
      <div className="main-container" style={{ display: mainLayout ? "block" : "none" }}>
        {/* 3 */}
        {/* //Form Three container is starting from here */}
        <div className="form-two-container" style={{ display: thirdForm }}>
          {/* left section */}
          <div className="left-section-container">
            <div className="info-section-container">
              <div className="pg-progress-container">
                <span className="calculation-span">Schritt 1/3</span>
                <Progress
                  percent={33.3}
                  theme={{
                    success: {
                      symbol: ' ',
                      color: 'rgb(223, 105, 180)',
                    },
                    active: {
                      symbol: ' ',
                      color: '#ED6D05',
                    },
                    default: {
                      symbol: ' ',
                      color: 'white',
                    },
                  }}
                />
              </div>
              <div className="info-heading-text">
                <h1 className='font-[600]'>Um welche Art von Institution handelt es sich?</h1>
              </div>
              <div className="info-paragraph-text">
                In wenigen Schritten ist ihr KV-Dienst online. Fügen Sie die
                fehlenden Angaben hinzu, um Ihren KV-Dienst vertreten zu lassen.
              </div>
            </div>
          </div>
          {/* //right section */}
          <div className="right-section-container">
            <div className="form-section-container">
              {/* Accordion// */}
              <div className="accordion" style={{ height: AccordionHeight, transition: "all 0.3s smooth" }}>
                <div className="items" key={0}>
                  <div className="titles">
                    <div className="form-check" onClick={() => handleRadioChangeOne(null, 0)}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="radio1"
                        id="flexRadioDefault1"
                        checked={selected === 0}
                        onChange={(event) => handleRadioChangeOne(event, 0, "mvz")}
                      />
                      <label className="form-check-label" htmlFor="flexRadioDefault1">
                        MVZ
                      </label>
                    </div>
                  </div>
                  <div className={selected === 0 ? 'content show' : 'content'}>
                    <form action="" className="form-one-radio">
                      <div>
                        <Input name={"mvz_name"} label={'Name des MVZ'} value={data.mvz_name} onChange={handleInputChange} />
                        <p className="form-one-text-1">
                          Als MVZ haben Sie später im Bereich &quot;Meine Daten&quot; die
                          Möglichkeit, einzelne Betriebsstätten anzulegen.
                        </p>
                        <p className="form-one-text-2 my-4">Zu vertretender Arzt</p>
                        <Input name={"title"} label={'Titel'} value={data.title} onChange={handleInputChange} />
                        <Input name={"name"} value={data.name} label={'Name (Vor- und Nachname)'} onChange={handleInputChange} />
                        <Input name={"lannar"} value={data.lannar} label={'LANR'} onChange={handleInputChange} />
                      </div>
                    </form>
                  </div>
                </div>
                {/* ///Section Partition */}
                {/* ///Section Partition */}
                {/* ///Section Partition */}
                <div className="items" key={1}>
                  <div className="titles">
                    <div className="form-check" onClick={() => handleRadioChangeTwo(null, 1, "individual")}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="radio2"
                        id="flexRadioDefault2"
                        checked={selected === 1}
                        onChange={(event) => handleRadioChangeTwo(event, 1)}
                      />
                      <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Einzelpraxis/Gemeinschaftspraxis
                      </label>
                    </div>
                  </div>
                  <div className={selected === 1 ? 'content show' : 'content'}>
                    <form action="" className="form-two-radio">
                      <Input name={"mvz_name"} label={'Name bzw. Praxisname'} value={data.mvz_name} onChange={handleInputChange} />
                      <p className="form-two-text-1">
                        Falls Sie nicht wissen, welchen Praxisnamen Sie hier angeben
                        sollen, nutzen Sie einfach Ihren Namen als „Praxis Vorname
                        Nachname“. Dies können Sie später jederzeit editieren
                      </p>
                      <p className="form-one-text-2 my-4">Zu vertretender Arzt</p>
                      <Input name={"title"} value={data.title} onChange={handleInputChange} label={'Titel'} />
                      <Input name={"name"} value={data.name} onChange={handleInputChange} label={'Name (Vor- und Nachname)'} />
                      <Input name={"lannar"} value={data.lannar} onChange={handleInputChange} label={'LANR'} />
                    </form>
                  </div>
                </div>
              </div>
              {/* Accordion// */}
              <div className="form-buttons-container">
                <Link href={"/"}>
                  <button className="buttons-1">Zurück</button>
                </Link>
                <button className="buttons-2" onClick={handleFirstContinue}>Bestätigen und weiter</button>
              </div>
            </div>
          </div>
        </div>
      </div>




      {/* djlfj */}
      {/* djlfj */}
      {/* djlfj */}
      {/* djlfj */}
      {/* djlfj */}
      {/* djlfj */}
      {/* djlfj */}
      {/* djlfj */}
      {/* djlfj */}
      {/* djlfj */}
      {/* djlfj */}
      {/* djlfj */}
      {/* djlfj */}
      <div className="main-container" style={{ display: secondLayout ? "block" : "none" }}>
        {/* 3 */}
        {/* //Form Three container is starting from here */}
        <div className="form-two-container" style={{ display: thirdForm }}>
          {/* left section */}
          <div className="left-section-container">
            <div className="info-section-container">
              <div className="pg-progress-container">
                <span className="calculation-span">Schritt 2/3</span>
                <Progress
                  percent={66.6}
                  theme={{
                    success: {
                      symbol: ' ',
                      color: 'rgb(223, 105, 180)',
                    },
                    active: {
                      symbol: ' ',
                      color: '#ED6D05',
                    },
                    default: {
                      symbol: ' ',
                      color: 'white',
                    },
                  }}
                />
              </div>
              <div className="info-heading-text">
                <h1 className='font-[600]'>In welchem Dienstgebiet sind Sie tätig?</h1>
              </div>
              <div className="info-paragraph-text">
                In wenigen Schritten ist Ihr KV-Dienst online. Fügen Sie die fehlenden Angaben hinzu, um Ihren KV-Dienst vertreten zu lassen.
              </div>
            </div>
          </div>
          {/* //right section */}
          <div className="right-section-container">
            <div className="form-section-container">
              {/* Accordion// */}
              <div className='select-menu-containert'>
                <div className="set z-50">
                  <Select
                    placeholder="Bundesland"
                    className="seletedf"
                    sx={{
                      width: 350,
                      height: 57,
                      border: 0,
                      borderBottom: '2px solid #C0C0C0',
                      borderRadius: 0,
                      marginTop: 1,
                      '&:focus-within': {
                        borderColor: '#ffbf00',
                      },
                      fontWeight: 600,
                    }}
                  >
                    <Option value={""} onClick={() => handleSelectChange("")}>Bundesland</Option>
                    {listOfFederalStates.map((state, i) => {
                      return (
                        <React.Fragment key={i}>
                          <Option value={state.id} onClick={() => handleSelectChange(state.id)}>{state.title}</Option>
                        </React.Fragment>
                      )
                    })}
                  </Select>
                </div>
                <div>
                  <Select
                    placeholder="Dienstgebiet"
                    className="seletedf"
                    sx={{
                      width: 350,
                      height: 57,
                      border: 0,
                      borderBottom: '2px solid #C0C0C0',
                      borderRadius: 0,
                      marginTop: 1,
                      '&:focus-within': {
                        borderColor: '#ffbf00',
                      },
                      fontWeight: 600,
                    }}
                  >
                    <Option value={""} onClick={() => handleServiceArea("")}>Dienstgebiet</Option>
                    {listOfServiceArea.map((state, i) => {
                      return (
                        <React.Fragment key={i}>
                          <Option value={state.id} onClick={() => handleServiceArea(state.id)}>{state.surname}</Option>
                        </React.Fragment>
                      )
                    })}
                  </Select>
                </div>
              </div>
              {/* Accordion// */}
              <div className="form-buttons-container">
                <button className="buttons-1" onClick={handleSecondBack}>Zurück</button>
                <button className="buttons-2" onClick={handleSecondContinue}>Bestätigen und weiter</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* djlfj */}
      {/* djlfj */}
      {/* djlfj */}
      {/* djlfj */}
      {/* djlfj */}
      {/* djlfj */}
      {/* djlfj */}
      {/* djlfj */}
      {/* djlfj */}
      {/* djlfj */}
      {/* djlfj */}
      {/* djlfj */}
      {/* djlfj */}
      <div className="main-container" style={{ display: thirdLayout ? "block" : "none" }}>
        {/* 3 */}
        {/* //Form Three container is starting from here */}
        <div className="form-two-container" style={{ display: thirdForm }}>
          {/* left section */}
          <div className="left-section-container">
            <div className="info-section-container">
              <div className="pg-progress-container">
                <span className="calculation-span">Schritt 3/3</span>
                <Progress
                  percent={99.9}
                  theme={{
                    success: {
                      symbol: ' ',
                      color: 'rgb(223, 105, 180)',
                    },
                    active: {
                      symbol: ' ',
                      color: '#ED6D05',
                    },
                    default: {
                      symbol: ' ',
                      color: 'white',
                    },
                  }}
                />
              </div>
              <div className="info-heading-text">
                <h1 className='font-[600]'>Registrieren Sie Ihren Account</h1>
              </div>
              <div className="info-paragraph-text">
                Bitte registrieren Sie Ihren Account und klicken Sie dann in der Bestätigungs E-Mail auf den Link, um ihre E-Mail Adresse zu bestätigen.
              </div>
            </div>
          </div>
          {/* //right section */}
          <div className="right-section-container">
            <div className="form-section-container">
              {/* Accordion// */}
              <div className='mx-12 mt-8'>
                <div className='email-input-container'>
                  <Input label="E-Mail" name="email" value={data.email} onChange={handleInputChange} />
                  {/* <Input label="E-Mail" name="email" /> */}
                </div>
                <div>
                  <Password label={"Passwort"} name="password" value={data.password} onChange={handleInputChange} />
                  {/* <Password label={"Passwort"} name="password" /> */}
                </div>
                <div>
                  {/* <Password label={"Passwort bestätigen"} name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /> */}
                  <Password label={"Passwort bestätigen"} name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <p className='px-2'>Mit Erstellung eines Accounts stimmen Sie unseren <span className='text-[rgb(31,185,229)]'>AGB</span> und <span className='text-[rgb(31,185,229)]'>Datenschutzbestimmungen</span> zu.</p>
              </div>
              {/* Accordion// */}
              <div className="form-buttons-container mt-8">
                <button className="buttons-1" onClick={handleThirdBack}>Zurück</button>
                <button className="buttons-2" onClick={handleRepresentatorRegister}>Registrieren</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
