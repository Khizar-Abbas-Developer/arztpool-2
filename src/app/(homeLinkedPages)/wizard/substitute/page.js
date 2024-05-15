'use client'
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { toast } from 'react-hot-toast';
import { useState } from 'react'
import './substitute.css'
import { Progress } from 'react-sweet-progress'
import 'react-sweet-progress/lib/style.css'
import Input from '@/app/_components/Input'
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
import Password from '@/app/_components/Password'
import { useEffect } from "react";

const Page = () => {
  const apiUrl = process.env.NEXT_PUBLIC_BACK_END_API_URL
  const representativeURL = `${apiUrl}/api/auth/v1/register_representative`;
  const [files, setFiles] = useState([]);
  const [listOfFederalStates, setListOfFederalStates] = useState([]);
  const [listOfSpecializations, setListOfSpecializations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/v1/federal_states_list`);
        setListOfFederalStates(response.data.data); // Update the state with the fetched data
        const response2 = await axios.get(`${apiUrl}/api/v1/specialization_list`);
        // console.log(response2);
        setListOfSpecializations(response2.data.data);
        // console.log(listOfSpecializations);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [apiUrl]);
  //Handle file
  // const handleFileChange = (e, fileName) => {
  //   const selectedFile = e.target.files[0]; // Get the first selected file

  //   // Find if the file with the same name already exists in the files array
  //   const existingFileIndex = files.findIndex(file => file.name === fileName);

  //   if (existingFileIndex !== -1) {
  //     // If a file with the same name exists, replace it with the new selected file
  //     setFiles(prevFiles => [
  //       ...prevFiles.slice(0, existingFileIndex),
  //       { file: selectedFile, name: fileName },
  //       ...prevFiles.slice(existingFileIndex + 1)
  //     ]);
  //   } else {
  //     // If no file with the same name exists, add the new file to the array
  //     setFiles(prevFiles => [
  //       ...prevFiles,
  //       { file: selectedFile, name: fileName }
  //     ]);
  //   }

  //   console.log(selectedFile);
  // };  
  const handleFileChange = (e, fileName) => {
    // Convert the FileList object to an array
    const selectedFiles = Array.from(e.target.files); // Get all selected files

    // Iterate over each selected file
    selectedFiles.forEach(selectedFile => {
      // Check if a file with the same name already exists in the files array
      const existingFileIndex = files.findIndex(file => file.name === selectedFile.name);

      if (existingFileIndex !== -1) {
        // If a file with the same name exists, append a unique identifier to the new file's name
        const newFileName = `${fileName}_${Date.now()}_${selectedFile.name}`;

        // Add the new file to the array with the modified name
        setFiles(prevFiles => [
          ...prevFiles,
          { file: selectedFile, name: newFileName }
        ]);

      } else {
        // If no file with the same name exists, add the new file to the array
        setFiles(prevFiles => [
          ...prevFiles,
          { file: selectedFile, name: selectedFile.name }
        ]);
      }

      // console.log(selectedFile);
    });
  };
  //handle file

  // You can perform actions dependent on the updated state here
  // useEffect(() => {
  //   console.log(listOfFederalStates);
  //   console.log(listOfSpecializations);
  // }, [listOfFederalStates, listOfSpecializations]);

  const [selectedValue, setSelectedValue] = useState('');
  const [confirmPassword, setConfirmPassword] = useState("");
  const [data, setData] = useState({
    title: "",
    first_name: "",
    last_name: "",
    birth_date: "2024-04-06",
    landLine_number: "",
    mobile_number: "",
    mobile_number_other: "",
    street: "",
    house_number: "",
    post_code: "",
    location: "",
    federal_state: "",
    account_owner: "",
    iban: "",
    bic: "",
    bank: "",
    tax_number: "",
    //4th form
    specialization: "",
    // medical_licence_certificate: ,
    // specialist_certificate: "",
    //5th form
    // insurance_policy: "",
    insurance_company: "",
    policy_number: "",
    insurance_valid_date: "2024-04-06",
    insurance_end_date: "2024-05-06",

    //6th form
    email: "",
    password: "",
  });
  const handleInputChange = (event) => {
    if (event && event.target) {
      const { name, value } = event.target;
      setData({
        ...data,
        [name]: value
      });
    }
  };
  const router = useRouter()
  const [FirstForm, setFirstForm] = useState('flex')
  const [secondForm, setSecondForm] = useState('none')
  const [thirdForm, setThirdForm] = useState('none')
  const [fourthForm, setFourthForm] = useState('none')
  const [fifthForm, setFifthForm] = useState('none')
  const [sixthForm, setSixthForm] = useState('none')
  //Continues functions
  const firstFormContinue = (e) => {
    e.preventDefault()
    if (
      data.title === "" ||
      data.first_name === "" ||
      data.last_name === "" ||
      data.birth_date === "" ||
      data.landLine_number === "" ||
      data.mobile_number === "" ||
      data.mobile_number_other === ""
    ) {
      toast.error("Please fill all the fields")
    } else {
      setFirstForm('none')
      setSecondForm('flex')
      setThirdForm('none')
    }
  }
  const secondFormContinue = (e) => {
    e.preventDefault()
    if (data.title === "" ||
      data.street === "" ||
      data.house_number === "" ||
      data.post_code === "" ||
      data.location === ""
      // data.federal_state === ""
    ) {
      toast.error("Please fill all the fields")
    } else {
      setFirstForm('none')
      setSecondForm('none')
      setThirdForm('flex')
    }
  }
  const thirdFormContinue = (e) => {
    e.preventDefault()
    if (data.account_owner === "" ||
      data.iban === "" ||
      data.bic === "" ||
      data.bank === "" ||
      data.tax_number === ""
    ) {
      toast.error("Please fill all the fields")
    } else {
      setFirstForm('none')
      setSecondForm('none')
      setThirdForm('none')
      setFourthForm('flex')
    }
  }
  const fouthFormContinue = (e) => {
    e.preventDefault()
    if (data.account_owner === "" ||
      data.specialization === ""
      // data.medical_licence_certificate === "" ||
      // data.specialist_certificate === ""
    ) {
      toast.error("Please fill all the fields")
    } else {
      setFirstForm('none')
      setSecondForm('none')
      setThirdForm('none')
      setFourthForm('none')
      setFifthForm('flex')
    }
  }
  const fifthFormContinue = (e) => {
    e.preventDefault()
    if (
      data.insurance_company === "" ||
      data.policy_number === "" ||
      data.insurance_valid_date === "" ||
      data.insurance_end_date === ""
    ) {
      toast.error("Please fill all the fields")
    } else {
      setFirstForm('none')
      setSecondForm('none')
      setThirdForm('none')
      setFourthForm('none')
      setFifthForm('none')
      setSixthForm('flex')
    }
  }
  const sixthFormContinue = (e) => { }

  const secondFormBack = () => {
    setFirstForm('flex')
    setSecondForm('none')
    setThirdForm('none')
  }
  const thirdFormBack = () => {
    setFirstForm('none')
    setSecondForm('flex')
    setThirdForm('none')
  }
  const fourthFormBack = () => {
    setFirstForm('none')
    setSecondForm('none')
    setThirdForm('flex')
    setFourthForm('none')
  }
  const fifthFormBack = () => {
    setFirstForm('none')
    setSecondForm('none')
    setThirdForm('none')
    setFourthForm('flex')
    setFifthForm('none')
  }
  const sixthFormBack = () => {
    setFirstForm('none')
    setSecondForm('none')
    setThirdForm('none')
    setFourthForm('none')
    setFifthForm('flex')
    setSixthForm('none')
  }
  //API Integration
  const handleSubstituteSubmit = async (event) => {
    event.preventDefault();
    // const DoctorURl = `http://localhost:8080/api/auth/v1/register_representative`;
    try {
      // console.log(files);
      const formData = new FormData();

      // Append each field from the data object to FormData
      for (const key in data) {
        formData.append(key, data[key]);
      }
      files.forEach((file, index) => {
        formData.append(`files`, file.file); // Append the file itself, not the entire object
      });
      // console.log("FormData contents:");
      // formData.forEach((value, key) => {
      //   console.log(`Key: ${key}, Value: ${value}`);
      // });
      formData.forEach((value, key) => {
        if (Array.isArray(value)) { // Check if the value is an array
          // console.log(`Files:`);
          value.forEach(file => {
            // console.log(file); // Log each file in the files array
          });
        } else {
          // console.log(`Key: ${key}, Value: ${value}`);
        }
      });
      // console.log(representativeURL);
      const response = await axios.post(representativeURL, formData);
      // console.log(response);
      if (response.statusText === "OK") {
        toast.success(response.data.message);
        // Reset the form data and confirm password after successful submission
        setData({
          title: "",
          first_name: "",
          last_name: "",
          birth_date: "04-04-2024",
          landLine_number: "",
          mobile_number: "",
          mobile_number_other: "",
          street: "",
          house_number: "",
          post_code: "",
          location: "",
          federal_state: "",
          account_owner: "",
          iban: "",
          bic: "",
          bank: "",
          tax_number: "",
          specialization: "",
          insurance_company: "",
          policy_number: "",
          insurance_valid_date: "04-04-2024",
          insurance_end_date: "04-04-2024",
          email: "",
          password: "",
        });
        setConfirmPassword("");
        // Clear the files array after submission
        setFiles([]);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };


  //API Integration Ended
  const handleBirthDateChange = (newDate) => {
    // Update the birth_date field in the data state with the newDate value
    setData({
      ...data,
      birth_date: newDate ? dayjs(newDate).format('YYYY-MM-DD') : '' // Format the date as needed
    });
  };
  const handleInsuranceStartDate = (newDate) => {
    // Update the birth_date field in the data state with the newDate value
    setData({
      ...data,
      insurance_valid_date: newDate ? dayjs(newDate).format('YYYY-MM-DD') : '' // Format the date as needed
    });
  };
  const handleInsuranceEndDate = (newDate) => {
    // Update the birth_date field in the data state with the newDate value
    setData({
      ...data,
      insurance_end_date: newDate ? dayjs(newDate).format('YYYY-MM-DD') : '' // Format the date as needed
    });
  };
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value; // Extract the selected value
    setData({ ...data, federal_state: selectedValue }); // Update the federal_state field in the data state
    // console.log(data);
  };
  const handleFederalState = (option) => {
    setData({ ...data, federal_state: option });
  };
  const handleSpecialization = (option) => {
    setData({ ...data, specialization: option })
  }
  return (
    <>
      <form className="main-container" onSubmit={handleSubstituteSubmit}>
        <div className="form-one-container row" style={{ display: FirstForm }}>
          {/* left section */}
          <div className='col-lg-6 col-md-12 col-sm-12 hm-wizard-left-section '>
            <div className="info-section-container">
              <div className="pg-progress-container pe-2">
                <span className="calculation-span">Schritt 1/6</span>
                <Progress
                  percent={16.6}
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
                <h1>Vervollständigen Sie in wenigen Schritten Ihr Profil</h1>
              </div>
              <div className="info-paragraph-text">
                In wenigen Schritten können Sie sich online bewerben. Fügen Sie
                die fehlenden Angaben hinzu, um KV-Dienste vertreten zu können.
              </div>
            </div>
          </div>
          {/* //right section */}
          <div className='col-lg-6 col-md-12 col-sm-12 h-100 hm-wizard-right-section'>
            <div className="form-section-container pt-3 bg-white hm-wizard-right-section-inner">
              <Input name="title" label={'Titel'} value={data.title} onChange={handleInputChange} />
              <Input name="first_name" label={'Vorname'} value={data.first_name} onChange={handleInputChange} />
              <Input name="last_name" label={'Nachname'} value={data.last_name} onChange={handleInputChange} />
              <div className="set z-50">
                <span className="label-span">Geburtsdatum*</span>
                <LocalizationProvider
                  dateAdapter={AdapterDayjs}
                  className="tempo-0"
                >
                  <DemoContainer
                    components={['DesktopDatePicker']}
                    className="tempo"
                  >
                    <DesktopDatePicker
                      name='birth_date'
                      // value={data.birth_date}
                      onChange={(newDate) => handleBirthDateChange(newDate)}
                      defaultValue={dayjs(`${data.birth_date}`)}
                      className="datep"
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
              <Input name="landLine_number" label={'Festnetznummer'} type="number" value={data.landLine_number} onChange={handleInputChange} />
              <Input name="mobile_number" label={'Handynummer'} type="number" value={data.mobile_number} onChange={handleInputChange} />
              <Input name="mobile_number_other" type="number" label={'Weitere Handynummer'} value={data.mobile_number_other} onChange={handleInputChange} />
              <div className="form-buttons-container">
                <Link href="/">
                  <button className="buttons-1">
                    Zurück
                  </button>
                </Link>
                <button className="buttons-2" onClick={firstFormContinue}>
                  Bestätigen und weiter
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* 2 */}


        {/* //Form two container is starting from here */}
        <div className="form-two-container row " style={{ display: secondForm }}>
          {/* left section */}
          <div className='col-lg-6 col-md-12 col-sm-12 hm-wizard-left-section '>
            <div className="info-section-container">
              <div className="pg-progress-container pe-2">
                <span className="calculation-span">Schritt 2/6</span>
                <Progress
                  percent={33.2}
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
                <h1>Wie lautet Ihre Rechnungsadresse?</h1>
              </div>
              <div className="info-paragraph-text">
                In wenigen Schritten können Sie sich online bewerben. Fügen Sie
                die fehlenden Angaben hinzu, um KV-Dienste vertreten zu können.
              </div>
            </div>
          </div>
          {/* //right section */}
          <div className='col-lg-6 col-md-12 col-sm-12 h-100 hm-wizard-right-section'>
            <div className="form-section-container pt-3 bg-white hm-wizard-right-section-inner">
              <Input name="street" label={'Straße'} value={data.street} onChange={handleInputChange} />
              <Input name="house_number" label={'Hausnummer'} value={data.house_number} onChange={handleInputChange} />
              <Input name="post_code" label={'PLZ'} type='number' value={data.post_code} onChange={handleInputChange} />
              <Input name="location" label={'Ort'} value={data.location} onChange={handleInputChange} />
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
                  <Option value={""} onClick={() => handleFederalState("")}>Bundesland</Option>
                  {listOfFederalStates.map((state, i) => {
                    return (
                      <React.Fragment key={i}>
                        <Option value={state.id} onClick={() => handleFederalState(state.id)}>{state.title}</Option>
                      </React.Fragment>
                    )
                  })}
                </Select>
              </div>
              <div className="form2-buttons-container">
                <button className="buttons-1" onClick={secondFormBack}>
                  Zurück
                </button>
                <button className="buttons-2" onClick={secondFormContinue}>
                  Bestätigen und weiter
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* 3 */}
        {/* //Form Three container is starting from here */}
        <div className="form-two-container row " style={{ display: thirdForm }}>
          {/* left section */}
          <div className='col-lg-6 col-md-12 col-sm-12 hm-wizard-left-section '>
            <div className="info-section-container">
              <div className="pg-progress-container pe-2">
                <span className="calculation-span">Schritt 3/6</span>
                <Progress
                  percent={49.8}
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
                <h1>Informationen für Ihre Honorarabrechnung</h1>
              </div>
              <div className="info-paragraph-text">
                In wenigen Schritten können Sie sich online bewerben. Fügen Sie
                die fehlenden Angaben hinzu, um KV-Dienste vertreten zu können.
              </div>
            </div>
          </div>
          {/* //right section */}
          <div className='col-lg-6 col-md-12 col-sm-12 h-100 hm-wizard-right-section'>
            <div className="form-section-container pt-3 bg-white hm-wizard-right-section-inner">
              <Input name="account_owner" label={'Kontoinhaber'} value={data.account_owner} onChange={handleInputChange} />
              <Input name="iban" label={'IBAN'} value={data.iban} onChange={handleInputChange} />
              <Input name="bic" label={'BIC'} value={data.bic} onChange={handleInputChange} />
              <Input name="bank" label={'Bank'} value={data.bank} onChange={handleInputChange} />
              <Input name="tax_number" label={'Steuernummer'} type='number' value={data.tax_number} onChange={handleInputChange} />
              <div className="form-buttons-container">
                <button className="buttons-1" onClick={thirdFormBack}>
                  Zurück
                </button>
                <button className="buttons-2" onClick={thirdFormContinue}>
                  Bestätigen und weiter
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////// */}

        {/* 4 */}
        {/* //Form Three container is starting from here */}
        <div className="form-two-container row" style={{ display: fourthForm }}>
          {/* left section */}
          <div className='col-lg-6 col-md-12 col-sm-12 hm-wizard-left-section '>
            <div className="info-section-container">
              <div className="pg-progress-container pe-2">
                <span className="calculation-span">Schritt 4/6</span>
                <Progress
                  percent={66.4}
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
                <h1>Ihre Qualifikation</h1>
              </div>
              <div className="info-paragraph-text">
                Um sich als Honorararzt bei arztpool bewerben zu können, benötigen Sie Ihre Approbationsurkunde und Ihre Facharzturkunde. Sie können diesen Schritt auch später in Ihrem Dashboard durchführen.
              </div>
            </div>
          </div>
          {/* //right section */}
          <div className='col-lg-6 col-md-12 col-sm-12 h-100 hm-wizard-right-section'>
            <div className="form-section-container pt-3 bg-white hm-wizard-right-section-inner">
              <div className="set">
                <Select
                  placeholder="Fachrichtung"
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
                  <Option value={""} onClick={() => handleSpecialization("")}>Fachrichtung</Option>
                  {listOfSpecializations.map((specialization, i) => {
                    return (
                      <React.Fragment key={i}>
                        <Option value={specialization.id} onClick={() => handleSpecialization(specialization.id)}>{specialization.title}</Option>
                      </React.Fragment>
                    )
                  })}
                </Select>
              </div>
              <div className='flex justify-start gap-6 mb-16 mt-6'>
                <div className="checkInput-container">
                  <input type="checkbox" name='checkbox' className='w-4 h-4' />
                </div>
                <div className='flex justify-start w-96 text-[16px] text-[#173968] leading-[20px]'>Hiermit bestätige ich, dass ich mich mindestens im dritten Jahr meiner ärztlichen Weiterbildung befinde oder diese bereits abgeschlossen habe.</div>
              </div>
              {/* //File Input field */}
              <div>
                <h1 className='text-[16px] text-[#173869] font-[600] mb-4'>Ihre Approbationsurkunde</h1>
                {/* //Upload Document Field */}
                <div className="flex gap-3 justify-start items-center my-2">
                  <div className="mb-16">
                    <div className="h-10 w-10">
                      <svg className="h-full w-full text-[#173968] svg-inline--fa fa-file-pdf fa-w-12 mdi v-icon notranslate v-theme--light v-icon--size-default v-icon--clickable" role="button" aria-hidden="true" aria-label="Haftpflichtversicherungsurkunde vorangestellte Aktion" focusable="false" data-prefix="fal" data-icon="file-pdf" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zm-22.6 22.7c2.1 2.1 3.5 4.6 4.2 7.4H256V32.5c2.8.7 5.3 2.1 7.4 4.2l83.9 83.9zM336 480H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h176v104c0 13.3 10.7 24 24 24h104v304c0 8.8-7.2 16-16 16zm-22-171.2c-13.5-13.3-55-9.2-73.7-6.7-21.2-12.8-35.2-30.4-45.1-56.6 4.3-18 12-47.2 6.4-64.9-4.4-28.1-39.7-24.7-44.6-6.8-5 18.3-.3 44.4 8.4 77.8-11.9 28.4-29.7 66.9-42.1 88.6-20.8 10.7-54.1 29.3-58.8 52.4-3.5 16.8 22.9 39.4 53.1 6.4 9.1-9.9 19.3-24.8 31.3-45.5 26.7-8.8 56.1-19.8 82-24 21.9 12 47.6 19.9 64.6 19.9 27.7.1 28.9-30.2 18.5-40.6zm-229.2 89c5.9-15.9 28.6-34.4 35.5-40.8-22.1 35.3-35.5 41.5-35.5 40.8zM180 175.5c8.7 0 7.8 37.5 2.1 47.6-5.2-16.3-5-47.6-2.1-47.6zm-28.4 159.3c11.3-19.8 21-43.2 28.8-63.7 9.7 17.7 22.1 31.7 35.1 41.5-24.3 4.7-45.4 15.1-63.9 22.2zm153.4-5.9s-5.8 7-43.5-9.1c41-3 47.7 6.4 43.5 9.1z"></path></svg>
                    </div>
                  </div>
                  {/* //Input Fields */}
                  <div className="flex mb-4 justify-center items-center">
                    <div className="sub-containers">
                      <div className="entryarea">
                        <label htmlFor="medical_license" className="custom-file-upload">
                          <input
                            id="medical_license"
                            className="input-item-k"
                            type="file"
                            name="medical_license"
                            accept=".pdf"
                            required
                            onChange={(e) => handleFileChange(e, 'medical_license')}
                          />
                          <div className="labelline">
                            {"Facharzturkunde"}
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* //File Input field */}
              {/* //File Input field */}
              <div>
                <h1 className='text-[16px] text-[#173869] font-[600] mb-4'>Ihre Facharzturkunde</h1>
                {/* //Upload Document Field */}
                <div className="flex gap-3 justify-start items-center my-2">
                  <div className="mb-16">
                    <div className="h-10 w-10">
                      <svg className="h-full w-full text-[#173968] svg-inline--fa fa-file-pdf fa-w-12 mdi v-icon notranslate v-theme--light v-icon--size-default v-icon--clickable" role="button" aria-hidden="true" aria-label="Haftpflichtversicherungsurkunde vorangestellte Aktion" focusable="false" data-prefix="fal" data-icon="file-pdf" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zm-22.6 22.7c2.1 2.1 3.5 4.6 4.2 7.4H256V32.5c2.8.7 5.3 2.1 7.4 4.2l83.9 83.9zM336 480H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h176v104c0 13.3 10.7 24 24 24h104v304c0 8.8-7.2 16-16 16zm-22-171.2c-13.5-13.3-55-9.2-73.7-6.7-21.2-12.8-35.2-30.4-45.1-56.6 4.3-18 12-47.2 6.4-64.9-4.4-28.1-39.7-24.7-44.6-6.8-5 18.3-.3 44.4 8.4 77.8-11.9 28.4-29.7 66.9-42.1 88.6-20.8 10.7-54.1 29.3-58.8 52.4-3.5 16.8 22.9 39.4 53.1 6.4 9.1-9.9 19.3-24.8 31.3-45.5 26.7-8.8 56.1-19.8 82-24 21.9 12 47.6 19.9 64.6 19.9 27.7.1 28.9-30.2 18.5-40.6zm-229.2 89c5.9-15.9 28.6-34.4 35.5-40.8-22.1 35.3-35.5 41.5-35.5 40.8zM180 175.5c8.7 0 7.8 37.5 2.1 47.6-5.2-16.3-5-47.6-2.1-47.6zm-28.4 159.3c11.3-19.8 21-43.2 28.8-63.7 9.7 17.7 22.1 31.7 35.1 41.5-24.3 4.7-45.4 15.1-63.9 22.2zm153.4-5.9s-5.8 7-43.5-9.1c41-3 47.7 6.4 43.5 9.1z"></path></svg>
                    </div>
                  </div>
                  {/* //Input Fields */}
                  <div className="flex mb-4 justify-center items-center">
                    <div className="sub-containers">
                      <div className="entryarea">
                        <label htmlFor="specialist_certificate" className="custom-file-upload">
                          <input
                            id="specialist_certificate"
                            className="input-item-k"
                            type="file"
                            name="specialist_certificate"
                            accept=".pdf"
                            required
                            onChange={(e) => handleFileChange(e, 'specialist_certificate')}
                          />
                          <div className="labelline">
                            {"Facharzturkunde"}
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* //File Input field */}
              <div className='flex justify-start items-center w-[90%] py-4 ml-4'>
                <p className='text-[#173968] text-[16px]'>Falls Sie von Ihrer Approbation oder Ihrer Facharzturkunde gerade kein gescanntes PDF zur Hand haben, lassen Sie diese Felder erstmal leer. Sie können uns diese später noch ihn Ihrem Profil nachreichen.</p>
              </div>
              <div className="form-buttons-container">
                <button className="buttons-1" onClick={fourthFormBack}>
                  Zurück
                </button>
                <button className="buttons-2" onClick={fouthFormContinue}>
                  Bestätigen und weiter
                </button>
              </div>
            </div>
          </div>
        </div>


        {/* 5 */}
        {/* //Form Three container is starting from here */}
        <div className="form-two-container row" style={{ display: fifthForm }}>
          {/* left section */}
             <div className='col-lg-6 col-md-12 col-sm-12 hm-wizard-left-section '>
            <div className="info-section-container">
              <div className="pg-progress-container pe-2">
                <span className="calculation-span">Schritt 5/6</span>
                <Progress
                  percent={83}
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
                <h1>Versicherungsnachweis</h1>
              </div>
              <div className="info-paragraph-text">
                In wenigen Schritten können Sie sich online bewerben. Fügen Sie die fehlenden Angaben hinzu, um KV-Dienste vertreten zu können.
              </div>
            </div>
          </div>
          {/* //right section */}
          <div className='col-lg-6 col-md-12 col-sm-12 h-100 hm-wizard-right-section'>
            <div className="form-section-container pt-3 bg-white hm-wizard-right-section-inner">
              {/* //File Input field */}
              <div>
                <h1 className='text-[16px] text-[#173869] font-[600] mb-4'>Ihre Berufshaftpflicht (Versicherungspolice)</h1>
                {/* //Upload Document Field */}
                <div className="flex gap-3 justify-start items-center my-2">
                  <div className="mb-16">
                    <div className="h-10 w-10">
                      <svg className="h-full w-full text-[#173968] svg-inline--fa fa-file-pdf fa-w-12 mdi v-icon notranslate v-theme--light v-icon--size-default v-icon--clickable" role="button" aria-hidden="true" aria-label="Haftpflichtversicherungsurkunde vorangestellte Aktion" focusable="false" data-prefix="fal" data-icon="file-pdf" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zm-22.6 22.7c2.1 2.1 3.5 4.6 4.2 7.4H256V32.5c2.8.7 5.3 2.1 7.4 4.2l83.9 83.9zM336 480H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h176v104c0 13.3 10.7 24 24 24h104v304c0 8.8-7.2 16-16 16zm-22-171.2c-13.5-13.3-55-9.2-73.7-6.7-21.2-12.8-35.2-30.4-45.1-56.6 4.3-18 12-47.2 6.4-64.9-4.4-28.1-39.7-24.7-44.6-6.8-5 18.3-.3 44.4 8.4 77.8-11.9 28.4-29.7 66.9-42.1 88.6-20.8 10.7-54.1 29.3-58.8 52.4-3.5 16.8 22.9 39.4 53.1 6.4 9.1-9.9 19.3-24.8 31.3-45.5 26.7-8.8 56.1-19.8 82-24 21.9 12 47.6 19.9 64.6 19.9 27.7.1 28.9-30.2 18.5-40.6zm-229.2 89c5.9-15.9 28.6-34.4 35.5-40.8-22.1 35.3-35.5 41.5-35.5 40.8zM180 175.5c8.7 0 7.8 37.5 2.1 47.6-5.2-16.3-5-47.6-2.1-47.6zm-28.4 159.3c11.3-19.8 21-43.2 28.8-63.7 9.7 17.7 22.1 31.7 35.1 41.5-24.3 4.7-45.4 15.1-63.9 22.2zm153.4-5.9s-5.8 7-43.5-9.1c41-3 47.7 6.4 43.5 9.1z"></path></svg>
                    </div>
                  </div>
                  {/* //Input Fields */}
                  <div className="flex mb-4 justify-center items-center">
                    <div className="sub-containers">
                      <div className="entryarea">
                        <label htmlFor="insurance_policy" className="custom-file-upload">
                          <input
                            id="insurance_policy"
                            className="input-item-k"
                            type="file"
                            name="insurance_policy"
                            accept=".pdf"
                            required
                            onChange={(e) => handleFileChange(e, 'insurance_policy')}
                          />
                          <div className="labelline">
                            {"Datei auswählen"}
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* //File Input field */}
              <Input label="Name der Versicherung" name="insurance_company" value={data.insurance_company} onChange={handleInputChange} />
              <Input label="Nummer der Police" name="policy_number" value={data.policy_number} onChange={handleInputChange} />
              <div className="set z-50">
                <span className="label-span">Ab wann ist die Versicherung gültig?</span>
                <LocalizationProvider
                  dateAdapter={AdapterDayjs}
                  className="tempo-0"
                >
                  <DemoContainer
                    components={['DesktopDatePicker']}
                    className="tempo"
                  >
                    <DesktopDatePicker
                      className="datep z-50"
                      name='insurance_valid_date'
                      onChange={(newDate) => handleInsuranceStartDate(newDate)}
                      defaultValue={dayjs(`${data.insurance_valid_date}`)}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
              <div className="set">
                <span className="label-span">Bis wann ist die Versicherung gültig?</span>
                <LocalizationProvider
                  dateAdapter={AdapterDayjs}
                  className="tempo-0"
                >
                  <DemoContainer
                    components={['DesktopDatePicker']}
                    className="tempo"
                  >
                    <DesktopDatePicker
                      name='insurance_end_date'
                      className="datep"
                      onChange={(newDate) => handleInsuranceEndDate(newDate)}
                      defaultValue={dayjs(`${data.insurance_end_date}`)}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
              <div className='flex justify-start items-center w-[90%] py-4 ml-4'>
                <p className='text-[#173968] text-[16px]'>Falls Sie Ihre Versicherungsinformationen gerade nicht zur Hand haben, lassen Sie diese Felder erstmal leer. Sie können uns diese später noch ihn Ihrem Profil nachreichen.</p>
              </div>
              <div className="form-buttons-container">
                <button className="buttons-1" onClick={fifthFormBack}>
                  Zurück
                </button>
                <button className="buttons-2" onClick={fifthFormContinue}>
                  Bestätigen und weiter
                </button>
              </div>
            </div>
          </div>
        </div>


        {/* 6 */}
        {/* //Form Three container is starting from here */}
        <div className="form-two-container row" style={{ display: sixthForm }}>
          {/* left section */}
         <div className='col-lg-6 col-md-12 col-sm-12 hm-wizard-left-section '>
            <div className="info-section-container">
              <div className="pg-progress-container pe-2">
                <span className="calculation-span">Schritt 6/6</span>
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
                <h1>Registrieren Sie Ihren Account</h1>
              </div>
              <div className="info-paragraph-text">
                Bitte registrieren Sie Ihren Account und klicken Sie dann in der Bestätigungs E-Mail auf den Link, um ihre E-Mail Adresse zu bestätigen.
              </div>
            </div>
          </div>
          {/* //right section */}
          <div className='col-lg-6 col-md-12 col-sm-12 h-100 hm-wizard-right-section'>
            <div className="form-section-container pt-3 bg-white hm-wizard-right-section-inner">
              <Input label="E-Mail" name="email" value={data.email} onChange={handleInputChange} />
              <Password label={"Passwort"} name="password" value={data.password} onChange={handleInputChange} />
              <Password label={"Passwort bestätigen"} name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
              <p className='px-2'>Mit Erstellung eines Accounts stimmen Sie unseren <span className='text-[rgb(31,185,229)]'>AGB</span> und <span className='text-[rgb(31,185,229)]'>Datenschutzbestimmungen</span> zu.</p>
              <div className="form-buttons-container">
                <button className="buttons-1" onClick={sixthFormBack}>
                  Zurück
                </button>
                <button className="buttons-2" onClick={sixthFormContinue} type="submit">
                  Registrieren
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default Page;